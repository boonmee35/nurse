import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { Clock, Book } from "lucide-react"

function LessonDetail() {
  const location = useLocation()
    const lesson = location.state?.lesson
  
    return (
      <div className="bg-gray-100 min-h-screen">
      <div className="p-4">
        <div className="text-sm text-gray-600 mb-4">
          <Link to="/student/lessons" className="hover:underline">
            บทเรียน
          </Link>{" "}
          &gt; {lesson.title}
        </div>
  
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h1 className="text-lg font-medium mb-4">ชื่อบทเรียน : {lesson.title}</h1>
  
          <div className="mb-4">
            <img
              src={lesson.image}
              alt={lesson.title}
              className="w-full h-auto rounded-md object-cover"
              style={{ maxHeight: "400px" }}
            />
          </div>
  
          <div className="text-sm text-gray-600 mb-6">
            สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น
            ส่วนจัดการที่จะออกมาได้ทั้งใน กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน มุมมองเป็นไปได้จริงที่สุด ต้องเข้าใจว่า
            เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น
            ก่อนมาปรากฎทุกเดือน บุคลิกภาพ ตั้งเป้าหมาย เพื่อนร่วมทีมเข้าใจง่าย โดยเฉพาะที่เป็น แม้ไม่ต้องรอ แต่ยังคงสามารถไป
            มุ่งหาความสำเร็จเป็นไปได้
          </div>
  
          <div className="flex items-center text-xs text-gray-500 mb-6">
            <span className="mr-2">รายวิชา : {lesson.subject}</span>
            <div className="flex items-center mx-2">
              <Book className="h-4 w-4 mr-1" />
              <span>{lesson.lessons}</span>
            </div>
            <div className="flex items-center mx-2">
              <Clock className="h-4 w-4 mr-1" />
              <span>{lesson.duration}</span>
            </div>
          </div>
          <Link to="/student/lessons-detail/content" state={{ lesson }}>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md text-sm font-medium">
              เริ่มเรียน
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  )
  }

export default LessonDetail