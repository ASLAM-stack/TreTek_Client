import { Link } from "react-router-dom";

const TouristSpotsCard = ({spot}) => {
    const {_id,image,tourists_spot_name,location,short_description }  = spot;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px] object-fill"
            src={image} 
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{tourists_spot_name}</h2>
          <p className="text-lg font-medium">{location}</p>
          <p>{short_description.slice(0,150)}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotsCard;
