

const CountryCard = ({spot}) => {
    const {image,country_Name} =spot;
     
    return (
        <div className="md:w-[300px] w-full h-[200px] bg-cover bg-center text-center flex items-center justify-center border-2" style={{ backgroundImage: `url(${image})`}}>
            <h1 className="text-4xl font-semibold text-orange-400">{country_Name}</h1>
        </div>
    );
};

export default CountryCard;