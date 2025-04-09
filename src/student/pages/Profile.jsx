import React, { useState } from 'react';
import { FaCogs, FaTrophy, FaPlus, FaCalendarAlt, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('อารยา วรัฒนานนท์');
  const [philosophy, setPhilosophy] = useState('Birthday but with me');
  const [goal, setGoal] = useState('ราชาโจรสลัด');

  const [editName, setEditName] = useState(name);
  const [editPhilosophy, setEditPhilosophy] = useState(philosophy);
  const [editGoal, setEditGoal] = useState(goal);

  const navigate = useNavigate();

  const handleSave = () => {
    setName(editName);
    setPhilosophy(editPhilosophy);
    setGoal(editGoal);
    setIsModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "บันทึกข้อมูลเรียบร้อย",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      navigate("/student/profile");
    }, 1600);
  };

  const experiences = [
    {
      title: 'ไลอ้อน ฮับบี้ไลอ้อน ฮับบี้เป็นอาสามาช่วยสอนที่บ้านกลาะตีน',
      desc: 'สามารถเข้าร่วมกับทีมงานกล่อตีน ไลอ้อน ที่อยู่ในภาคอีสาน และมาอบรมปฏิบัติงานที่โรงเรียนวัดกว่ากล่อตีนกรุงเทพมหานคร',
      date: '01/03/2025',
      image: '/src/assets/profile.png',
    },
    {
      title: 'ไลอ้อน ฮับบี้ไลอ้อน ฮับบี้เป็นอาสามาช่วยสอนที่บ้านกลาะตีน',
      desc: 'ช่วยจัดกิจกรรมสอนเด็กในพื้นที่ชนบท พร้อมกิจกรรมเสริมความรู้และความสนุก',
      date: '01/03/2025',
      image: '/src/assets/profile2.png',
    },
    {
      title: 'ไลอ้อน ฮับบี้ไลอ้อน ฮับบี้เป็นอาสามาช่วยสอนที่บ้านกลาะตีน',
      desc: 'ร่วมกับทีมงานในพื้นที่และช่วยออกแบบกิจกรรมให้เหมาะสมกับเด็กๆ',
      date: '01/03/2025',
      image: '/src/assets/profile3.png',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex flex-col items-center relative">
            <img
              src="https://i.imgur.com/LrRQkZg.png"
              alt="profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <h2 className="mt-4 text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-500">ผู้เรียน</p>

            <div className="mt-4 w-full space-y-2">
              <div className="flex items-center gap-2">
                <FaCogs className="text-orange-500" size={50} />
                <span>ปรัชญา : </span>
                <span>{philosophy}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTrophy className="text-purple-500" size={50} />
                <span>เป้าหมาย :</span>
                <span>{goal}</span>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-0 right-2 bg-gray-200 hover:bg-gray-300 text-gray-600 px-3 py-1 rounded flex items-center gap-1 text-sm"
            >
              <FaEdit />
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="md:col-span-2 bg-gray-200 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-bold">ทักษะและความสามารถ</h3>
          <div className="bg-white p-4 rounded-lg shadow text-sm leading-relaxed">
            <p>
              ไลอ้อน ฮับบี้<br />
              เกมระดมไอเดียฮับบี้ผู้ใหญ่ก่อน ป๊อป ชอบคนเฮฮา แชร์ แคร์แผ่ เน้นร่วมทีม ศึกษาระลอกเรื่องรื้อเรื่องฝัน สร้างไว อะโวคาโดเวอร์ชั่นเมฆ เอพพิค
            </p>
            <p className="mt-2">
              ไลอ้อน ฮับบี้ไลอ้อน ฮับบี้เป็นอาสามาช่วยสอนที่บ้านกลาะตีน<br />
              เกมระดมไอเดียฮับบี้ผู้ใหญ่ก่อน ป๊อป ชอบคนเฮฮา แชร์ แคร์แผ่ เน้นร่วมทีม ศึกษาระลอกเรื่องรื้อเรื่องฝัน สร้างไว อะโวคาโดเวอร์ชั่นเมฆ เอพพิค
            </p>
            <p className="mt-2">
              ไลอ้อน ฮับบี้<br />
              เกมระดมไอเดียฮับบี้ผู้ใหญ่ก่อน ป๊อป ชอบคนเฮฮา แชร์ แคร์แผ่ เน้นร่วมทีม ศึกษาระลอกเรื่องรื้อเรื่องฝัน สร้างไว อะโวคาโดเวอร์ชั่นเมฆ เอพพิค
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex gap-6 pb-2 text-lg font-medium">
        <button className="px-4 py-2 rounded-md mr-2 transition-colors bg-orange-500 text-white">ผลงาน</button>
        <button className="text-gray-500 hover:underline">ประสบการณ์</button>
      </div>

      {/* Experience List */}
      <div className="mt-4">
        <div className="flex justify-end mb-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600" onClick={() => navigate('/student/lessons')} >
            <FaPlus /> เพิ่มผลงาน
          </button>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow flex flex-col md:flex-row gap-4"
            >
              <img
                src={exp.image}
                alt="experience"
                className="w-full md:w-40 h-28 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-md font-semibold">{exp.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{exp.desc}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <FaCalendarAlt />
                  <span>{exp.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">แก้ไขโปรไฟล์</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">ชื่อ</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ปรัชญา</label>
                <input
                  type="text"
                  value={editPhilosophy}
                  onChange={(e) => setEditPhilosophy(e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">เป้าหมาย</label>
                <input
                  type="text"
                  value={editGoal}
                  onChange={(e) => setEditGoal(e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
