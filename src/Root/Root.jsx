import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber";
import Footer from "../Component/Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="container">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;