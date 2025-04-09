import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

function Exam() {
  const contentItems = [
    {
      id: "1",
      subject: "รายวิชา1",
      image: "/image/lesson.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น...",
      duration: "1 ชั่วโมง 30 นาที",
    },
    {
      id: "2",
      subject: "รายวิชา2",
      image: "/image/lesson2.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น...",
      duration: "1 ชั่วโมง 30 นาที",
    },
    {
      id: "3",
      subject: "รายวิชา1",
      image: "/image/lesson3.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น...",
      duration: "0 ชั่วโมง 45 นาที",
    },
    {
      id: "4",
      subject: "รายวิชา3",
      image: "/image/lesson4.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น...",
      duration: "1 ชั่วโมง 30 นาที",
    },
    {
      id: "5",
      subject: "รายวิชา3",
      image: "/image/lesson.png",
      title: "โมเดิล อบรมโมเดิล อบรมเป็นองค์ความรู้เบื้องต้นภาษาเขียน",
      description:
        "สะสมสาธิตและเตรียมความ โมเดิล ต้องกรุณาทราบว่า เคยสามัญเป็นเบื้องต้นที่เกิดขึ้นเสมอได้เร็ว จัดทำให้สามารถวางแผนได้ดีขึ้น...",
      duration: "2 ชั่วโมง 0 นาที",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">ข้อสอบและประเมินผล</h2>

      <div className="space-y-4">
        {contentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center"
          >
            <div className="w-full md:w-24 h-24 mb-3 md:mb-0 md:mr-4">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>

              <div className="flex flex-wrap items-center text-xs text-gray-500 mt-2">
                <span className="mr-4">รายวิชา: {item.subject}</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0 md:ml-4">
              <Link to="/student/exams-detail" state={{ lesson: item }}>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm transition-all">
                  ทำข้อสอบ
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exam;
