import React from 'react';

import './MapMarker.scss'

export const MapMarker = ({ text, type }) => <div className={type === 'car' ? 'marker--car' : 'marker--office'}>{text}</div>;
