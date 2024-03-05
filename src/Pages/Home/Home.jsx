
import EighthSection from "../EighthSection/EighthSection";
import FifthSection from "../FifthSection/FifthSection";
import FourthSection from "../FourthSection/FourthSection";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Footer from "../NinethSection/Footer/Footer";
import NinethSection from "../NinethSection/NinethSection";
import SeventhSection from "../SeventhSection/SeventhSection";
import SixthSection from "../SixthSection/SixthSection";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <FourthSection></FourthSection>
            <FifthSection></FifthSection>
            <SixthSection></SixthSection>
            <SeventhSection></SeventhSection>
            <EighthSection></EighthSection>
            <NinethSection></NinethSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;