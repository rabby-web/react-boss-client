import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaCartPlus, FaHome, FaList } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="ms-3 mt-5">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="flex gap-1 px-3 py-2 items-center font-semibold"
            >
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="flex gap-1 px-3 py-2 items-center font-semibold"
            >
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex gap-1 px-3 py-2 items-center font-semibold"
            >
              <FaCartPlus></FaCartPlus> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/review"
              className="flex gap-1 px-3 py-2 items-center font-semibold"
            >
              <FaAd></FaAd> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/booking"
              className="flex gap-1 px-3 py-2 items-center font-semibold"
            >
              <FaList></FaList> My Booking
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
