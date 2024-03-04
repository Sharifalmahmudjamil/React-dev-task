import image5 from "../../../public/Image/image5.png"
import daimond from "../../../public/Image/daimond.png"
import xd from "../../../public/Image/Adobe_XD-Logo.wine.png"
import figma from "../../../public/Image/figma.png"
import N from "../../../public/Image/N.png"
import { FaArrowRight } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";

const EighthSection = () => {
    return (
        <div>
             <div className="max-w-screen-xl mx-auto mt-32">
            <h1 className="text-4xl font-bold mx-5 font-poppins" >Built for all kinds of teams</h1>
            <div className="grid grid-cols-3 lg:grid-cols-7 mt-5">
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1 bg-slate-200">UX & Design</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Marketing</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Product</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Engineering</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Consultants</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Agile Coaches</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Sales</h1>
            </div>

            <div>
            <div className="hero min-h-screen mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image5} className="w-[550px] h-[530px] rounded-lg mx-32" />
    <div>
        <div className="flex">
        <div className="text-xl mt-1"><TiArrowForward /></div>
        <h1 className="text-xl font-light text-gray-700">
         Build low-fi wireframes</h1>
        </div>
        <div className="flex mt-4">
        <div className="text-xl mt-1"><TiArrowForward /></div>
        <h1 className="text-xl font-light text-gray-700">
        Involve stakeholders in the <br /> design process</h1>
        </div>
        <div className="flex mt-4">
        <div className="text-xl mt-1"><TiArrowForward /></div>
        <h1 className="text-xl font-light text-gray-700">
        Run engaging design <br /> workshops</h1>
        </div>
      <div className="flex text-blue-600 mt-4 mx-3">
      <a href="">Learn More... 
      </a>
      <div className="mt-2"><FaArrowRight /></div>
      </div>

      <h1 className="text-base font-normal mt-5">Integrate your favorite tools</h1>
      {/* logo */}
      <div className="flex gap-4">
      <img src={daimond} alt="" className="w-[27px] h-[27px]"  />
      <img src={xd} alt="" className="w-[27px] h-[27px]"  />
      <img src={figma} alt="" className="w-[27px] h-[27px]"  />
      <img src={N} alt="" className="w-[27px] h-[27px]"  />
      </div>
     
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
    );
};

export default EighthSection;