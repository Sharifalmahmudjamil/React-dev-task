
import image2 from "../../../public/Image/image2.png"
import image3 from "../../../public/Image/image3.png"
import { FaArrowRight } from "react-icons/fa";
const SixthSection = () => {
    return (
        <div>
            <div>
            <div className="hero min-h-screen mx-auto">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image2} className="w-[500px] h-[460px] rounded-lg " />
    <div>
      <h1 className="text-4xl font-bold font-poppins">Connect your tools, <br />close your tabs</h1>
      <p className="py-6 text-[18px] font-normal text-gray-600">Whether you want to edit your Google Docs, resolve <br /> Jira issues, or collaborate over Zoom, Miro has 100+ <br />integrations with tools you already use and love.</p>
      <div className="flex text-blue-600">
      <a href="">Learn More... 
      </a>
      <div className="mt-2"><FaArrowRight /></div>
      </div>
     
    </div>
  </div>
     </div>
     {/* image section */}
         <div> 
             <div className="relative">
             <img src={image3} alt="" className="w-[1000px] h-[500px] mx-auto"  />
             </div>
             <div className="absolute w-[400px] h-[100px] leading-10 text-center lg:-mt-80 lg:mx-[800px] ">
                <h1 className="text-lg font-bold ">The Ways We Work</h1>
                <p className="text-base font-normal">How has our relationship with work changed?</p>
                <button className="btn bg-blue-600 text-white w-[150px] h-[40px] mt-5 rounded-full">View the report →</button>
             </div>
              
        </div>
      
        </div>
        </div>
    );
};

export default SixthSection;