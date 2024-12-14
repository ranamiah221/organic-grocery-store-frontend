import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerStructure from '../../components/BannerStructure/BannerStructure';
import slider1 from '../../assets/banner/honney.jpg'
import slider2 from '../../assets/banner/meat.jpg'
import slider3 from '../../assets/banner/nuts.jpg'
import slider4 from '../../assets/banner/apple.jpg'
import slider5 from '../../assets/banner/pexels-pixabay-327098.jpg'
import slider6 from '../../assets/banner/fish.jpg'

const Banner = () => {
    return (
        <>
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <BannerStructure image={slider1} title={'Golden Wildflower Honey - Nature’s Sweet Elixir'} description={'Pure, raw honey with a rich, floral flavor, perfect for sweetening your day.'}></BannerStructure>
        </SwiperSlide>
        <SwiperSlide>
        <BannerStructure image={slider2} title={"Premium Grass-Fed Beef - Tender and Flavorful"} description={'Juicy, high-quality beef sourced from grass-fed cattle for the best taste.'}></BannerStructure>
        </SwiperSlide>
        <SwiperSlide>
        <BannerStructure image={slider3} title={"Healthy Nut Mix - A Crunchy Powerhouse of Energy"} description={'A delicious blend of almonds, cashews, and walnuts, packed with nutrients.'}></BannerStructure>
        </SwiperSlide>
        <SwiperSlide>
        <BannerStructure image={slider4} title={"Fresh Organic Apples - Crisp and Juicy"} description={'Perfectly ripe organic apples, ideal for snacking, baking, or juicing.'}></BannerStructure>
        </SwiperSlide>
        <SwiperSlide>
        <BannerStructure image={slider5} title={"Vitamin-Packed Oranges - Bursting with Citrus Goodness"} description={'Juicy, naturally ripened oranges, loaded with vitamin C for a refreshing treat.'}></BannerStructure>
        </SwiperSlide>
        <SwiperSlide>
        <BannerStructure image={slider6} title={"Wild-Caught Salmon - Fresh from the Ocean"} description={'Premium salmon fillets, sustainably sourced and rich in omega-3s.'}></BannerStructure>
        </SwiperSlide>
  
      </Swiper>  
        </>
    );
};

export default Banner;