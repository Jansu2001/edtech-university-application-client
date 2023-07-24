import Banner from "../Banner/Banner";
import Collages from "../CollageCard/Collages";
import CollageCard from "../CollageCard/HomeCollageCard";
import Gallery from "../Gallery/Gallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collages></Collages>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;