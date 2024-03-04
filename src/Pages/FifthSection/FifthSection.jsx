import image1 from "../../../public/Image/image1.png"
import { FaArrowRight } from "react-icons/fa";

const FifthSection = () => {
    return (
        <div>
            <div className="hero min-h-screen mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image1} className="w-[550px] h-[530px] rounded-lg " />
    <div>
      <h1 className="text-4xl font-bold font-poppins">Work together, <br /> wherever you work</h1>
      <p className="py-6 text-[18px] font-normal text-gray-600">In the office, remote, or a mix of the two, with Miro, <br /> your team can connect, collaborate, and co-create in <br /> one space no matter where you are.</p>
      <div className="flex text-blue-600">
      <a href="">Learn More... 
      </a>
      <div className="mt-2"><FaArrowRight /></div>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default FifthSection;