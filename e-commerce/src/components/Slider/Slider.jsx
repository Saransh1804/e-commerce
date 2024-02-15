import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import "./Slider.scss";
import { sliderItems } from "../data";
import React, { useState } from 'react';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    const translateXValue = (slideIndex) => `${slideIndex * -100}vw`;

    return (
        <div className='Slider'>
            <div className='ArrowL' direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </div>
            <div className='Wrapper' style={{ transform: `translateX(${translateXValue(slideIndex)})` }}>
                {sliderItems.map((item) => (
                    <div className='Slide' key={item.id} style={{ backgroundColor: `#${item.bg}` }}>
                        <div className='ImgContainer'>
                            <img src={item.img} alt='' />
                        </div>
                        <div className='InfoContainer'>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <button>SHOW NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='ArrowR' direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </div>
        </div>
    );
}

export default Slider;
