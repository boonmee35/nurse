import React, {useState} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { FaBook, FaPen } from "react-icons/fa6";
import { Book, Clock } from "lucide-react"

function Dashboard() {
  const dataAttend = [
    { day: "Mon", attendance: 10 },
    { day: "Tue", attendance: 50 },
    { day: "Wed", attendance: 45 },
    { day: "Thu", attendance: 80 },
    { day: "Fri", attendance: 70 },
    { day: "Sat", attendance: 90 },
    { day: "Sun", attendance: 100 },
  ];

  const scoreData = [
    { month: "Jan", highest: 90, lowest: 40 },
    { month: "Feb", highest: 80, lowest: 45 },
    { month: "Mar", highest: 85, lowest: 50 },
    { month: "Apr", highest: 95, lowest: 55 },
    { month: "May", highest: 75, lowest: 50 },
    { month: "Jun", highest: 80, lowest: 45 },
    { month: "Jul", highest: 90, lowest: 55 },
    { month: "Aug", highest: 100, lowest: 60 },
    { month: "Sep", highest: 85, lowest: 50 },
    { month: "Oct", highest: 95, lowest: 55 },
    { month: "Nov", highest: 100, lowest: 60 },
    { month: "Dec", highest: 70, lowest: 50 },
  ];

  const data = [
    {
      id: 1,
      icon: <FaBook className="text-8xl mr-4" />,
      number: 500,
      label: "บทเรียน",
    },
    {
      id: 2,
      icon: <FaPen className="text-8xl mr-4" />,
      number: 122,
      label: "ข้อสอบและแบบประเมิน",
    },
  ];

    const [activeTab, setActiveTab] = useState("lessons")
    const [hoveredCourse, setHoveredCourse] = useState(null);

    const [courses] = useState([
        {
            id: 1,
            title: "โมเดิล อัปเดทโมเดิล อัปเดทโมเดิลความสะดวกเกี่ยวกับการคะเมิน",
            description:
                "ตามความต้องการของนานาชาติ โดยเฉพาะภูมิภาคเอเชีย แผนงานที่มุ่งไปสู่การบริหารจัดการที่ยอดเยี่ยม รวมทั้งการพัฒนาความสามารถในระดับสูง ซึ่งจัดทำลงในรายงานที่สำคัญโดย กุญแจที่เป็นไปตามเกณฑ์ตัวชี้วัดสากล ก่อนเข้าการทำรายงาน และรู้ไว้ก่อนที่คนอื่น เพราให้คุณอยู่แถวหน้า สูตรนี้ ทดสอบ!",
            subject: "รายวิชา1",
            lessons: 15,
            duration: { hours: 10, minutes: 5 },
            progress: 20,
            thumbnail: "https://i.pinimg.com/736x/13/0c/3a/130c3a0003c9779bb931ffd2991d5297.jpg",
            type: "lessons" 
        },
        {
            id: 2,
            title: "โมเดิล อัปเดทโมเดิล อัปเดทโมเดิลความสะดวกเกี่ยวกับการคะเมิน",
            description:
                "ตามความต้องการของนานาชาติ โดยเฉพาะภูมิภาคเอเชีย แผนงานที่มุ่งไปสู่การบริหารจัดการที่ยอดเยี่ยม รวมทั้งการพัฒนาความสามารถในระดับสูง ซึ่งจัดทำลงในรายงานที่สำคัญโดย กุญแจที่เป็นไปตามเกณฑ์ตัวชี้วัดสากล ก่อนเข้าการทำรายงาน และรู้ไว้ก่อนที่คนอื่น เพราให้คุณอยู่แถวหน้า สูตรนี้ ทดสอบ!",
            subject: "รายวิชา2",
            lessons: 12,
            duration: { hours: 6, minutes: 5 },
            progress: 50,
            thumbnail: "https://i.pinimg.com/736x/b8/5a/a0/b85aa0566b1aaf123c3b7b000c2e4cfc.jpg",
            type: "lessons" 
        },
        {
            id: 3,
            title: "โมเดิล อัปเดทโมเดิล อัปเดทโมเดิลความสะดวกเกี่ยวกับการคะเมิน",
            description:
                "ตามความต้องการของนานาชาติ โดยเฉพาะภูมิภาคเอเชีย แผนงานที่มุ่งไปสู่การบริหารจัดการที่ยอดเยี่ยม รวมทั้งการพัฒนาความสามารถในระดับสูง ซึ่งจัดทำลงในรายงานที่สำคัญโดย กุญแจที่เป็นไปตามเกณฑ์ตัวชี้วัดสากล ก่อนเข้าการทำรายงาน และรู้ไว้ก่อนที่คนอื่น เพราให้คุณอยู่แถวหน้า สูตรนี้ ทดสอบ!",
            subject: "รายวิชา3",
            lessons: 6,
            duration: { hours: 1, minutes: 25 },
            progress: 80,
            thumbnail: "https://i.pinimg.com/736x/8e/19/a4/8e19a4a3de3430521a23f538b2d4fadd.jpg",
            type: "lessons" 
        },
        {
            id: 4,
            title: "โมเดิล อัปเดทโมเดิล อัปเดทโมเดิลความสะดวกเกี่ยวกับการคะเมิน",
            description:
                "ตามความต้องการของนานาชาติ โดยเฉพาะภูมิภาคเอเชีย แผนงานที่มุ่งไปสู่การบริหารจัดการที่ยอดเยี่ยม รวมทั้งการพัฒนาความสามารถในระดับสูง ซึ่งจัดทำลงในรายงานที่สำคัญโดย กุญแจที่เป็นไปตามเกณฑ์ตัวชี้วัดสากล ก่อนเข้าการทำรายงาน และรู้ไว้ก่อนที่คนอื่น เพราให้คุณอยู่แถวหน้า สูตรนี้ ทดสอบ!",
            subject: "รายวิชา4",
            lessons: 8,
            duration: { hours: 3, minutes: 10 },
            progress: 10,
            thumbnail: "https://i.pinimg.com/736x/58/c0/a8/58c0a85fdd9f026d76c352fa176f4383.jpg",
            type: "tests" 
        },
        {
            id: 5,
            title: "โมเดิล อัปเดทโมเดิล อัปเดทโมเดิลความสะดวกเกี่ยวกับการคะเมิน",
            description:
                "ตามความต้องการของนานาชาติ โดยเฉพาะภูมิภาคเอเชีย แผนงานที่มุ่งไปสู่การบริหารจัดการที่ยอดเยี่ยม รวมทั้งการพัฒนาความสามารถในระดับสูง ซึ่งจัดทำลงในรายงานที่สำคัญโดย กุญแจที่เป็นไปตามเกณฑ์ตัวชี้วัดสากล ก่อนเข้าการทำรายงาน และรู้ไว้ก่อนที่คนอื่น เพราให้คุณอยู่แถวหน้า สูตรนี้ ทดสอบ!",
            subject: "รายวิชา4",
            lessons: 8,
            duration: { hours: 3, minutes: 10 },
            progress: 10,
            thumbnail: "https://i.pinimg.com/736x/dc/b5/b8/dcb5b80591e822b35950c587ff90e933.jpg",
            type: "tests" 
        },
        {
            id: 6,
            title: "โมเดิล อัปเดทโมเดิล อัปเดทโมเดิลความสะดวกเกี่ยวกับการคะเมิน",
            description:
                "ตามความต้องการของนานาชาติ โดยเฉพาะภูมิภาคเอเชีย แผนงานที่มุ่งไปสู่การบริหารจัดการที่ยอดเยี่ยม รวมทั้งการพัฒนาความสามารถในระดับสูง ซึ่งจัดทำลงในรายงานที่สำคัญโดย กุญแจที่เป็นไปตามเกณฑ์ตัวชี้วัดสากล ก่อนเข้าการทำรายงาน และรู้ไว้ก่อนที่คนอื่น เพราให้คุณอยู่แถวหน้า สูตรนี้ ทดสอบ!",
            subject: "รายวิชา4",
            lessons: 8,
            duration: { hours: 3, minutes: 10 },
            progress: 10,
            thumbnail: "https://i.pinimg.com/736x/17/72/84/177284b07fded8ad7bce419fc514039e.jpg",
            type: "tests" 
        },
        {
            id: 7,
            title: "โมเดิล อัปเดทโมเดิล อัปเดทโมเดิลความสะดวกเกี่ยวกับการคะเมิน",
            description:
                "ตามความต้องการของนานาชาติ โดยเฉพาะภูมิภาคเอเชีย แผนงานที่มุ่งไปสู่การบริหารจัดการที่ยอดเยี่ยม รวมทั้งการพัฒนาความสามารถในระดับสูง ซึ่งจัดทำลงในรายงานที่สำคัญโดย กุญแจที่เป็นไปตามเกณฑ์ตัวชี้วัดสากล ก่อนเข้าการทำรายงาน และรู้ไว้ก่อนที่คนอื่น เพราให้คุณอยู่แถวหน้า สูตรนี้ ทดสอบ!",
            subject: "รายวิชา4",
            lessons: 8,
            duration: { hours: 3, minutes: 10 },
            progress: 10,
            thumbnail: "https://i.pinimg.com/736x/59/ea/31/59ea31ebc367234ee9715f0dc251e93a.jpg",
            type: "tests" 
        },
    ])
    const filteredCourses = courses.filter(course => course.type === activeTab);

    return (
        <div className="p-4 sm:p-6 space-y-6">
            {/* Section: ข้อมูลสถิติ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gradient-to-b from-orange-500 to-purple-500 text-white p-4 sm:p-6 rounded-lg flex flex-row items-center justify-between"
                    >
                        {item.icon}
                        <div className="flex flex-col items-end">
                            <span className="text-4xl sm:text-5xl lg:text-6xl">{item.number}</span>
                            <span className="text-base sm:text-lg mt-2">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section: กราฟ */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
                {/* กราฟสถิติการเข้าเรียน */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md col-span-1 lg:col-span-4 min-w-0">
                    <h2 className="text-lg font-semibold mb-4">สถิติการเข้าเรียน</h2>
                    <ResponsiveContainer width="100%" height={280}>
                        <LineChart data={dataAttend}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="attendance" stroke="#ff4500" dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* กราฟสถิติคะแนน */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md col-span-1 lg:col-span-6 min-w-0">
                    <h2 className="text-lg font-semibold mb-4">สถิติคะแนน</h2>
                    <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={scoreData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend align="right" verticalAlign="top" />
                            <Bar dataKey="highest" fill="#8a2be2" name="คะแนนสูงสุด" radius={[10, 10, 0, 0]} barSize={10} />
                            <Bar dataKey="lowest" fill="#ff4500" name="คะแนนต่ำสุด" radius={[10, 10, 0, 0]} barSize={10} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6 max-w-full">
            <div className="flex items-center mb-4 flex-wrap gap-2">
            <button
                    onClick={() => setActiveTab("lessons")}
                    className={`px-4 py-2 rounded-md mr-2 transition-colors ${activeTab === "lessons" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                    บทเรียน
                </button>
                <button
                    onClick={() => setActiveTab("tests")}
                    className={`px-4 py-2 rounded-md mr-2 transition-colors ${activeTab === "tests" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                    ข้อสอบและแบบประเมิน
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <div className="space-y-4 md:space-y-6">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={course.id}
                            className={`flex gap-3 md:gap-4 transition-all duration-200 p-2 rounded-lg ${hoveredCourse === index ? "bg-gray-50" : ""}`}
                            onMouseEnter={() => setHoveredCourse(index)}
                            onMouseLeave={() => setHoveredCourse(null)}
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden rounded-md">
                                <img
                                    src={course.thumbnail || `/placeholder.svg?height=80&width=80`}
                                    alt={`${course.subject} thumbnail`}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                                    style={{ transform: hoveredCourse === index ? "scale(1.05)" : "scale(1)" }}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-sm sm:text-base line-clamp-1">{course.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2 md:line-clamp-3">{course.description}</p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2">
                                    <div className="text-xs sm:text-sm text-gray-500">รายวิชา : {course.subject}</div>
                                    <div className="flex items-center flex-wrap gap-2 sm:gap-4 md:gap-6">
                                        <div className="flex items-center gap-1">
                                            <Book className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                                            <span className="text-xs sm:text-sm text-gray-500">{course.lessons} บท</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                                            <span className="text-xs sm:text-sm text-gray-500">
                                                {course.duration.hours} ชั่วโมง {course.duration.minutes} นาที
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
       

    );
};

export default Dashboard;
