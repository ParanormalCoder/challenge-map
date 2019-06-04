import React from 'react';
import {Container, Row} from 'reactstrap'
import axios from 'axios'

import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import './App.scss';

export default class App extends React.Component {
    state = {
        carsList: [],
        carsCount: 1,
        officeCoordination: {
            lat: 51.5049375, lng: -0.0964509
        }
    };

    interval = null;
    callInProgress = false;

    loadCardsInfo = () => {
        if (!this.callInProgress) {
            this.callInProgress = true
            return axios.get(`http://localhost:4576/get-cars?cars=${this.state.carsCount}`)
                .then(res => {
                    this.setState({ carsList: res.data.drivers });
                    this.callInProgress = false
                })
                .catch(err => {
                    console.error(err)
                    this.callInProgress = false
                })
        }
        return Promise.resolve();
    }

    clearInterval = () => {
        clearInterval(this.interval)
    }

    setInterval = () => {
        this.clearInterval();
        this.loadCardsInfo().then(() => {
            this.interval = setInterval(this.loadCardsInfo, 5000);
        })
    }

    componentDidMount() {
        this.setInterval()
    }

    onSliderChange = carsCount => {
        this.setState(state => ({ ...state, carsCount }), this.setInterval);
    }

    render() {
        const {state} = this

        return (
            <Container>
                <Container>
                    <Row>
                        <Map {...state}/>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Footer {...this.state} onSliderChange={this.onSliderChange}/>
                    </Row>
                </Container>
            </Container>
        )
    }
}
