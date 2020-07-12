import React, { useState, useEffect, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { Bell, BellOff } from 'react-feather';

import 'bootstrap/dist/css/bootstrap.min.css';
import './TestComponent.scss';

const TestComponent = () => {
    moment.locale(navigator.languages[0].toLowerCase());
    return (
        <>
            <H1>TestComponent</H1>
        </>
    )
};

export default TestComponent;