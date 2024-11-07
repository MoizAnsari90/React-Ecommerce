
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedCard.css";
import { useNavigate } from "react-router-dom";




export const CategoryContext = createContext()
export const CategoryProvider = ({ children}) =>{
      const [Category,setCategory] = useState(null)

    const getData = async () =>{
        const data = await axios.get('https://api.escuelajs.co/api/v1/categories')
        const res = data?.data;
        setCategory(res)
    }

    useEffect(()=>{
      getData()
    },[])

  return(
      <CategoryContext.Provider value={{Category}}>
          {children}
      </CategoryContext.Provider>
  )


}



const FeaturedCard = () => {
  const { Category } = useContext(CategoryContext);
  const Navigate =  useNavigate()
  var settings = {
    
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

      return (
            <div className="FeatureCard-Wrapper">
              <h1>Featured Categories</h1>
              <div className="Feature-Box-Wrapper">
        
            <Slider {...settings}>
                {
                  Category?.map((item,index)=>{
                    const {id,name,image}=item
                      return(
                        <div key={id}>
                          <img src={image} alt="" onClick={()=>Navigate(`/ProductCategory/${id}`)}/>
                        </div>
                        
                      )
                  })
                }
            </Slider>
              
            </div>
            </div>
          );
}

export default FeaturedCard;

