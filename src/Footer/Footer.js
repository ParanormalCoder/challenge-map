import React from 'react';
import {Col, Label} from 'reactstrap'
import Slider from 'rc-slider';

import './Footer.scss';

export default class App extends React.Component {
    onSliderChange = (currentPosition) => {
        this.props.onSliderChange(currentPosition)
    }

    render() {
        return (
            <Col sm="12" className="footer">
                <Slider min={1} defaultValue={1} max={50} step={1} onAfterChange={this.onSliderChange}/>
                <Label>Cars count: {this.props.carsCount}</Label>
            </Col>
        )
    }
}
