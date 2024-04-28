import Banner from "../Component/Banner";
import Facility from "../Component/Facility";
import NewsLetter from "../Component/NewsLetter";
import TouristSpot from "../Component/TouristSpot";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpot></TouristSpot>
            <Facility></Facility>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;