import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import MyComponent from '../src/components/my-component/MyComponent';
import useCustomHook from '../src/components/my-component/useCustomHook';
import { act } from 'react-dom/test-utils'

describe('MyComponent', () => {

    const onCountChange = jest.fn(x => x);
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(<MyComponent onCountChange={onCountChange} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('works', () => {
        console.log(wrapper.debug());
        expect(wrapper).not.toBeNull();
    });

    it('show my default text', () => {
        expect(wrapper.find('p').text()).toEqual('Count: 0');
    });

    it('correctly increments the count by 1', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 1');
    });

    it('correctly increments the count by 4', () => {
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 4');
    });

    it('validate use effect', () => {
        expect(onCountChange).toBeCalledTimes(1);
        wrapper.find('button').simulate('click');
        expect(onCountChange).toBeCalledTimes(2);
    });


});

describe.only('useCustomHook', () => {
    let wrapper: any;
    let results: any;
    const renderHook = (hook: { (): { count: number; increment: () => void; }; }) => {        
        function HookWrapper() {
            results = hook();
            return null;
        }
        mount(<HookWrapper/>);
        return results;
    }

    it('work', () => {
        renderHook(useCustomHook); 
        expect(results.count).toEqual(0);

        act(() => {
            results.increment();
        });

        expect(results.count).toEqual(1);
    });
});