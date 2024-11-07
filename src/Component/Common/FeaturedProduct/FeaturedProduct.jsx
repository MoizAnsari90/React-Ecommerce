import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailModal from '../DetailModal/DetailModal';

import "./FeaturedProduct.css"

const FeaturedProduct = () => {
  
  const [featureProduct, setFeatureProduct] = useState([]);
  const [isProduct, setProduct] = useState(null);

  var settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 1000, 
  };

  const getFeature = async () => {
    try {
      const {data} = await axios.get('https://api.escuelajs.co/api/v1/products');
      const res = data.slice(0,36);
      setFeatureProduct(res);
    } catch (error) {
      console.log("Error fetching featured products.");
    }
  }

  const handleProductClick = (productId) => {
    const product = featureProduct.find((item) => item.id === productId);
    if (product) {
      setProduct(product);
    } else {
      console.error(`Product with id ${productId} not found.`);
    }
  }

  const handleModal = () => {
    setProduct(null);
  }

  useEffect(() => {
    getFeature();
  },[]);

  return (
    <div className='FeaturedProduct-Wrapper'>
      <h1>Featured Product</h1>
      <div className='featProduct-Wrapper'>
        <Slider {...settings}>
          {
            featureProduct.map((item, index) => {
              const { id, title, images, price } = item;
              return (
                <div key={index}>
                  {images && <img src={images[0]} onClick={() => handleProductClick(id)} />}
                  <h4>{title}</h4>
                  <p>$ {price}</p>
                </div>
              );
            })
          }
        </Slider>
        
      </div>
      {isProduct && (
          <DetailModal product={isProduct} onClose={handleModal} />
        )}
    </div>
  );
}

export default FeaturedProduct;
