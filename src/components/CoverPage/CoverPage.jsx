

const CoverPage = ({title}) => {
    return (
       <div className="w-full shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex justify-center items-center h-[250px] text-white">
          <h1 className="uppercase text-4xl font-bold">{title}</h1>
          </div>
       </div>
    );
};

export default CoverPage;