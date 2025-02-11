import './main.css'
import img1 from './img/icon1.png'
import img2 from './img/icon2.png'
import img3 from './img/icon3.png'
import img4 from './img/icon4.png'

let img = [img1, img2, img3, img4];

function  icon ({i}) {
    return (
        <div>
            <img src = {img[i]}/>
        </div>
        
    );
}

export default icon;