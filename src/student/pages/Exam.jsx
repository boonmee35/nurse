import React from 'react'
import { Link } from "react-router-dom"
import { Clock, Users } from "lucide-react"

function Exam() {
  const contentItems = [
    {
      id: "1",
      subject: "รายวิชา1",
      image: "/src/assets/lesson.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน",
      duration: "1 ชั่วโมง 30 นาที",
    },
    {
      id: "2",
      subject: "รายวิชา2",
      image: "/src/assets/lesson2.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน",
      duration: "1 ชั่วโมง 30 นาที",
    },
    {
      id: "3",
      subject: "รายวิชา1",
      image: "/src/assets/lesson3.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน",
      duration: "0 ชั่วโมง 45 นาที",
    },
    {
      id: "4",
      subject: "รายวิชา3",
      image: "/src/assets/lesson4.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน",
      duration: "1 ชั่วโมง 30 นาที",
    },
    {
      id: "5",
      subject: "รายวิชา3",
      image: "/src/assets/lesson.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน",
      duration: "2 ชั่วโมง 0 นาที",
    },
  ]
  return (
    <div className="bg-gray-100 min-h-screen p-4">
          <div className="text-sm text-gray-600 mb-4">ข้อสอบและประเมินผล</div>
      
          <div className="space-y-4">
            {contentItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt=""
                    width={80}
                    height={80}
                    className="rounded-md object-cover w-20 h-20"
                  />
                </div>
      
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
      
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-2">รายวิชา : {item.subject}</span>
                    <div className="flex items-center mx-2">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
      
                <div className="flex-shrink-0 ml-4">
                <Link to="/student/exams-detail" state={{ lesson: item }}>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
                    ทำข้อสอบ
                  </button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
      }

export default Exam