import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

 
const MyListCard = ({spot,refetch}) => {
    const {_id,image,tourists_spot_name,location,short_description }  = spot;
    const handleDelete = (id) => {
          console.log(id)

          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://trek-tek-crud-server.vercel.app/spot/${id}`,{
                    method:"DELETE"
                  })
                  .then(res => res.json())
                  .then(data =>{
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Deleted Tourist Spot successfully!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        refetch();
                    }
                  })
            }
          });



          
    }

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
              <Link to={`/updatespot/${_id}`}>
              <button className="btn btn-primary btn-md"><MdEditSquare className="text-xl"></MdEditSquare></button>
              </Link>
              <Link to={`/details/${_id}`}>
              <button className="btn btn-primary btn-md"><TbListDetails className="text-xl" /></button>
              </Link> 
              <button onClick={()=>handleDelete(_id)} className="btn btn-primary btn-md"><RiDeleteBin3Fill className="text-xl"/></button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyListCard;