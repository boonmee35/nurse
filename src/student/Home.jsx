import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile';
import LessonList from './components/LessonList';
import LessonDetail from './components/LessonDetail';
import LessonContent from './components/LessonContent';
import Exam from './pages/exam';
import ExamDetail from './components/ExamDetail';
import ChatApp from './pages/ChatApp';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 640);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex">
            {/* Sidebar ด้านซ้าย */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div className={`flex-1 p-6 bg-gray-100 min-h-screen transition-all duration-300 ${isSidebarOpen ? 'sm:ml-64 ml-0' : 'ml-0'}`}>
                
                {/* 🔶 Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 w-full p-4 rounded-md bg-white text-black focus:outline-none">
                        <button className="text-3xl text-gray-800" onClick={toggleSidebar}>
                            <FaBars />
                        </button>
                        <FaSearch className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="ค้นหา..."
                            className="w-full p-2 rounded-md bg-white text-black focus:outline-none"
                        />
                    </div>

                    {/* 🔶 เมนูโปรไฟล์ */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                <span className="absolute -inset-1.5" />
                                <img
                                    alt="User Profile"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                                    className="w-12 h-12 rounded-full"
                                />
                            </MenuButton>
                        </div>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-none">
                            <MenuItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">โปรไฟล์</a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ตั้งค่า</a>
                            </MenuItem>
                            <MenuItem>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ออกจากระบบ</a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>

                {/* 🔶 Content Route */}
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="profile" element={<Profile/>} />
                    <Route path="lessons" element={<LessonList />} />
                    <Route path="lessons-detail" element={<LessonDetail />} />
                    <Route path="lessons-detail/content" element={<LessonContent />} />
                    <Route path="exams" element={<Exam />} />
                    <Route path="exams-detail" element={<ExamDetail />} />
                    <Route path="messages" element={<ChatApp />} />
                    <Route path="*" element={<div>ไม่พบหน้านี้</div>} />
                </Routes>
            </div>
        </div>
  )
}

export default Home