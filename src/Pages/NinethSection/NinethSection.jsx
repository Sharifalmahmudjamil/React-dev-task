/* eslint-disable react/no-unescaped-entities */
import avatar1 from "../../../public/Image/avatar1.png"
import avatar2 from "../../../public/Image/avatar2.png"
import avatar3 from "../../../public/Image/avatar3.png"

const NinethSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-5xl font-bold font-poppins text-center">Loved by the world's best teams</h1>
            <button className="btn btn-primary btn-outline rounded-full lg:mx-[600px] mx-28 mt-10 w-[100px] ">See all customer stories →</button>


            <div className="grid grid-cols-1 lg:grid-cols-3 text-center mt-10">
                {/* 1st part */}
                <div>
                    <h1 className="font-bold text-[32px]"><span className="font-extrabold font-poppins text-4xl">Vm</span>ware</h1>
                    <p className="font-normal text-[14px] leading-6 mt-5 left-8">“When the pandemic hit, those of us <br /> who thrive on in-person <br />collaboration were worried that our <br /> creativity and productivity would <br />suffer.  Miro was the perfect tool to <br /> help us with collaboration, <br />whiteboarding, and retrospectives <br />while remote.”</p>
                   
                </div>
                {/* 2nd part */}
                <div>
                    <h1 className="font-extrabold font-poppins text-4xl">DocuSign</h1>
                    <p className="font-normal text-[14px] leading-6 mt-5 left-8">“Miro helps solve one of the major <br /> gaps in product design: how to <br /> manage tasks across product <br /> designers whose projects are in <br />different tools.”</p>
                    
                </div>
                {/* 3rd part */}
                <div>
                    <h1 className="font-extrabold font-poppins text-4xl">Frog</h1>
                    <p className="font-normal text-[14px] leading-6 mt-5 left-8">“As we used Miro we moved from <br /> skepticism to belief to innovation, <br /> and now we have a tool that’s at <br /> the core of what we do and will <br />continue to extend into the future.”</p>
                </div>
                
            </div>
            <div className="flex justify-between mt-10">
                <div className="flex gap-2">
                <img src={avatar1} alt="" className="w-[48px] h-[48px]" />
                        <h1 className="font-normal text-sm">Roxanne Mustafa  <br />Design Team Lead at VMware</h1>
                </div>
                <div className="flex gap-2">
                <img src={avatar2} alt="" className="w-[48px] h-[48px]" />
                        <h1 className="font-normal text-sm">Jane Ashley <br />Head of Design at DocuSign</h1>
                </div>
                <div className="flex gap-2">
                <img src={avatar3} alt="" className="w-[48px] h-[48px]" />
                        <h1 className="font-normal text-sm">Laura Baird  <br />Associate Design Director at frog</h1>
                </div>
            
          
            </div>
        </div>
    );
};

export default NinethSection;