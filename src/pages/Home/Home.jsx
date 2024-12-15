
import BannerAd from "../../components/BannerAd/BannerAd";
import Banner from "./Banner";
import Featured from "./Featured";
import Popular from "./Popular";

const Home = () => {
 
    return (
        <div>
           <Banner></Banner>
            <Featured></Featured>
            <BannerAd></BannerAd>
            {/* Popular product */}
            <Popular></Popular>

        </div>
    );
};

export default Home;