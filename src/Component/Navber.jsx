import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

 

const Navber = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <div>
                <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/contact'>
                    Contact Us
                </NavLink>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">Sweet Home</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink to='/'>
                    Home
                </NavLink>
            </li>
            <li>
            <NavLink to='/about'>
                    About
                </NavLink>
            </li>
            <li>
            <NavLink to='/contact'>
                    Contact Us
                </NavLink>
            </li>
          </ul>
        </div>
        {
          user ?      <div className="dropdown dropdown-end navbar-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar float-right">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-12 p-2 shadow bg-base-100 rounded-box w-52 z-20">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Update Profile</a></li>
            <li><a>Save Poperties</a></li>
            <li><a onClick={logOut}>Logout</a></li>
          </ul>
        </div> : <div className="navbar-end">
          <NavLink to='/login' className="btn">Log in</NavLink>
        </div>
        }
        
  
      </div>
    </div>
        </div>
    );
};

export default Navber;