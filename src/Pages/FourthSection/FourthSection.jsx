import { FaArrowRight } from "react-icons/fa";

const FourthSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="font-poppins text-5xl font-bold text-center mt-24">Collaborate without <br /> constraints</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 text-center mt-4">
                {/* 1st part */}
                <div>
                    <h1 className="font-bold text-[24px]">Free Forever</h1>
                    <p className="font-normal text-[14px] leading-4 mt-5">Our free plan gives you unlimited team <br /> members, 3 boards, and 300+ expert-made <br />templates. Signing up with your <br /> work email lets you bring in your team <br />faster. See our <br /> <span className="text-blue-600"> pricing plans</span> for more features.</p>
                </div>
                {/* 2nd part */}
                <div>
                    <h1 className="font-bold text-[24px]">Easy integrations</h1>
                    <p className="font-normal text-[14px] leading-4 mt-5">Miro has 100+ powerful integrations <br /> with tools you already use like G <br /> Suite, Slack, and Jira, so your workflow is seamless. <br /> View the full <br />
                     list in our <span className="text-blue-600">Marketplace .</span></p>
                     <button className="btn bg-blue-600 rounded-full mt-20 text-white p-4">Sign Up Free 
                <FaArrowRight /> </button>
                </div>
                {/* 3rd part */}
                <div>
                    <h1 className="font-bold text-[24px]">Security first</h1>
                    <p className="font-normal text-[14px] leading-4 mt-5">We treat your data like you would — <br />with the utmost care. We follow <br />industry-leading security standards <br />and give you tools to  <br /> intellectual property. Learn more <br />at our <span className="text-blue-600">Trust Center .</span></p>
                </div>
                
            </div>
            
        </div>
    );
};

export default FourthSection;