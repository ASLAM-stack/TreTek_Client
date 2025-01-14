import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

 

const UpdateTouristSpot = () => {
  const spot = useLoaderData();
  const {_id,image,tourists_spot_name,country_Name,location,short_description,average_cost,seasonality,travel_time,totalVisitors_PerYear,user_name,user_email} =spot;
    const handleUpdateSpot =(e) =>{
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
        fetch(`https://trek-tek-crud-server.vercel.app/update/${_id}`,{
          method:"PUT",
          headers:{
            "content-type" : "application/json"
          },
          body:JSON.stringify(spotInfo)
        })
        .then (res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: 'Update Tourist Spot successfully!',
              icon: 'success',
              confirmButtonText: 'Ok'
          })
    
          }
        })
       
    }
    return (
        <div className="bg-[#64646411] py-8  md:p-8 rounded-xl shadow-lg my-12">
          <Helmet>
            <title>
              Update Tourist Spot
            </title>
          </Helmet>
        <h1 className="text-center text-4xl md:text-6xl font-bold">Update Tourist Spot</h1>
        <form onSubmit={handleUpdateSpot} className=" p-4 md:p-10">
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
                  defaultValue={tourists_spot_name}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required/>
              </div>
              <div>
                <label htmlFor="countryName" className="block mb-2 text-sm font-bold">
                  Country Name
                </label>
                <select className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" name="countryName" id="countryName" defaultValue={country_Name}>
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
                  defaultValue={short_description}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required/>
              </div>
              <div>
                <label htmlFor="Seasonality" className="block mb-2 text-sm font-bold">
                  Seasonality
                </label>
                <select className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" name="Seasonality" id="Seasonality" defaultValue={seasonality
                }>
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
                  defaultValue={totalVisitors_PerYear}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required/>
              </div>
              <div>
                <label htmlFor="userEmail" className="block mb-2 text-sm font-bold">
                  User Email
                </label>
                <input
                  id="userEmail"
                  type="text"
                  name="userEmail"
                  defaultValue={user_email}
                  disabled
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required/>
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
                  defaultValue={image}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required/>
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
                required defaultValue={location}/>
              </div>
              <div>
                <label htmlFor="avrgCost" className="block mb-2 text-sm font-bold">
                  Average Cost ($)
                </label>
                <input
                  id="avrgCost"
                  type="text"
                  name="avrgCost"
                  defaultValue={average_cost}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required/>
              </div>
              <div>
                <label htmlFor="Travel_Time" className="block mb-2 text-sm font-bold">
                  Travel Time
                </label>
                <input
                  id="Travel_Time"
                  type="text"
                  name="Travel_Time"
                  defaultValue={travel_time}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required/>
              </div>
              <div>
                <label htmlFor="userName" className="block mb-2 text-sm font-bold">
                  User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  name="userName"
                  defaultValue={user_name}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required disabled/>
              </div>
               
            </div>
          </div>
          <input className="btn text-lg font-medium bg-[#47b3f1] w-full mt-6" type="submit" value="Update Tourist Spot" />
        </form>
      </div>
    );
};

export default UpdateTouristSpot;