import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaStar, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()

    // TODO: get isAdmin vale from the data base
    const [isAdmin] = useAdmin()
    // const isAdmin = true

    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#d1a054]">
                <ul className="menu p-4 ">
                    {
                        isAdmin ? // Admin Dashboard
                            <>
                                <li className="">
                                    <NavLink to='/dashboard/adminHome' className="bg-[#d1a054]" >
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to='/dashboard/addItems' className="bg-[#d1a054]" >
                                        <FaUtensils></FaUtensils>
                                        Add Items
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to='/dashboard/manageItems' className="bg-[#d1a054]" >
                                        <FaList></FaList>
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to='/dashboard/bookings' className="bg-[#d1a054]" >
                                        <FaBook></FaBook>
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to='/dashboard/users' className="bg-[#d1a054]" >
                                        <FaUsers></FaUsers>
                                        All Users
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                {/* User Dashboard */}
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
                            </>
                    }

                    {/* shared nav links */}
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
                    <li className="">
                        <NavLink to='/order/contact' className="bg-[#d1a054]" >
                            <FaEnvelope></FaEnvelope>
                            Contact
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