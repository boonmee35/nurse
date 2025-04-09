import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    let userRole = "";

    if (email === "admin") {
      userRole = "admin";
    } else if (email === "student") {
      userRole = "student";
    } else if (email === "teacher") {
      userRole = "teacher";
    }

    if (userRole) {
      Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        text: `ยินดีต้อนรับ ${userRole}`,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate(`/${userRole}`);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถเข้าสู่ระบบได้",
        text: "ชื่อผู้ใช้ไม่ถูกต้อง",
        confirmButtonColor: "#f97316",
        confirmButtonText: "ตกลง",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-orange-600 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-150 text-center">
        <img
          src="/image/logo.png"
          alt="Nurse CMU"
          className="mx-auto w-70"
        />

        <div className="mt-6 text-left">
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="อีเมล"
              className="w-full pl-10 p-2 border-b focus:outline-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="รหัสผ่าน"
              className="w-full pl-10 pr-10 p-2 border-b focus:outline-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
            </div>
          </div>
        </div>

        <div className="flex justify-end text-sm mb-4">
          <a href="#" className="text-orange-500 border-b hover:text-orange-600">
            ลืมรหัสผ่าน
          </a>
        </div>

        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-lg"
          onClick={handleLogin}
        >
          เข้าสู่ระบบ
        </button>

        <p className="text-gray-500 text-sm mt-4">
          <a href="#" className="text-orange-500 border-b hover:text-orange-600">
            ลงทะเบียน
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
