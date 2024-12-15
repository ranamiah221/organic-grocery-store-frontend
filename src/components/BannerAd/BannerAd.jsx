import bannerAd1 from '../../assets/images/banner-ad-1.jpg'
import bannerAd2 from '../../assets/images/banner-ad-2.jpg'
import bannerAd3 from '../../assets/images/banner-ad-3.jpg'
const BannerAd = () => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <div className='row-span-2 relative'>
                <img src={bannerAd1} className='h-full rounded-md' alt="" />
                <div className='absolute text-white top-1/2 left-10 space-y-3'>
                    <h2 className='text-2xl font-bold'>Items on Sale</h2>
                    <p className='text-base font-normal'>Discount up to 30%</p>
                    <button className='btn btn-outline border-0 border-b-4 border-white text-white'>Shop Now</button>
                </div>
            </div>
            <div className='relative'>
                <img src={bannerAd2} className='rounded-md' alt="" />
                <div className='absolute text-white top-16 left-10 '>
                    <h2 className='text-2xl font-bold'>Combo offer</h2>
                    <p className='text-base font-normal'>Discount up to 50%</p>
                    <button className='btn btn-outline border-0 border-b-4 border-white text-white'>Shop Now</button>
                </div>
            </div>
            <div className='relative'>
            <img src={bannerAd3} className='rounded-md' alt="" />
            <div className='absolute text-white top-16 left-10'>
                    <h2 className='text-2xl font-bold'>Discount Coupons</h2>
                    <p className='text-base font-normal'>Discount up to 20%</p>
                    <button className='btn btn-outline border-0 border-b-4 border-white text-white'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default BannerAd;