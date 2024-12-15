import './CoverPage.css'

const CoverPage = ({title}) => {
    return (
       <div className="w-full bgImg shadow-lg">
          <div className="flex justify-center items-center h-[250px] text-white">
          <h1 className="uppercase text-4xl font-bold">{title}</h1>
          </div>
       </div>
    );
};

export default CoverPage;