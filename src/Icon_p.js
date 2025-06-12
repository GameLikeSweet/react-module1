import './main.css';
import Icon from './Icon.js';
import React from 'react';

function Icon_p ({i}) {
    return(
        <p>
            <Icon i = {i}/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    );
}

export default Icon_p;