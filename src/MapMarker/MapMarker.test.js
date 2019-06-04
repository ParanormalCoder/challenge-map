import React from 'react';
import {shallow} from 'enzyme';

import {MapMarker} from './MapMarker';

const generateProps = ({ text = 'TEXT', type }) => ({
    type,
    text
})


describe('MapMarker', () => {
    it('should render office marker as default', () => {
        const component = shallow(<MapMarker {...generateProps({})}/>);
        expect(!!component.find('.marker--office')).toBe(true);
    });

    it('should render car marker if type is car', () => {
        const component = shallow(<MapMarker {...generateProps({ type: 'car' })}/>);
        expect(!!component.find('.marker--car')).toBe(true);
    });
});

