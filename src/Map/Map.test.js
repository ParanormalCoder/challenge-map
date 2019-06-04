import React from 'react';
import {shallow} from 'enzyme';

import Maps from './Map';

const generateProps = ({ carsList = [] }) => ({
    carsCount: 1,
    carsList: [{
        location: {
            longitude: 0,
            latitude: 0
        },
        driver_id: 'test'
    }, ...carsList]
})


describe('Map', () => {
    it('should render without crashing', () => {
        const component = shallow(<Maps {...generateProps({})}/>);
        expect(!!component.find('Slider')).toBe(true);
    });

    it('should show markers as given', () => {
        const props = generateProps({
            carsList: [{
                location: {
                    longitude: 0,
                    latitude: 0
                },
                driver_id: 'test'
            }]
        });

        const component = shallow(<Maps {...props}/>);
        expect(!!component.find('GoogleMapReact')).toBe(true);
        expect(component.find('MapMarker').length).toBe(3);
    });

    it('should have Google Map rendered', () => {
        const props = generateProps({});
        const component = shallow(<Maps {...props}/>);
        expect(!!component.find('GoogleMapReact')).toBe(true);
    });
});

