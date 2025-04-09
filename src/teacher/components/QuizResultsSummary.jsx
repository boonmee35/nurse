import { useState } from "react"
import { Printer } from "lucide-react"
import { useNavigate } from "react-router-dom";

function QuizResultsSummary() {
    const [activeTab, setActiveTab] = useState("summary") // "summary" or "review"
    const navigate = useNavigate();
    const [active, setActive] = useState("summary"); // ใช้สำหรับจัดการ active state
    const handleClick = (section) => {
        setActive(section); // กำหนด active เป็น section ที่คลิก
    };

    // Sample data for the chart
    const chartData = [
        { score: 1, count: 1 },
        { score: 2, count: 2 },
        { score: 3, count: 3 },
        { score: 4, count: 1 },
        { score: 5, count: 2 },
    ]

    const maxCount = Math.max(...chartData.map((item) => item.count))

    return (
        <div className="max-w-full mx-auto bg-gray-50 min-h-screen pb-8">
            {/* Header */}
            <div className="bg-white p-4 border-b">
                <div className="max-w-full mx-auto">
                    <div className="text-sm text-gray-600 mb-2">
                        ข้อสอบและแบบประเมิน {">"} โฟลเชิร์ต อินอินโฟเชิร์ต อินอินเป็นข้อความช่วยเหลือในภาษาละติน
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-orange-500 text-white px-4 py-1.5 rounded-md text-sm flex items-center gap-1">
                            <span>การตอบกลับ</span>
                            <div className="w-5 h-5 rounded-full bg-white text-orange-500 flex items-center justify-center text-xs font-bold">
                                2
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Results Content */}
            <div className="max-w-full mx-auto p-4">
                {/* Tabs */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <button
                            className={`text-gray-600 font-medium cursor-pointer flex-1 text-center ${active === "officialReview" ? "text-orange-500" : ""
                                }`}
                            onClick={() => {
                                handleClick("officialReview");
                                navigate("/teacher/exams/QuizInterface/QuizResultsReview"); 
                            }}
                        >
                            ตรวจแบบทางการ
                        </button>
                        <div className="flex justify-center items-center flex-1">
                            <button
                                className={`text-sm text-gray-600 cursor-pointer ${active === "summary" ? "text-orange-500" : ""
                                    }`}
                                onClick={() => {
                                    handleClick("summary");

                                }}
                            >
                                สรุปข้อมูล
                            </button>
                        </div>
                    </div>
                </div>

                {/* Summary Content */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                    <h2 className="text-lg font-medium mb-4">ข้อมูลเบื้องต้น</h2>

                    {/* Stats Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-gray-100 rounded-lg p-4 text-center">
                            <h3 className="text-gray-700 mb-2">คำตอบ</h3>
                            <p className="font-medium">3.8 / 5 คะแนน</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4 text-center">
                            <h3 className="text-gray-700 mb-2">คำอธิบาย</h3>
                            <p className="font-medium">3 / 5 คะแนน</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4 text-center">
                            <h3 className="text-gray-700 mb-2">ข้อ</h3>
                            <p className="font-medium">2 / 5 คะแนน</p>
                        </div>
                    </div>

                    <div className="relative w-full flex flex-col items-center">
  {/* หัวข้อ */}
  <h3 className="text-gray-700 mb-2 text-center text-lg font-semibold">การแจกแจงคะแนนรวม</h3>

  <div className="flex w-4/5">
    {/* แกน Y ตัวเลข */}
    <div className="flex flex-col justify-end mr-2 text-sm text-gray-600 h-64 relative">
      {[...Array(maxCount + 1).keys()].reverse().map((num) => (
        <div key={num} className="h-[40px] flex items-center justify-end pr-1 mb-3">
          {num}
        </div>
      ))}
    </div>

    {/* ตัวกราฟ */}
    <div className="flex flex-col h-64 flex-1 mb-4">
      {/* แถบแท่ง */}
      <div className="flex-1 flex items-end space-x-2">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full rounded-t-md bg-gradient-to-r from-orange-500 to-purple-500 transition-all duration-300"
              style={{
                height: `${(item.count / maxCount) * 200}px`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* ค่าแกน X */}
      <div className="flex justify-between mt-2 px-2 text-sm text-gray-600">
        {chartData.map((item, index) => (
          <div key={index} className="flex-1 text-center">
            {item.score}
          </div>
        ))}
      </div>

      {/* คำอธิบายแกน X */}
      <div className="text-center text-sm text-gray-600 mt-1">
        คะแนนที่ได้รับ
      </div>
    </div>
  </div>

{/* ป้ายหมุนแนวตั้ง */}
<div className="absolute left-0 top-1/2 -translate-y-1/2 flex justify-center items-center w-30 mt-20 sm:w-40 sm:mt-20 ">
  <div className="transform -rotate-90 origin-left text-sm text-gray-600 whitespace-nowrap text-center">
    จำนวนผู้ตอบแบบทดสอบ
  </div>
</div>


</div>

                </div>
            </div>
        </div>
    )
}

export default QuizResultsSummary
