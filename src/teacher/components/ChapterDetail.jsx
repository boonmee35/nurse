import { ChevronUp, FileText } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ChapterDetail({ onBack }) {
    const navigate = useNavigate();
    const location = useLocation();

    // ดึงข้อมูลบทเรียนจาก location.state
    const lesson = location.state?.lesson;

    if (!lesson) {
        return <div>ข้อมูลบทเรียนไม่พบ</div>; // ถ้าไม่มีข้อมูลบทเรียน
    }

    // ใช้ข้อมูลจาก lesson.chapters
    const chapters = lesson.chapters || [];

    // State to manage selected chapter
    const [selectedChapter, setSelectedChapter] = useState(chapters.length > 0 ? chapters[0].id : null);
    const [selectedChapterDetails, setSelectedChapterDetails] = useState({});

    // Update selectedChapterDetails whenever selectedChapter changes
    useEffect(() => {
        const chapterDetails = chapters.find(chapter => chapter.id === selectedChapter) || {};
        setSelectedChapterDetails(chapterDetails);
    }, [selectedChapter, chapters]);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Main Content */}
            <div className="flex-grow p-6">
                {/* Breadcrumb */}
                <div className="text-sm mb-4">
                    <span className="hover:underline cursor-pointer" onClick={onBack}>
                        บทเรียน
                    </span>{" "}
                    &gt; <span className="hover:underline cursor-pointer">{lesson.lessonsName}</span> &gt; <span>บทที่ {selectedChapter}</span>
                </div>

                {/* Chapter Detail Card - full width */}
                <div className="max-w-full bg-white rounded-lg shadow-sm p-6">
                    {/* Chapter Title */}
                    <div className="flex justify-between items-center mb-4">
                        {/* Title for larger screens (md and up) */}
                        <h1 className="text-base font-medium hidden md:block">
                            บทที่ : {selectedChapterDetails.title || "ข้อมูลไม่พบ"}
                        </h1>
                    </div>

                    <select
                        className="w-full p-2 bg-white border rounded-md max-h-40 overflow-y-auto md:hidden mb-5"
                        value={selectedChapter}
                        onChange={(e) => setSelectedChapter(Number(e.target.value))} // ใช้ Number เพื่อให้แน่ใจว่าเป็นตัวเลข
                    >
                        {chapters.map((chapter) => (
                            <option key={chapter.id} value={chapter.id}>
                                บทที่ {chapter.id}: {chapter.title}
                            </option>
                        ))}
                    </select>

                    {/* Chapter Image */}
                    <div className="mb-6">
                        <img
                            src={selectedChapterDetails.image || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WVKiL5xJnvk4BTVD5f7lPeONBi3tAW.png"}
                            alt="Chapter content"
                            className="w-full h-auto rounded-md object-cover max-h-[250px]"
                        />
                    </div>

                    {/* Chapter Description */}
                    <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                        {selectedChapterDetails.description || "คำอธิบายบทเรียนไม่พบข้อมูล"}
                    </p>

                    {/* Lesson Data */}
                    <div className="mb-6">
                        <h2 className="text-sm font-medium mb-3">ข้อมูลบทเรียน</h2>
                        <div className="flex items-center bg-gray-50 rounded-md">
                            <div className="flex-shrink-0 p-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-white" />
                                </div>
                            </div>
                            <div className="flex-grow py-3">
                                <div className="text-sm font-medium">{lesson.lessonsName} PDF File</div>
                                <div className="text-xs text-gray-500">PDF {lesson.number} page {lesson.time}</div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between">
                        <button
                            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            onClick={() => navigate("/teacher/lessons/lessons-detail", { state: { lesson } })} // ส่งข้อมูลบทเรียนไปที่ /lessons/lessons-detail
                        >
                            กลับ
                        </button>
                        <button
                            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
                            onClick={() => navigate("/teacher/lessons/add-content", { state: { lesson, type: "edit", typeName: "editChapter",  } })} // ส่งข้อมูลบทเรียนไปที่ /lessons/add-content
                        >
                            แก้ไข
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar for larger screens */}
            <div className="hidden md:block w-64 bg-white shadow-sm mt-15">
                <div className="p-4">
                    <h2 className="text-lg font-medium mb-4">บทเรียน</h2>
                    <ul className="space-y-1">
                        {chapters.map((chapter) => (
                            <li
                                key={chapter.id}
                                className={`py-2 px-3 rounded cursor-pointer ${chapter.id === selectedChapter ? "text-orange-500 font-medium" : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                onClick={() => setSelectedChapter(chapter.id)}
                            >
                                บทที่ {chapter.id}: {chapter.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}
