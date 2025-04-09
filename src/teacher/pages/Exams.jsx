import React from 'react'
import { PlusIcon, Clock } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Exams() {
    const navigate = useNavigate();
    const quizData = [
        {
          title: "โฟลเชิร์ต อินอินโฟเชิร์ต อินอินเป็นข้อความช่วยเหลือในภาษาละติน",
          description:
            "สามารถวัดโดยแบบทดสอบคุณ โฟลเดอร์ ที่อปุกรณ์ของวัสดุ แผนแบบแบบไม่ระบุเวลาเรียกเวลาร้องขอ วัดอท่าวัดกลาวาดลายหรือลออม ย่อยถือทดสอบวงศาติดทีเป็นไอ ทุนทพัฒน์โปรโมเอตรจักรจับวัสดีเลขา ก่อนมาอ่างทุกๆกับย่อม",
          subject: "รายวิชา1",
          duration: "1 ชั่วโมง 30 นาที",
          image: "https://i.pinimg.com/736x/dc/b5/b8/dcb5b80591e822b35950c587ff90e933.jpg",
        },
        {
          title: "โฟลเชิร์ต อินอินโฟเชิร์ต อินอินเป็นข้อความช่วยเหลือในภาษาละติน",
          description:
            "สามารถวัดโดยแบบทดสอบคุณ โฟลเดอร์ ที่อปุกรณ์ของวัสดุ แผนแบบแบบไม่ระบุเวลาเรียกเวลาร้องขอ วัดอท่าวัดกลาวาดลายหรือลออม ย่อยถือทดสอบวงศาติดทีเป็นไอ ทุนทพัฒน์โปรโมเอตรจักรจับวัสดีเลขา ก่อนมาอ่างทุกๆกับย่อม",
          subject: "รายวิชา2",
          duration: "0 ชั่วโมง 45 นาที",
          image: "https://i.pinimg.com/736x/17/72/84/177284b07fded8ad7bce419fc514039e.jpg",
        },
        {
          title: "โฟลเชิร์ต อินอินโฟเชิร์ต อินอินเป็นข้อความช่วยเหลือในภาษาละติน",
          description:
            "สามารถวัดโดยแบบทดสอบคุณ โฟลเดอร์ ที่อปุกรณ์ของวัสดุ แผนแบบแบบไม่ระบุเวลาเรียกเวลาร้องขอ วัดอท่าวัดกลาวาดลายหรือลออม ย่อยถือทดสอบวงศาติดทีเป็นไอ ทุนทพัฒน์โปรโมเอตรจักรจับวัสดีเลขา ก่อนมาอ่างทุกๆกับย่อม",
          subject: "รายวิชา1",
          duration: "1 ชั่วโมง 30 นาที",
          image: "https://i.pinimg.com/736x/59/ea/31/59ea31ebc367234ee9715f0dc251e93a.jpg",
        },
        {
          title: "โฟลเชิร์ต อินอินโฟเชิร์ต อินอินเป็นข้อความช่วยเหลือในภาษาละติน",
          description:
            "สามารถวัดโดยแบบทดสอบคุณ โฟลเดอร์ ที่อปุกรณ์ของวัสดุ แผนแบบแบบไม่ระบุเวลาเรียกเวลาร้องขอ วัดอท่าวัดกลาวาดลายหรือลออม ย่อยถือทดสอบวงศาติดทีเป็นไอ ทุนทพัฒน์โปรโมเอตรจักรจับวัสดีเลขา ก่อนมาอ่างทุกๆกับย่อม",
          subject: "รายวิชา3",
          duration: "2 ชั่วโมง 0 นาที",
          image: "https://i.pinimg.com/736x/58/c0/a8/58c0a85fdd9f026d76c352fa176f4383.jpg",
        },
      ]
  return (
    <div className="max-w-full mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">ข้อสอบและแบบประเมิน</h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={() => navigate("/teacher/exams/QuizCreationForm")} // ส่ง latestId ไป AddLessonOverview
        
        >
          <PlusIcon size={20} />
          <span>เพิ่มข้อสอบและแบบประเมิน</span>
        </button>
      </div>

      <div className="space-y-4">
        {quizData.map((quiz, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <img
                  src={quiz.image || ""}
                  alt="Quiz thumbnail"
                  className="rounded-md object-cover w-[120px] h-[120px]"
                />
              </div>
              <div className="flex-grow">
                <h2 className="font-medium mb-2">{quiz.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{quiz.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">รายวิชา : </span>
                    <span className="text-sm">{quiz.subject}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">{quiz.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center md:items-start sm:mt-25 lg:mt-10">
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-md whitespace-nowrap"
                
          onClick={() => navigate("/teacher/exams/QuizInterface")} // ส่ง latestId ไป AddLessonOverview
          >
                  ข้อสอบและแบบประเมิน
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exams
