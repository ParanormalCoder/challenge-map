import React from 'react';
import {Col} from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import {MapMarker} from '../MapMarker/MapMarker'

import './Map.scss';

export default class App extends React.Component {
    renderCars = () => {
        return this.props.carsList.map((car, index) => {
            return (<MapMarker
                lng={car.location.longitude}
                lat={car.location.latitude}
                text={car.driver_id}
                type='car'
                key={index}
            />)
        })
    }

    render() {
        return (
            <Col sm="12" className="map">
                <div style={{ height: '80vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'PUT_YOUR_KEY' }}
                        defaultCenter={this.props.officeCoordination}
                        defaultZoom={10}
                    >
                        <MapMarker
                            key="office"
                            {...this.props.officeCoordination}
                        />
                        {this.renderCars()}
                    </GoogleMapReact>
                </div>
            </Col>
        )
    }
}
