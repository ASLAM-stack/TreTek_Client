import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserShield } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    console.log(user.email);
  return (
    <div className="md:p-10 p-4 h-screen">
      <div className="flex items-center justify-center">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={user.photoURL}  />
          </div>
        </div>
      </div>
      <p className="text-center">{user.email}</p>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center text-4xl font-bold gap-4 mt-2"><FaUserShield className="text-5xl text-[#4a18ff]"/> <span className="mt-2">{user.displayName}</span> </div>
        <div className="flex items-center text-4xl font-bold gap-4 mt-2"><MdMarkEmailRead  className="text-5xl text-[#4a18ff]"/> <span className="">{user.email}</span> </div>
      </div>
    </div>
  );
};

export default Profile;
