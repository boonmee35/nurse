import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Clock } from "lucide-react";

function ExamDetail() {
  const location = useLocation();
  const lesson = location.state?.lesson;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-4">
        <div className="text-sm text-gray-600 mb-4">
          <Link to="/student/exams" className="hover:underline">
            ข้อสอบและประเมินผล
          </Link>{" "}
          &gt; {lesson.title}
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h1 className="text-lg font-medium mb-4">{lesson.title}</h1>

          <div className="text-sm text-gray-600 mb-6">
            สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า
            เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว
            จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน
            กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน
            มุมมองเป็นไปได้จริงที่สุด ต้องเข้าใจว่า
            เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว
            จัดทำให้สามารถวางแผนได้ดีขึ้น ส่วนจัดการที่จะออกมาได้ทั้งใน
            กุมภาพันธ์เป็นเพราะจัดไว้ให้ดีขึ้น ก่อนมาปรากฎทุกเดือน บุคลิกภาพ
            ตั้งเป้าหมาย เพื่อนร่วมทีมเข้าใจง่าย โดยเฉพาะที่เป็น แม้ไม่ต้องรอ
            แต่ยังคงสามารถไป มุ่งหาความสำเร็จเป็นไปได้
          </div>

          <div className="flex items-center text-xs text-gray-500 mb-6">
            <span className="mr-2">รายวิชา : {lesson.subject}</span>
            <div className="flex items-center mx-2">
              <Clock className="h-4 w-4 mr-1" />
              <span>{lesson.duration}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mt-4 p-4">
          <h1 className="text-lg font-medium mb-4">1. ตัวอนุสาวรีย์ต้นโพธิ์ เรณูนครจังหวัดนครพนม อันสงัดสม่ำเสมอมีอิทธิพล 
          อนุสาวรีย์โดยให้ชื่อถ่อโยนีศิวลึงค์วิศวภาค 
          ขึ้น กราวนต์เพงพี่น้อมคงฟังโปร่งโหวกหวาก
          เฉพาะพุทธศาสนธรรม ไอเล่งของสถลสารัตน์ดับหันโปรโมชั่น 
          คัดเอาต์ตุ๊กตุ๊กตุ๊กกอล์ฟ สีบอร์ดรีวิวปัณเคษียรใช้งาน</h1>

          <div className="space-y-2 ml-4 text-sm text-gray-600">
          <label className="flex items-start gap-2">
            <input type="radio" name="q1" className="mt-1" />
            คอนโดมิเนียมซับข่าวสารสคริปต์สมเดย์ สไปเดอร์จอมยันต์เดนต่อแสงเผชิญ
          </label>
          <label className="flex items-start gap-2">
            <input type="radio" name="q1" className="mt-1" />
            สันนามเนียนปมปุไทยแลนด์ฮิวแมนเชนเปี้ยน วิศว ภังค์โปรแกรมมี่
          </label>
          <label className="flex items-start gap-2">
            <input type="radio" name="q1" className="mt-1" />
            เวสต์เลิศแชมเปี้ยนซองสวิตตามจ์ ตุ๊กตุ๊ก โยโย่บิสสุริยารา ไมโครเวเตอร์มีติทัพพ์ธรรมาภิบาลสารเลขอรีย์
          </label>
          <label className="flex items-start gap-2">
            <input type="radio" name="q1" className="mt-1" />
            ลิ้นเหล็กซิงอัมซัมเมนบอร์นทรีร์ วิทย์วรัชจะและคอนโดเมียมโยนีดร็อคซี่เพรส ออร์แกนน่า สายเฟย์เวอร์เน็ต ธานุโภครีวิวปั่น
          </label>
        </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mt-4 p-4">
          <h1 className="text-lg font-medium mb-4">2. ตัวอนุสาวรีย์ต้นโพธิ์ เรณูนครจังหวัดนครพนม อันสงัดสม่ำเสมอมีอิทธิพล 
          อนุสาวรีย์โดยให้ชื่อถ่อโยนีศิวลึงค์วิศวภาค 
          ขึ้น กราวนต์เพงพี่น้อมคงฟังโปร่งโหวกหวาก
          เฉพาะพุทธศาสนธรรม ไอเล่งของสถลสารัตน์ดับหันโปรโมชั่น 
          คัดเอาต์ตุ๊กตุ๊กตุ๊กกอล์ฟ สีบอร์ดรีวิวปัณเคษียรใช้งาน</h1>

          <div className="text-sm text-gray-600 mb-6">
          <textarea
          placeholder="คำตอบ"
          className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
          rows={4}
        />
          </div>
        </div>

        {/* ปุ่ม */}
      <div className="flex justify-end space-x-4 mt-4">
        <button className="px-6 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">
          กลับ
        </button>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          ส่งคำตอบ
        </button>
      </div>

      </div>
    </div>
  );
}

export default ExamDetail;
