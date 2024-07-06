import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
 

const CountryCard = ({spot}) => {
    const {image,country_Name} =spot;
     
    return (
        <Fade cascade={false} direction="up" delay={.5} triggerOnce={true}>
             <Link    to={`/country/${country_Name}`} className="md:w-[300px] w-full h-[200px] bg-cover bg-center text-center flex items-end justify-center border-2 border-indigo-500 rounded-xl" style={{ backgroundImage: `url(${image})`}}>
              
        </Link>
        </Fade>
        
        
       
        
    );
};

export default CountryCard;