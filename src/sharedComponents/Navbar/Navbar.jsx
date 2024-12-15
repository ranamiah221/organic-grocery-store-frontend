import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then(()=>{
    Swal.fire("Logout Successful!");
    })
    .catch((err)=>{
      Swal.fire(`${err.message}`);
    })
  }
  return (
    <div className="navbar bg-base-200 shadow-lg">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl font-medium"
          >
            <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-product"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              Products
            </NavLink>
          </li>
          {
            user ? <li>
            <NavLink
              to="/my-cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
             My Cart
            </NavLink>
          </li> : ''
          }
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-product"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              Products
            </NavLink>
          </li>
          {
            user ? <li>
            <NavLink
              to="/my-cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
             My Cart
            </NavLink>
          </li> : ' '
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <><p className="uppercase text-xl font-bold p-2 mr-2 border border-black rounded">{user.email.slice(0,2)}</p>
           <button onClick={handleLogout} className="btn btn-outline border-0 border-b-4 border-blue-400 hover:bg-blue-600">Log out</button></>
           :<Link to={'/login'} className="btn btn-outline border-0 border-b-4 border-blue-400 hover:bg-blue-600">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
