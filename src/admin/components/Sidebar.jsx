import React from 'react';
import { FaBars, FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
    const location = useLocation();

    // ฟังก์ชันตรวจสอบว่า path ปัจจุบันตรงกับลิงก์หรือไม่
    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex">
            <div className={`w-64 h-screen bg-gradient-to-b from-orange-500 to-purple-500 text-white p-4 transition-transform duration-300 fixed left-0 top-0 z-50 ${isSidebarOpen ? 'transform-none' : '-translate-x-full'} sm:block`}>
                <button className="text-3xl text-gray-800 sm:hidden absolute top-0 right-0 m-4" onClick={toggleSidebar}>
                    <FaBars />
                </button>

                <div className="mb-6 flex justify-center">
                    <img src="/image/logo-w.png" alt="Logo" className="mx-auto" />
                </div>

                <ul className="absolute w-61 space-y-2">
                    <li>
                        <Link
                            to="/admin"
                            className={`flex items-center space-x-2 px-4 py-2 rounded-l-lg font-medium 
                            ${isActive('/admin') ? 'bg-white text-orange-500 shadow-md' : 'hover:text-gray-200'}`}
                        >
                            <AiFillHome className="text-lg" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/users"
                            className={`flex items-center space-x-2 px-4 py-2 rounded-l-lg font-medium 
                            ${isActive('/admin/users') ? 'bg-white text-orange-500 shadow-md' : 'hover:text-gray-200'}`}
                        >
                            <FaUser className="text-lg" />
                            <span>ผู้ใช้งาน</span>
                        </Link>
                    </li>
                </ul>

                <ul className="absolute w-61 bottom-6 space-y-2">
                    <li>
                        <Link
                            to="/admin/settings"
                            className={`flex items-center space-x-2 px-4 py-2 rounded-l-lg font-medium 
                            ${isActive('/admin/settings') ? 'bg-white text-orange-500 shadow-md' : 'hover:text-gray-200'}`}
                        >
                            <FaCog className="text-lg" />
                            <span>ตั้งค่า</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="flex items-center space-x-2 px-4 py-2 hover:text-gray-200"
                        >
                            <FaSignOutAlt className="text-lg" />
                            <span>ออกจากระบบ</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
