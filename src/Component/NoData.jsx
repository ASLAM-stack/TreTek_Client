import { Link } from "react-router-dom";

 

const NoData = () => {
    return (
        <div className="space-y-3 h-4/5">
            <h1 className="text-4xl font-bold text-center">Data Not Found</h1>
            <p className="text-center text-xl">Please Add Your Own Spot</p>
            <div className="text-center"><Link to='/addtouristspot' className="btn btn-primary">
                Add Spot
                </Link></div>
        </div>
    );
};

export default NoData;