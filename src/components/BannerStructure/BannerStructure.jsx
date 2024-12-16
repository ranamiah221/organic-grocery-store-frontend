

const BannerStructure = ({image, title, description}) => {
    return (
        <div className="">
            <div className="relative"><img src={image} className="w-full h-[500px]" alt="" /></div>
            <div className="text-center absolute top-0 p-5 lg:p-60 bg-gradient-to-r from-[#151515] to-[ #15151500] w-full h-full">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <p className="text-base font-normal text-white">{description}</p>
                
            </div>
        </div>
    );
};

export default BannerStructure;