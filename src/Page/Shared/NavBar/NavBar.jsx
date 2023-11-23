import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  // console.log(cart, cart.length);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <div className="flex justify-center items-center">
        <li className="text-lg font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link to="/menu">Our Menu</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link to="/order/salad">Order</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link to="/secret">Secret</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link to="/secret">
            <button className="btn ">
              <FaCartPlus className="text-xl" />
              <div className="badge badge-secondary mb-3">+{cart.length}</div>
            </button>
          </Link>
        </li>

        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">
              Logout
            </button>
          </>
        ) : (
          <>
            {" "}
            <li className="text-lg font-semibold">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
    </>
  );
  return (
    <div className="navbar max-w-screen-2xl mx-auto fixed z-10 bg-opacity-50 bg-white text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
