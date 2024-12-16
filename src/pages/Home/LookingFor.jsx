import { MdDomainVerification, MdOutlineVerifiedUser } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { SiVerizon } from "react-icons/si";
import { FaCube } from "react-icons/fa";         
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const LookingFor = () => {
    return (
        <>
        <SectionHeader title={'People are also looking for'}></SectionHeader>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 my-8">
            <div className="border border-black p-4 rounded-lg">
                <FaCube className="text-2xl" />
                <h2 className='text-2xl font-bold'>Free delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit tenetur magni, esse ab excepturi.</p>
            </div>
            <div className="border border-black p-4 rounded-lg">
                <MdDomainVerification className="text-2xl" />
                <h2 className='text-2xl font-bold'>100% secure payment</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit tenetur magni, esse ab excepturi.</p>
            </div>
            <div className="border border-black p-4 rounded-lg">
                <MdOutlineVerifiedUser className="text-2xl" />
                <h2 className='text-2xl font-bold'>Quality guarantee</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit tenetur magni, esse ab excepturi.</p>
            </div>
            <div className="border border-black p-4 rounded-lg">
                <SiVerizon className="text-2xl" />
                <h2 className='text-2xl font-bold'>guaranteed savings</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit tenetur magni, esse ab excepturi.</p>
            </div>
            <div className="border border-black p-4 rounded-lg">
                <GoGift className="text-2xl" />
                <h2 className='text-2xl font-bold'>Daily offers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit tenetur magni.</p>
            </div>
            
        </div>
        </>
    );
};

export default LookingFor;