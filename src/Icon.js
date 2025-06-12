import './main.css'
import React from 'react';
import img1 from '../src/img/icon1.png'
import img2 from '../src/img/icon2.png'
import img3 from '../src/img/icon3.png'
import img4 from '../src/img/icon4.png'

let img = [img1, img2, img3, img4];

function  Icon ({i}) {
    return (
        <div>
            <img src = {img[i]}/>
        </div>
        
    );
}

export default Icon;