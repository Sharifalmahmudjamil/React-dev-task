/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa";
import banner from "../../../public/Image/Banner.png"
import { SiWalmart } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { SiVolvo } from "react-icons/si";

const Hero = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="w-[640px] h-[380px] rounded-lg shadow-2xl mx-10" />
    <div>
    <h1 className="font-bold text-5xl font-poppins">Take ideas from <br />better to best</h1>
    <p className="font-normal text-[18px]">Miro is your team's visual platform to connect, <br /> collaborate, and create — together.</p>

                <input type="email" name="" id="" placeholder="Enter Your Work Email" className="w-[400px] h-[48px] border-2 rounded-full mt-5"/>
                <div>
                <button className="btn bg-blue-500 w-[400px] h-[48px] rounded-full mt-3 text-white"> Sign Up Free <FaArrowRight /></button>
                <p className="font-normal text-[14px] text-gray-400">Collaborate with your team within minutes</p>
                </div>
               
                <div className="w-[350px] h-[60px] mt-10">
                <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           <div className="flex gap-5 text-[16px] font-normal mx-5">
           <h1 >GetAPP</h1>
           <h1>Capterra</h1>
           </div>
           
        </div>
        <p className="text-[11px] font-normal">Based on 5149+ reviews:</p>
                </div>
                
               
   
    </div>
  </div>
</div>

    <div>
        <h1 className="font-normal text-lg text-center text-gray-400">Trusted by 45M+ users</h1>
        <div className="flex justify-between mt-5 ">
             <div className="text-7xl"><SiWalmart /></div>
             <div className="text-7xl"> <SiCisco /></div>
             <div className="text-7xl"> <SiVolvo /></div>
             <div className="font-medium text-4xl"> Deloitte.</div>
             <div className="font-medium text-4xl"> Okta.</div>
            
            
        </div>
    </div>
        </div>
    );
};

export default Hero;