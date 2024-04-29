import { Link } from "react-router-dom";


const CountryCard = ({spot}) => {
    const {image,country_Name} =spot;
     
    return (
        <Link to={`/country/${country_Name}`} className="md:w-[300px] w-full h-[200px] bg-cover bg-center text-center flex items-end justify-center border-2 border-indigo-500 rounded-xl" style={{ backgroundImage: `url(${image})`}}>
            <h1 className="text-4xl font-semibold text-emerald-300 ">{country_Name}</h1>
        </Link>
    );
};

export default CountryCard;