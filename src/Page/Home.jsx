
import SliderBar from "../Component/Common/SliderBar/SliderBar";
import Header from "../Component/Header/Header";
import DummyCard from "../Component/Common/DummyCard/DummyCard";
import FeaturedCard from "../Component/Common/FeaturedCard/FeaturedCard";
import FeaturedProduct from "../Component/Common/FeaturedProduct/FeaturedProduct";
import SocialBanner from "../Component/Common/SocialBanner/SocialBanner";
import DetailModal from "../Component/Common/DetailModal/DetailModal";

const Home = () => {
  return (
    <div>
      <Header />
      <SliderBar />
      <DummyCard />
      <FeaturedCard />
      <FeaturedProduct />
      <SocialBanner />
      <DetailModal />
    </div>
  );
}


export default Home;
