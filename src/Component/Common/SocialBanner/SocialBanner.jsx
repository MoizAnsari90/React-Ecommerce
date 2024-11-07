import { SocialData } from "../../../utils/Constant/SocialBanner";
import "./SocialBanner.css";
const SocialBanner = () => {
    
  return (
    <div className="SocialBanner-Wrapper">
        <img src={SocialData.image} alt="" />
    </div>
  );
}

export default SocialBanner;
