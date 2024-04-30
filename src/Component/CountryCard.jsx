import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

const CountryCard = ({spot}) => {
    const {image,country_Name} =spot;
     
    return (
        <Fade cascade={false} direction="up" delay={.5} triggerOnce={true}>
             <Link data-tooltip-id={country_Name}
  data-tooltip-content={country_Name}  to={`/country/${country_Name}`} className={`md:w-[300px] w-full h-[200px] bg-cover bg-center text-center flex items-end justify-center border-2 border-indigo-500 rounded-xl ${country_Name}`} style={{ backgroundImage: `url(${image})`}}>
             <Tooltip id={country_Name} place="top"/>
        </Link>
        </Fade>
        
        
       
        
    );
};

export default CountryCard;