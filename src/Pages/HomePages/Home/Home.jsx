import Banner from "../Banner/Banner";
import CollageCard from "../CollageCard/CollageCard";
import Gallery from "../Gallery/Gallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollageCard></CollageCard>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;