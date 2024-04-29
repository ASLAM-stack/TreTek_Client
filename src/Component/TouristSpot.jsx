import { useEffect, useState } from "react";
import TouristSpotsCard from "./TouristSpotsCard";


const TouristSpot = () => {
  const [spots,setSpots] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/addTouristSpot')
    .then(res => res.json())
    .then(data =>{
      setSpots(data)
    })
  },[])
  console.log(spots);
  return (
    <div className="mt-12">
      <div className="section-title text-center mb-10">
        <span className="font-satis text-[#63AB45] text-xl">
          Journey to the
        </span>
        <h2 className="text-4xl font-bold">Desired Vacation Spots</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 md:p-0">
        {
          spots.slice(0,6)?.map(spot => <TouristSpotsCard spot={spot} key={spot._id}></TouristSpotsCard>)
        }
      </div>
    </div>
  );
};

export default TouristSpot;
