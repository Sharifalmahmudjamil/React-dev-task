import image4 from "../../../public/Image/image4.png"
import { FaArrowRight } from "react-icons/fa";

const SeventhSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-32">
            <h1 className="text-4xl font-bold mx-5 font-poppins" >Built for the way you work</h1>
            <div className="grid grid-cols-3 lg:grid-cols-7 mt-5">
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1 bg-slate-200">Brainstorming</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Diagramming</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Meetings</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Scrum Events</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Mapping</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Research & Design</h1>
                <h1 className="font-normal text-sm text-center border rounded-full w-[130px] h-[30px] p-1">Strategic Planning</h1>
            </div>

            <div>
            <div className="hero min-h-screen mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image4} className="w-[550px] h-[530px] rounded-lg mx-32" />
    <div>
      <h1 className="text-xl font-light text-gray-700">Brainstorming</h1>
      <p className="py-6 text-[18px] font-normal text-gray-600">Unleash creative ideas and build on <br />them with the help of sticky notes,<br /> images, mind maps, videos, drawing <br /> capabilities — the list goes on.</p>
      <div className="flex text-blue-600">
      <a href="">Learn More... 
      </a>
      <div className="mt-2"><FaArrowRight /></div>
      </div>
     
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SeventhSection;