import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-full bg-orange-500">
        <ul className="ms-3 mt-4">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="flex gap-1 px-3 py-1 items-center font-semibold"
            >
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex gap-1 px-3 py-1 items-center font-semibold"
            >
              <FaCartPlus></FaCartPlus> My Cart
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
