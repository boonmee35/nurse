import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Book } from 'lucide-react'

function LessonList() {
  const contentItems = [
    {
      id: "1",
      subject: "รายวิชา1",
      image: "/src/assets/lesson.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description: "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า...",
      duration: "10 ชั่วโมง 5 นาที",
      lessons: 15,
    },
    {
      id: "2",
      subject: "รายวิชา2",
      image: "/src/assets/lesson2.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description: "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า...",
      duration: "10 ชั่วโมง 5 นาที",
      lessons: 15,
    },
    {
      id: "3",
      subject: "รายวิชา1",
      image: "/src/assets/lesson3.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description: "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า...",
      duration: "10 ชั่วโมง 5 นาที",
      lessons: 15,
    },
    {
      id: "4",
      subject: "รายวิชา3",
      image: "/src/assets/lesson4.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description: "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า...",
      duration: "10 ชั่วโมง 5 นาที",
      lessons: 15,
    },
    {
      id: "5",
      subject: "รายวิชา3",
      image: "/src/assets/lesson.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description: "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า...",
      duration: "10 ชั่วโมง 5 นาที",
      lessons: 15,
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">บทเรียน</h2>

      <div className="space-y-4">
        {contentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center"
          >
            {/* รูปภาพ */}
            <div className="w-full md:w-24 h-24 mb-3 md:mb-0 md:mr-4">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* ข้อมูลบทเรียน */}
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-900 text-base mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-1 line-clamp-2">{item.description}</p>

              <div className="flex flex-wrap text-xs text-gray-500 gap-4">
                <span>รายวิชา: {item.subject}</span>
                <div className="flex items-center">
                  <Book className="h-4 w-4 mr-1" />
                  <span>{item.lessons} บทเรียน</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>

            {/* ปุ่มเรียนเลย */}
            <div className="mt-4 md:mt-0 md:ml-4 self-end md:self-center">
              <Link to="/student/lessons-detail" state={{ lesson: item }}>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm transition duration-200">
                  เรียนเลย
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LessonList
