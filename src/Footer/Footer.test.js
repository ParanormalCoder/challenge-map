import React from 'react';
import {shallow} from 'enzyme';

import Footer from './Footer';

const generateProps = ()=>({
    carsCount: 1,
    onSliderChange: jest.fn()
})


describe('Footer', () => {
    it('should render without crashing', () => {
        const component = shallow(<Footer {...generateProps()}/>);
        expect(!!component.find('Slider')).toBe(true);
    });

    it('should call the handler coming from props once with 5 by local handler for Slider', () => {
        const props = generateProps();
        const component = shallow(<Footer {...props}/>);
        component.instance().onSliderChange(5);
        expect(props.onSliderChange).toBeCalledTimes(1)
        expect(props.onSliderChange).toBeCalledWith(5)
    });
});

