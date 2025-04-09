import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

export default function AddLessonContent() {
    const navigate = useNavigate();
    const location = useLocation();
    const newLesson = location.state?.newLesson || {};
    const lesson = location.state?.lesson || {}
    const type = location.state?.type;
    const typeName = location.state?.typeName;

    const [chapters, setChapters] = useState([
        { id: 1, title: "บทที่ 1", description: "", image: "", fileName: "" },
    ]);
    
    const [selectedChapter, setSelectedChapter] = useState(1);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        fileName: "",
    });
    const [imagePreview, setImagePreview] = useState(null); // สำหรับแสดงภาพตัวอย่าง
    const [filePreviews, setFilePreviews] = useState({}); // เก็บชื่อไฟล์ PDF สำหรับแต่ละบท

    useEffect(() => {
        // รีเซ็ตข้อมูลภาพตัวอย่างเมื่อเปลี่ยนบทที่
        setImagePreview(null);

        // ถ้ามีการเลือกบทเรียนที่มีอยู่แล้วให้แสดงข้อมูล
        const selected = chapters.find(chapter => chapter.id === selectedChapter);
        if (selected) {
            setFormData({
                title: selected.title,
                description: selected.description,
                image: selected.image,
                fileName: selected.fileName,
            });

            // ถ้าบทเรียนที่เลือกมีการเลือกภาพไว้แล้ว
            if (selected.image) {
                setImagePreview(selected.image); // แสดงภาพที่เลือกไว้ก่อนหน้านี้
            }

            // แสดงชื่อไฟล์ PDF (ถ้ามี)
            if (selected.fileName) {
                setFilePreviews((prev) => ({
                    ...prev,
                    [selectedChapter]: selected.fileName,
                }));
            }
        }
    }, [selectedChapter, chapters]);  // เมื่อ selectedChapter หรือ chapters เปลี่ยนไปให้ทำการรีเซ็ต
    useEffect(() => {
        if (type === "edit" && lesson?.chapters) {
          setChapters(lesson.chapters); // ดึง chapters จาก lesson มาใช้
        }
      }, [type, lesson]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        const updatedChapters = chapters.map((chapter) =>
            chapter.id === selectedChapter
                ? { 
                    ...chapter, 
                    ...formData, 
                    image: imagePreview, // เก็บ URL ของรูปภาพใน "image"
                    fileName: filePreviews[selectedChapter], // เก็บชื่อไฟล์ PDF (ถ้ามี) ใน "fileName"
                }
                : chapter
        );
        setChapters(updatedChapters);
    };

    const handleAddChapter = () => {
        const newChapter = {
            id: chapters.length + 1,
            title: "",
            description: "",
            image: "",
            fileName: "",
        };
        setChapters((prevChapters) => [...prevChapters, newChapter]);
        setSelectedChapter(newChapter.id); // เลือกบทใหม่ที่เพิ่งสร้าง
        setFormData({
            title: "",
            description: "",
            image: "",
            fileName: "",
        });
    };

    const handlePublish = () => {
        const updatedLesson = {
            ...newLesson,     // ดึงข้อมูลจาก location.state?.newLesson
            chapters: chapters, // เพิ่ม chapters เข้าไป
        };
    
        
        console.log(newLesson.id);
        navigate("/teacher/lessons", {
            state: {
                newLesson: updatedLesson,
                
                type: type,
                typeName: typeName,
            },
        });
    };
    

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                [name]: file.name, // บันทึกชื่อไฟล์ลงใน state
            }));

            // หากเป็นไฟล์รูปภาพ
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    // เมื่อไฟล์ถูกอ่านเสร็จแล้วให้แสดงภาพที่เลือกไว้
                    setImagePreview(reader.result); // URL ของรูปภาพ (Base64)
                };
                reader.readAsDataURL(file); // อ่านไฟล์เป็น base64
                setFilePreviews((prev) => ({
                    ...prev,
                    [selectedChapter]: null,
                })); // เคลียร์การแสดงไฟล์ PDF
            } else if (file.type === 'application/pdf') {
                // ถ้าเป็น PDF, แสดงชื่อไฟล์
                setFilePreviews((prev) => ({
                    ...prev,
                    [selectedChapter]: file.name, // เก็บชื่อไฟล์ PDF
                }));
            }
        }
    };

    const showAlert = (action) => {
        let titleText = '';
        let Text = '';

        // เปลี่ยนข้อความตาม action
        if (action === 'add') {
          titleText = 'เพิ่มบทเรียนใหม่สำเร็จ!';
        } else if (action === 'save') {
          titleText = 'บันทึกข้อมูลสำเร็จ';
        }else if (action === 'handlePublish'){
          titleText = 'เผยแพร่ข้อมูลสำเร็จ';
          Text = 'นำทางไปยังหน้าแสดงบทเรียน'
        }

        Swal.fire({
          title: titleText,
          text: Text,
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
                <button
                    className="px-4 py-2 text-gray-700 mr-2"
                    onClick={() => navigate("/teacher/lessons/add-overview")}
                >
                    ภาพรวม
                </button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-md">บทเรียน</button>
            </div>

            <div className="relative mb-4">
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    onChange={(e) => setSelectedChapter(Number(e.target.value))}
                    value={selectedChapter}
                >
                    {chapters.map((chapter) => (
                        <option key={chapter.id} value={chapter.id}>
                            {`บทที่ ${chapter.id}`}
                        </option>
                    ))}
                    <option value="0">เพิ่มบทใหม่</option>
                </select>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6">
                <div className="mb-4">
                    <label className="block mb-2 text-sm">ชื่อบทที่</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        placeholder="ชื่อบทที่"
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Image Upload Section */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm">รูปภาพ/ วิดีโอ</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 flex flex-col justify-center items-center mb-6 cursor-pointer relative">
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
                        <div className="text-gray-400 text-sm">เลือกไฟล์รูปภาพหรือวิดีโอ</div>
                        <input
                            type="file"
                            accept="image/*,video/*"
                            name="image"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            style={{ zIndex: 1 }}
                        />
                    </div>
                    {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-auto mt-2" />}
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm">รายละเอียดบทเรียน</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        placeholder="รายละเอียดบทเรียน"
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* File Upload Section */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm">ข้อมูลบทเรียน</label>
                    <input
                        type="text"
                        value="อัพโหลดเอกสาร"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-orange-500"
                        readOnly
                        style={{
                            textAlign: 'center',
                        }}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm">อัพโหลดเอกสาร PDF</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg h-36 flex justify-center items-center mb-6 cursor-pointer relative">
                        <div className="w-12 h-12">
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
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                        </div>
                        <div className="text-gray-400 text-sm">เลือกไฟล์ PDF</div>
                        <input
                            type="file"
                            accept="application/pdf"
                            name="fileName"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            style={{ zIndex: 1 }}
                        />
                    </div>

                    <div className="mb-6">
                        <h2 className="text-sm font-medium mb-3">ข้อมูลบทเรียน</h2>
                        <div className="flex items-center bg-gray-50 rounded-md">
                            <div className="flex-shrink-0 p-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                                    {/* ใส่ไอคอนที่ต้องการ */}
                                </div>
                            </div>
                            <div className="flex-grow py-3">
                                <div className="text-sm font-medium">
                                    {filePreviews[selectedChapter] && (
                                        <p className="text-gray-500">{filePreviews[selectedChapter]}</p>
                                    )}
                                    {!filePreviews[selectedChapter] && (
                                        <p className="text-gray-500">ยังไม่ได้เลือกไฟล์</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
                    <button
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md"
                        onClick={() => navigate("/teacher/lessons/add-overview")}
                    >
                        กลับ
                    </button>
                    <button
                        className="px-6 py-2 border border-orange-500 text-orange-500 rounded-md"
                        onClick={() => {
                            handleAddChapter(); 
                            showAlert("add"); 
                        }}
                    >
                        เพิ่มบทใหม่
                    </button>
                    <button
                        className="px-6 py-2 bg-orange-500 text-white rounded-md"
                        onClick={() => {
                            handleSave(); 
                            showAlert("save");  
                        }}
                    >
                        บันทึก
                    </button>
                </div>
            </div>

            <button
                className="px-4 py-2 bg-orange-500 text-white rounded-md flex items-center"
                onClick={() => {
                    handlePublish(); 
                    showAlert("handlePublish"); 
                }}
            >
                เผยแพร่บทเรียน <span className="ml-2"></span>
            </button>
        </div>
    );
}
