import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Send } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

function LessonContent() {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi!", time: "10:15", isUser: false },
    {
      id: 2,
      text: "มาชวนคุณมาดูคู่มือการใช้เวลาดี ดูดีเลยนะ!",
      time: "10:11",
      isUser: false,
    },
    {
      id: 3,
      text: "เรียนรู้ทักษะใหม่ๆได้บุฟเฟ่ต์สุดคุ้ม",
      time: "",
      isUser: true,
    },
  ]);
  const [messageInput, setMessageInput] = useState("");

  const location = useLocation();
  const { lesson } = location.state || {};

  const [activeUnit, setActiveUnit] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const courseUnits = [
    { id: 1, title: "บทที่1 : บทนำ", image: "/src/assets/lesson4.png" },
    { id: 2, title: "บทที่2 : แชมเปี้ยน", image: "/src/assets/lesson5.png" },
    { id: 3, title: "บทที่3 : ทักษะเบื้องต้น", image: "/src/assets/lesson.png" },
    { id: 4, title: "บทที่4 : พฤติกรรมของผู้เรียน", image: "/src/assets/lesson2.png" },
    { id: 5, title: "บทที่5 : เทคนิคขั้นสูง", image: "/src/assets/lesson3.png" },
    { id: 6, title: "บทที่6 : แชมเปี้ยน", image: "/src/assets/lesson4.png" },
    { id: 7, title: "บทที่7 : ทักษะเบื้องต้น", image: "/src/assets/lesson5.png" },
    { id: 8, title: "บทที่8 : พฤติกรรมของผู้เรียน", image: "/src/assets/lesson.png" },
    { id: 9, title: "บทที่9 : เทคนิคขั้นสูง", image: "/src/assets/lesson2.png" },
  ];

  const currentUnit =
    courseUnits.find((unit) => unit.id === activeUnit) || courseUnits[0];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          text: messageInput,
          time: new Date().toLocaleTimeString("th-TH", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isUser: true,
        },
      ]);
      setMessageInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="p-4 text-sm text-gray-600">
        <Link to="/student/lessons" className="hover:underline">
          บทเรียน
        </Link>{" "}
        &gt;{" "}
        <Link to="/student/lessons-detail" state={{ lesson }} className="hover:underline">
          {lesson?.title}
        </Link>{" "}
        &gt; {currentUnit.title}
      </div>

      <div className="flex flex-1 relative">
        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-medium">{currentUnit.title}</h1>
              <button className="p-2">
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="mb-4">
              <img
                src={currentUnit.image || "/placeholder.svg"}
                alt={currentUnit.title}
                className="w-full h-auto rounded-md object-cover"
                style={{ maxHeight: "300px" }}
              />
            </div>

            <div className="text-sm text-gray-600 mb-6">
              สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า
              เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว
              จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน
              กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน
            </div>
          </div>

          {/* ข้อมูลบทเรียน */}
          <div className="bg-white rounded-xl p-6 mb-4 shadow-sm">
            <h2 className="text-base font-semibold mb-3">ข้อมูลบทเรียน</h2>
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-md">
                <span className="text-sm font-medium">PDF</span>
              </div>
              <div className="text-sm">
                <div>คอมเมนต์ตัวน้อยปรับตกลงฮะ</div>
                <div className="text-xs text-gray-500">
                  PDF · 15 page · 10MB
                </div>
              </div>
            </div>
          </div>

          {/* สมาชิกทั้งหมด */}
          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div className="flex -space-x-2">
              <img
                src="/src/assets/avatar.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/src/assets/avatar2.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/src/assets/avatar3.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-orange-500 font-medium text-sm hover:underline"
            >
              สมาชิกทั้งหมด
            </button>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="w-full lg:w-[300px] flex flex-col gap-4">
          {/* รายการบทเรียน */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-4 border-b font-medium text-gray-700">
              บทเรียน
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {courseUnits.map((unit) => (
                <div
                  key={unit.id}
                  onClick={() => setActiveUnit(unit.id)}
                  className={`cursor-pointer px-4 py-2 text-sm ${
                    currentUnit?.id === unit.id
                      ? "bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-500"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {unit.title}
                </div>
              ))}
            </div>
          </div>

          {/* แชทกลุ่มย้ายมาอยู่ใต้รายการบทเรียน */}
          <div className="bg-white rounded-xl shadow-sm flex flex-col">
            <div className="p-4 border-b font-medium text-gray-700 text-sm flex justify-between">
              แชทกลุ่ม{" "}
              <span className="text-xs text-gray-400">สมาชิก 32 คน</span>
            </div>
            <div className="flex-1 px-4 py-2 overflow-y-auto max-h-[200px]">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`my-2 text-sm max-w-[80%] ${
                    msg.isUser
                      ? "ml-auto text-right text-orange-600"
                      : "text-gray-800"
                  }`}
                >
                  <div
                    className={`inline-block px-3 py-2 rounded-lg ${
                      msg.isUser ? "bg-orange-100" : "bg-gray-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t flex items-center gap-2">
              <input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 text-sm px-3 py-2 border rounded-md"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange-500 text-white p-2 rounded-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-4 bg-black/30">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-md mx-auto p-4">
            <div className="flex justify-between items-center border-b pb-2">
              <Dialog.Title className="text-base font-semibold">
                สมาชิกทั้งหมด
              </Dialog.Title>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="max-h-[400px] overflow-y-auto mt-4">
              {/* สมาชิกรายการ */}
              {[
                {
                  name: "ชาวี อัมรากรณ์",
                  role: "ครูผู้สอน",
                  img: "/src/assets/avatar.jpg",
                },
                { name: "David Wayne", img: "/src/assets/avatar2.jpg" },
                { name: "Edward Mint", img: "/src/assets/avatar3.jpg" },
                { name: "May HG. Kang", img: "/src/assets/avatar4.jpg" },
                { name: "Lily Dare", img: "/src/assets/avatar5.jpg" },
                { name: "Dennis Dang", img: "/src/assets/avatar6.jpg" },
                { name: "Cayla Raiji", img: "/src/assets/avatar7.jpg" },
                { name: "Erin Turcotte", img: "/src/assets/avatar8.jpg" },
                { name: "Bob Walter", img: "/src/assets/avatar9.jpg" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={member.img}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={member.name}
                    />
                    <div>
                      <div className="text-sm font-medium">{member.name}</div>
                      {member.role && (
                        <div className="text-xs text-gray-400">
                          {member.role}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-orange-500">💬</div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-orange-500 text-white px-4 py-2 rounded-md"
              >
                ตกลง
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default LessonContent;
