import { FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#d1a054]">
                <ul className="menu p-4 ">
                    <li className="">
                        <NavLink to='/dashboard/userHome' className="bg-[#d1a054]" >
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/reservation' className="bg-[#d1a054]" >
                            <FaCalendar></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/cart' className="bg-[#d1a054]" >
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/review' className="bg-[#d1a054]" >
                            <FaStar />
                            Add a Review
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/bookings' className="bg-[#d1a054]" >
                            <FaList />
                            My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li className="">
                        <NavLink to='/' className="bg-[#d1a054]" >
                            <FaHome></FaHome>
                             Home
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/order/salad' className="bg-[#d1a054]" >
                            <FaSearch></FaSearch>
                             Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;