import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

 

const PrivateRouter = ({children}) => {
    const {user,loader} =useContext(AuthContext)
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;