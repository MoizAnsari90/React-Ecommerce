import "./DummyCard.css";
import { DummyData } from "../../../utils/Constant/Dummy";

const DummyCard = () => {
  return (
    <div className="DummyCard-Wrapper">
        {
            DummyData.map((item,index)=>{
                const{image}=item
                return(
                  <div key={index} >
                    <img src={image} />
                  </div>
                    
                )
            })
        }
    </div>
  );
}

export default DummyCard;
