import { useContext } from "react";
import { CategoryContext } from "../Component/Common/FeaturedCard/FeaturedCard";
import { useParams } from "react-router-dom";
import "./ProductCategory.css";

const ProductCategory = () => {
  const {Category} = useContext(CategoryContext);
  const {id} = useParams()
  
  const filterProduct = Category?.filter((item)=> item.id === Number(id));
  return (
    <div className="CategoryCard-Wrapper">
        {
          filterProduct && filterProduct.length > 0 ?(
            filterProduct.map((item,index)=>{
              const{id,name,image} = item;
              return(
                <div key={id} className="Cat-Wrapper">
                  <img src={image} alt="" />
                  <p>{name}</p>
                </div> 
              )
            })
          ) : (
              <p>Product NOt Found</p>
          )
          
        }
    </div>
  );
}

export default ProductCategory;
