import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import moxios from 'moxios'

import App from './App';

describe('App', () => {
    beforeEach(function () {
        moxios.install()
    })

    afterEach(function () {
        moxios.uninstall()
    })

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should have the initial states on mount', () => {
        const component = shallow(<App/>);

        expect(component.instance().state).toEqual({
            "carsCount": 1,
            "carsList": [],
            "officeCoordination": { "lat": 51.5049375, "lng": -0.0964509 }
        })
    });

    it('should have both Footer and Map', () => {
        const component = shallow(<App/>);
        expect(!!component.find('Map')).toBe(true)
        expect(!!component.find('Footer')).toBe(true)
    });

    it('should have both Footer and Map', () => {
        const component = shallow(<App/>);
        expect(!!component.find('Map')).toBe(true)
        expect(!!component.find('Footer')).toBe(true)
    });
})

