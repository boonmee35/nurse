import { useNavigate, useLocation } from "react-router-dom"; // เพิ่ม useLocation
import { useState, useRef, useEffect } from "react"; // เพิ่ม useEffect
import Swal from 'sweetalert2';

export default function AddLessonOverview() {
  const navigate = useNavigate();
  const location = useLocation(); // เพิ่ม useLocation
  const fileInputRef = useRef(null); // ref สำหรับ input file
  const [statusType, setStatusType] = useState(""); // เพิ่ม statusType สำหรับบันทึก/เผยแพร่

  // ดึง latestId จาก location.state ที่ส่งมา
  const latestId = location.state?.latestId || 0;
  const lesson = location.state?.lesson || {};
  const [lessonName, setLessonName] = useState(lesson.lessonsName || "");
  const [description, setDescription] = useState(lesson.description || "");
  const [subject, setSubject] = useState(lesson.number || "");
  const [imagePreview, setImagePreview] = useState(lesson.imagePreview || "");
  const [idLesson, setidLesson] = useState(lesson.id || 0);


  useEffect(() => {
    if (statusType) {
      handleSave(); // เรียก handleSave เมื่อ statusType ถูกตั้งค่า
    }
  }, [statusType]); // จะถูกเรียกทุกครั้งที่ statusType เปลี่ยนแปลง

  
  const handleSave = () => {
    const newLesson = {
      id: idLesson !== 0 ? idLesson : latestId + 1, // ถ้า idLesson ไม่เป็น 0 ใช้ idLesson เดิม
      lessonsName: lessonName,
      description: description,
      number: subject,
      image: imagePreview || "https://via.placeholder.com/150", // ถ้าไม่มีรูปจะใช้รูป placeholder
      time:"10 ชั่วโมง 5 นาที",
    };
  
    // ถ้า statusType เป็น "save" ให้ไปหน้า add-content
    // ถ้า statusType เป็น "published" ให้ไปหน้า lessons (แสดงผล)
    console.log(statusType);
  
    if (statusType === "save") {
      
      navigate("/teacher/lessons/add-content", { state: { newLesson } }); // ไปที่หน้า preview ถ้าเป็น published
    } else {
      // ส่งข้อมูลไปหน้า lessons เพื่ออัปเดต
      navigate("/teacher/lessons", { state: { newLesson, isEdit: idLesson !== 0 ? true : false } }); // แก้ไขบทเรียนและส่งกลับไปหน้า lessons
    }
  };
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current.click(); // trigger ให้คลิก input file เมื่อคลิกที่กล่อง
  };

  const showAlert = () => {
    Swal.fire({
      title: 'บันทึกบทเรียน',
      text: 'นำทางไปยังหน้า เพิ่มบทเรียน',
      icon: 'success',
      confirmButtonText: 'ตกลง'
    });
  };

  return (
    <div className="max-w-full px-4 py-6">
      <div className="text-sm mb-4">
        <span>บทเรียน</span> &gt; <span>เพิ่มบทเรียน</span>
      </div>

      <div className="flex mb-6">
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md mr-2">ภาพรวม</button>
        <button className="px-4 py-2 text-gray-700" onClick={() => navigate("/teacher/lessons/add-content")}>บทเรียน</button>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6">
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg h-48 flex flex-col justify-center items-center mb-6 cursor-pointer"
          onClick={handleBoxClick}
        >
          {imagePreview ? (
            <img src={imagePreview} alt="Image preview" className="h-full object-cover rounded-lg" />
          ) : (
            <>
              <div className="w-12 h-12 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cccccc"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm">คลิกเพื่อเลือกรูปภาพ</span>
            </>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="mb-4">
          <label className="block mb-2 text-sm">ชื่อบทเรียน</label>
          <input
            type="text"
            placeholder="ชื่อบทเรียน"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={lessonName}
            onChange={(e) => setLessonName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">รายละเอียด</label>
          <input
            type="text"
            placeholder="รายละเอียด"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">รายวิชา</label>
          <div className="relative">
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none bg-white"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">เลือกวิชา</option>
              <option value="1">วิชา 1</option>
              <option value="2">วิชา 2</option>
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-6 py-2 border border-orange-500 text-orange-500 rounded-md"
            onClick={() => navigate("/teacher/lessons")}
          >
            ยกเลิก
          </button>
          <button
            className="px-6 py-2 bg-orange-500 text-white rounded-md"
            onClick={() => {
              setStatusType("save");
              showAlert(); 
            }}
          >
            บันทึก
          </button>
        </div>
      </div>


    </div>
  );
}
