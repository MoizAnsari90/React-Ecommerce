
import "./SliderBar.css";
// const SliderBar = () => {
//   return (
//     <div className="banner-Wrapper">
        
//     </div>
//   );
// }

// export default SliderBar;

import { BannerData } from '../../../utils/Constant/Banner';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBar = () => {
  const settings = {            
    infinite: true,       
    speed: 500,            
    slidesToShow: 1,      
    slidesToScroll: 1,     
    autoplay: true,        
    autoplaySpeed: 1000,   
  };

  return (
    <div className='Banner-Wrapper'>
      <Slider {...settings}>
        {
          BannerData.map((item,index)=>{
            const{image}=item
            return(
              <div key={index} data="item">
                <img src={image} alt="Slide 1" />
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default SliderBar;

