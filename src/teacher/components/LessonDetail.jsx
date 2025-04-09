import { useNavigate, useLocation } from "react-router-dom";
import { Clock, Grid } from "lucide-react";

export default function LessonDetail({ onBack }) {
  const navigate = useNavigate();
  const location = useLocation();

  // กำหนดค่า chapters เอง
  const defaultChapters = [
    { id: 1, title: "แบบเขียน", description: "ทบทวนการเขียนแบบและวิธีการที่ใช้ในการสื่อสาร", image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254" },
    { id: 2, title: "ไวรัสโอเลตอย์", description: "ศึกษาวิธีการป้องกันไวรัสที่มาจากแหล่งต่าง ๆ", image: "https://www.starfishlabz.com/media/569898" },
    { id: 3, title: "เก้าที่เลดตัวเเล้ว", description: "การทบทวนหลักการสำคัญในการแก้ไขปัญหาในบทเรียนนี้", image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg" },
    { id: 4, title: "แบบเขียน", description: "การฝึกเขียนแบบโดยใช้เครื่องมือและโปรแกรมที่ทันสมัย", image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254" },
    { id: 5, title: "เก้าที่เลดตัวเเล้ว", description: "ศึกษาแนวทางใหม่ในการพัฒนาเทคนิคต่าง ๆ", image: "https://www.starfishlabz.com/media/569898" },
    { id: 6, title: "แบบเขียน", description: "การศึกษาและฝึกฝนการเขียนแบบในกรณีต่าง ๆ เพื่อความเชี่ยวชาญ", image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254" }
  ];

  // เข้าถึงข้อมูลบทเรียนจาก location.state
  const lesson = location.state?.lesson;

  // ใช้ chapters จาก lesson หรือใช้ค่า default
  const chapters = lesson?.chapters?.length ? lesson.chapters : defaultChapters;

  if (!lesson) {
    return <div>ข้อมูลบทเรียนไม่พบ</div>;  // ถ้าไม่มีข้อมูลบทเรียนจะแสดงข้อความนี้
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm mb-4">
          <span className="hover:underline cursor-pointer" onClick={onBack}>
            บทเรียน
          </span>{" "}
          &gt; <span>{lesson.lessonsName}</span>
        </div>

        {/* Lesson Detail Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Lesson Title */}
          <h1 className="text-base mb-4">ชื่อบทเรียน : {lesson.lessonsName} {lesson.id}</h1>

          {/* Lesson Image */}
          <div className="mb-6">
            <img
              src={lesson.image || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S8dNXQlhy98quqVkr0yMENS6tDCYXE.png"}
              alt="Lesson content"
              className="w-full h-auto rounded-md object-cover max-h-[500px]"
            />
          </div>

          {/* Lesson Description */}
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            {lesson.description || "คำอธิบายบทเรียนไม่พบข้อมูล"}
          </p>

          {/* Lesson Metadata */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">รายวิชา :</span>
              <span>รายวิชา {lesson.number}</span>
            </div>
            <div className="flex items-center gap-2">
              <Grid className="h-4 w-4 text-gray-500" />
              <span>{chapters.length} บท</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>{lesson.time || "ไม่ระบุเวลา"}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md"
              onClick={() => navigate("/teacher/lessons")}
            >
              กลับ
            </button>
            <button
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={() => navigate("/teacher/lessons/add-overview", { state: { lesson: lesson } })}
            >
              แก้ไข
            </button>

            <button
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
              onClick={() =>
                navigate("/teacher/lessons/lessons-detail/chapter-detail", {
                  state: { lesson },  // ส่งข้อมูล lesson ไป
                })
              }
            >
              แสดงเนื้อหา
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
