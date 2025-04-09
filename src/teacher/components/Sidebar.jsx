import React from "react";
import {
  FaBars,
  FaPen,
  FaBook,
  FaComment,
  FaUser,
} from "react-icons/fa6";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { AiFillHome } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/teacher') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const linkClass = (path) => `
    flex items-center gap-2 w-61 px-4 py-2 font-medium transition-all
    ${isActive(path)
      ? 'bg-white text-orange-500 shadow-md rounded-l-lg'
      : 'text-white hover:text-gray-200'}
  `;

  return (
    <div className="flex">
      <div className={`w-64 h-screen bg-gradient-to-b from-orange-500 to-purple-500 text-white p-4 transition-transform duration-300 fixed left-0 top-0 z-50 ${isSidebarOpen ? 'transform-none' : '-translate-x-full'} sm:block`}>
        <button className="text-3xl text-gray-800 sm:hidden absolute top-0 right-0 m-4" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div className="mb-6 flex justify-center">
          <img src="/image/logo-w.png" alt="Logo" className="mx-auto" />
        </div>

        <ul className="space-y-2">
          <li><Link to="/teacher" className={linkClass('/teacher')}><AiFillHome className="text-lg" /><span>Dashboard</span></Link></li>
          <li><Link to="/teacher/lessons" className={linkClass('/teacher/lessons')}><FaBook className="text-lg" /><span>บทเรียน</span></Link></li>
          <li><Link to="/teacher/exams" className={linkClass('/teacher/exams')}><FaPen className="text-lg" /><span>ข้อสอบและแบบประเมิน</span></Link></li>
          <li>
  <Link to="/teacher/messages" className={linkClass('/teacher/messages')}>
    <div className="flex items-center gap-2 relative w-full">
      <FaComment className="text-lg" />
      <span>ข้อความ</span>
      <span className={`
        absolute -right-1 -top-0 text-xs font-bold px-2 py-0.5 rounded-full
        ${isActive('/teacher/messages') ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}
      `}>
        8
      </span>
    </div>
  </Link>
</li>
        </ul>

        <ul className="absolute bottom-6 w-full space-y-2">
          <li>
            <Link to="/teacher/settings" className={linkClass('/teacher/settings')}>
              <FaCog className="text-lg" />
              <span>ตั้งค่า</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2 w-full px-4 py-2 text-white hover:text-gray-200">
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
