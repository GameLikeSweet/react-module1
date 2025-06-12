import './main.css';
import React from 'react';
import Icon_p from './Icon_p';

let article = [];
for(let i = 0 ; i < 4; i++)
{
    article.push(<Icon_p i = {i}/>)
}

function Icon_box () {
    return(
        <div className='icon_box'>
            {article}
        </div>
    );
}

export default Icon_box;