
import BannerAd from "../../components/BannerAd/BannerAd";
import Banner from "./Banner";
import Featured from "./Featured";
import LookingFor from "./LookingFor";
import Popular from "./Popular";

const Home = () => {
 
    return (
        <div>
           <Banner></Banner>
            <Featured></Featured>
            <BannerAd></BannerAd>
            {/* Popular product */}
            <Popular></Popular>
            <LookingFor></LookingFor>

        </div>
    );
};

export default Home;