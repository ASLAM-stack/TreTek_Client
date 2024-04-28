import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddTouristSpot = () => {
  const {user} = useContext(AuthContext)
    const handleAddSpot =(e) =>{
        e.preventDefault();
        const form = e.target;
        const tourists_spot_name = form.spotName.value;
        const image = form.imgUrl.value;
        const country_Name =form.countryName.value;
        const location = form.location.value;
        const short_description = form.shortDescrip.value;
        const average_cost = form.avrgCost.value;
        const seasonality =form.Seasonality.value;
        const totalVisitors_PerYear = form.totalVisit.value;
        const travel_time = form.Travel_Time.value;
        const user_name= form.userName.value;
        const user_email = form.userEmail.value;
        const spotInfo = {image,tourists_spot_name,country_Name,location,short_description,average_cost,seasonality,travel_time,totalVisitors_PerYear,user_name,user_email};
        console.log(spotInfo);
        fetch("http://localhost:5000/addTouristSpot",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(spotInfo)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Added Tourist Spot successfully!',
              icon: 'success',
              confirmButtonText: 'Ok'
          })
          form.reset()
          }
        })
    }
  return (
    <div className="bg-[#64646411] py-8  md:p-8 rounded-xl shadow-lg my-12">
      <h1 className="text-center text-4xl md:text-6xl font-bold">Add Tourist Spot</h1>
      <form onSubmit={handleAddSpot} className=" p-4 md:p-10">
        <div className="flex gap-6 flex-wrap justify-between">
          <div className="w-full md:w-[48%] space-y-4">
            <div>
              <label htmlFor="spotName" className="block mb-2 text-sm font-bold">
                Tourist Spot Name
              </label>
              <input
                id="spotName"
                type="text"
                name="spotName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="countryName" className="block mb-2 text-sm font-bold">
                Country Name
              </label>
              <select className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" name="countryName" id="countryName">
                <option value="" disabled>Select Country</option>
                <option value="Bangladesh">
                Bangladesh
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </div>
            <div>
              <label htmlFor="shortDescrip" className="block mb-2 text-sm font-bold">
                Short Description
              </label>
              <input
                id="shortDescrip"
                type="text"
                name="shortDescrip"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="Seasonality" className="block mb-2 text-sm font-bold">
                Seasonality
              </label>
              <select className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" name="Seasonality" id="Seasonality">
                <option value="" disabled>Select Season</option>
                <option value="Summer">
                Summer
                </option>
                <option value="Autumn">Autumn</option>
                <option value="Late-autumn">Late-autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
            </div>
            <div>
              <label htmlFor="totalVisit" className="block mb-2 text-sm font-bold">
                Total Visitor Per Year
              </label>
              <input
                id="totalVisit"
                type="text"
                name="totalVisit"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="userEmail" className="block mb-2 text-sm font-bold">
                User Email
              </label>
              <input
                id="userEmail"
                type="text"
                name="userEmail"
                defaultValue={user?.email}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
               disabled/>
            </div>
          </div>
    
          <div className="w-full md:w-[48%] space-y-4">
            <div>
              <label htmlFor="imgUrl" className="block mb-2 text-sm font-bold">
                Image
              </label>
              <input
                id="imgUrl"
                type="url"
                name="imgUrl"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="location" className="block mb-2 text-sm font-bold">
                Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="avrgCost" className="block mb-2 text-sm font-bold">
                Average Cost ($)
              </label>
              <input
                id="avrgCost"
                type="text"
                name="avrgCost"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="Travel_Time" className="block mb-2 text-sm font-bold">
                Travel Time
              </label>
              <input
                id="Travel_Time"
                type="text"
                name="Travel_Time"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="userName" className="block mb-2 text-sm font-bold">
                User Name
              </label>
              <input
                id="userName"
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
               disabled/>
            </div>
             
          </div>
        </div>
        <input className="btn text-lg font-medium bg-[#47b3f1] w-full mt-6" type="submit" value="Add Tourist Spot" />
      </form>
    </div>
  );
};

export default AddTouristSpot;
