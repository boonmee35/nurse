import { Clock, Grid } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Lessons() {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type;
  const typeName = location.state?.typeName;

  const [lessons, setLessons] = useState([
    {
      id: 1,
      number: 1,
      image: "https://i.pinimg.com/736x/13/0c/3a/130c3a0003c9779bb931ffd2991d5297.jpg",
      lessonsName: "เรียนรู้เบื้องต้น",
      description:"สามารถรักโลแบตีนาอาคาดี โอไลด์ ค้อนปฏิหาณอัลลิก แคนมญูณไปบอร์นิบตำแร่เคเอร์อิลร์ด วิออาร์โอกาส วาร์ตาเเคร์ไร้ลออม ยือดตีอาตลิร์ออฟกัลกินโบว์ ทุนภาพอัปริปริเนตอร์ตรับปวดตีเนยา ก้อนนำอากาศกับอ้อม",
      time:"10 ชั่วโมง 5 นาที",
      chapters: [
        { id: 1, title: "บทเรียน", description: "เริ่มต้นการเรียนรู้บทเรียนในหัวข้อนี้", image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg"},
        { id: 2, title: "แบบเขียน", description: "ศึกษาวิธีการเขียนแบบต่าง ๆ ที่ใช้ในบทเรียน", image: "https://www.starfishlabz.com/media/569898" },
        { id: 3, title: "ไวรัสโอเลตอย์", description: "เรียนรู้เกี่ยวกับไวรัสโอเลตอย์และการป้องกัน", image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254"  },
        { id: 4, title: "พฤติเมียแอบฟรี...", description: "การสังเกตพฤติกรรมของสภาพแวดล้อมต่าง ๆ", image: "https://www.starfishlabz.com/media/569898"  },
        { id: 5, title: "เก้าที่เลดตัวเเล้ว", description: "การใช้เทคนิคในการแก้ไขปัญหาของบทเรียน", image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg"  },
      ]
    },
    {
      id: 2,
      number: 2,
      image: "https://i.pinimg.com/736x/b8/5a/a0/b85aa0566b1aaf123c3b7b000c2e4cfc.jpg",
      lessonsName: "พื้นฐานสำคัญ",
      description:"สามารถรักโลแบตีนาอาคาดี โอไลด์ ค้อนปฏิหาณอัลลิก แคนมญูณไปบอร์นิบตำแร่เคเอร์อิลร์ด วิออาร์โอกาส วาร์ตาเเคร์ไร้ลออม ยือดตีอาตลิร์ออฟกัลกินโบว์ ทุนภาพอัปริปริเนตอร์ตรับปวดตีเนยา ก้อนนำอากาศกับอ้อม",
      time:"10 ชั่วโมง 5 นาที",
      chapters: [
        { id: 1, title: "บทเรียน", description: "เริ่มต้นการเรียนรู้บทเรียนในหัวข้อนี้" , image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg"},
        { id: 2, title: "แบบเขียน", description: "ศึกษาวิธีการเขียนแบบต่าง ๆ ที่ใช้ในบทเรียน" , image: "https://www.starfishlabz.com/media/569898" },
        { id: 3, title: "ไวรัสโอเลตอย์", description: "เรียนรู้เกี่ยวกับไวรัสโอเลตอย์และการป้องกัน" , image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg"},
        { id: 4, title: "พฤติเมียแอบฟรี...", description: "การสังเกตพฤติกรรมของสภาพแวดล้อมต่าง ๆ" , image: "https://www.starfishlabz.com/media/569898" },
        { id: 5, title: "เก้าที่เลดตัวเเล้ว", description: "การใช้เทคนิคในการแก้ไขปัญหาของบทเรียน" , image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254"},
        { id: 6, title: "แบบเขียน", description: "ฝึกการเขียนแบบในกรณีศึกษาต่าง ๆ" , image: "https://www.starfishlabz.com/media/569898" },
        { id: 7, title: "ไวรัสโอเลตอย์", description: "เข้าใจลักษณะและการป้องกันไวรัสประเภทนี้" , image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254"},
        { id: 8, title: "พฤติเมียแอบฟรี...", description: "การสังเกตพฤติกรรมของคนในสถานการณ์ต่าง ๆ" , image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg"},
        { id: 9, title: "เก้าที่เลดตัวเเล้ว", description: "เทคนิคในการสร้างผลลัพธ์ที่มีประสิทธิภาพสูงสุด" , image: "https://www.starfishlabz.com/media/569898" },
        { id: 10, title: "แบบเขียน", description: "ทบทวนการเขียนแบบและวิธีการที่ใช้ในการสื่อสาร" , image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254"},
        { id: 11, title: "ไวรัสโอเลตอย์", description: "ศึกษาวิธีการป้องกันไวรัสที่มาจากแหล่งต่าง ๆ" , image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg"},
        { id: 12, title: "เก้าที่เลดตัวเเล้ว", description: "การทบทวนหลักการสำคัญในการแก้ไขปัญหาในบทเรียนนี้" , image: "https://www.starfishlabz.com/media/569898" },
        { id: 13, title: "แบบเขียน", description: "การฝึกเขียนแบบโดยใช้เครื่องมือและโปรแกรมที่ทันสมัย" , image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254"},
        { id: 14, title: "เก้าที่เลดตัวเเล้ว", description: "ศึกษาแนวทางใหม่ในการพัฒนาเทคนิคต่าง ๆ" , image: "https://www.starfishlabz.com/media/569898" },
        { id: 15, title: "แบบเขียน", description: "การศึกษาและฝึกฝนการเขียนแบบในกรณีต่าง ๆ เพื่อความเชี่ยวชาญ" , image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg"},
      ]
      
    },
    {
      id: 3,
      number: 1,
      image: "https://i.pinimg.com/736x/8e/19/a4/8e19a4a3de3430521a23f538b2d4fadd.jpg",
      lessonsName: "การใช้งานจริง",
      description:"สามารถรักโลแบตีนาอาคาดี โอไลด์ ค้อนปฏิหาณอัลลิก แคนมญูณไปบอร์นิบตำแร่เคเอร์อิลร์ด วิออาร์โอกาส วาร์ตาเเคร์ไร้ลออม ยือดตีอาตลิร์ออฟกัลกินโบว์ ทุนภาพอัปริปริเนตอร์ตรับปวดตีเนยา ก้อนนำอากาศกับอ้อม",
      time:"10 ชั่วโมง 5 นาที",
      chapters: [
        { id: 1, title: "แบบเขียน", description: "ทบทวนการเขียนแบบและวิธีการที่ใช้ในการสื่อสาร" , image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254"},
        { id: 2, title: "ไวรัสโอเลตอย์", description: "ศึกษาวิธีการป้องกันไวรัสที่มาจากแหล่งต่าง ๆ" , image: "https://www.starfishlabz.com/media/569898"},
        { id: 3, title: "เก้าที่เลดตัวเเล้ว", description: "การทบทวนหลักการสำคัญในการแก้ไขปัญหาในบทเรียนนี้", image: "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg" },
        { id: 4, title: "แบบเขียน", description: "การฝึกเขียนแบบโดยใช้เครื่องมือและโปรแกรมที่ทันสมัย" , image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254"},
        { id: 5, title: "เก้าที่เลดตัวเเล้ว", description: "ศึกษาแนวทางใหม่ในการพัฒนาเทคนิคต่าง ๆ" , image: "https://www.starfishlabz.com/media/569898"},
        { id: 6, title: "แบบเขียน", description: "การศึกษาและฝึกฝนการเขียนแบบในกรณีต่าง ๆ เพื่อความเชี่ยวชาญ" , image: "https://www.starfishlabz.com/cdn-cgi/image/width=1280,quality=60/media/443254"},
      ]
    },
  ]);

  useEffect(() => {
    const newLesson = location.state?.newLesson;
    if (newLesson) {
      if (type === "edit") {
        // แก้ไขบทเรียน
        alert("แก้ไขบทเรียน");
      
        if(typeName === "editChapter"){
            setLessons((prev) =>
                prev.map((lesson) =>
                  lesson.chapters.id === newLesson.chapters.id ? { ...lesson, ...newLesson } : lesson
                )
              );
        }else{
            setLessons((prev) =>
                prev.map((lesson) =>
                  lesson.id === newLesson.id ? { ...lesson, ...newLesson } : lesson
                )
              );
        }
      
      } else {
        // เพิ่มบทเรียนใหม่
        setLessons((prev) => [...prev, newLesson]);
      }
    }
  }, [location.state]);
  
  

  const latestId = lessons.length > 0 ? Math.max(...lessons.map(lesson => lesson.id)) : 0;
  
  return (
    <div className="max-w-full px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">บทเรียน</h1>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center"
          onClick={() => navigate("/teacher/lessons/add-overview", { state: { latestId } })} // ส่ง latestId ไป AddLessonOverview
        >
          <span className="mr-2 text-lg">+</span> เพิ่มบทเรียน
        </button>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-lg shadow-sm p-4 cursor-pointer"
            onClick={() => navigate("/teacher/lessons/lessons-detail", { state: { lesson } })} // ส่งข้อมูลบทเรียนไปที่ /lessons/lessons-detail
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <img
                  src={lesson.image || "/placeholder.svg"}
                  alt="Lesson thumbnail"
                  className="w-[120px] h-[120px] object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-medium mb-2">{lesson.lessonsName}</h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {lesson.description}
              
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-3 sm:mb-0">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">รายวิชา :</span>
                      <span>รายวิชา {lesson.number}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Grid className="h-4 w-4 text-gray-500" />
                      <span>15 บท</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>10 ชั่วโมง 5 นาที</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start sm:mt-10">
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded">
                  แก้ไขบทเรียน
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}