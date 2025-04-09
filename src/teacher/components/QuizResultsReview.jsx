import { useState } from "react"
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Printer } from "lucide-react"
import { useNavigate } from "react-router-dom";

function QuizResultsReview() {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 2
    const [active, setActive] = useState("officialReview"); // ใช้สำหรับจัดการ active state
    const handleClick = (section) => {
        setActive(section); // กำหนด active เป็น section ที่คลิก
    };
    const quizResults = {
        title: "โฟลเชิร์ต อินอินโฟเชิร์ต อินอินเป็นข้อความช่วยเหลือในภาษาละติน",
        totalScore: 4,
        maxScore: 5,
        questions: [
            {
                id: 1,
                number: 1,
                text: "ตัวอย่างรหัสแพ็ง เตอะหรือบัวอาจารย์ ยืนเตียลแพงเหลียงโต๊ะ อมาตย์อริโตยโท้เอื้อนโตรกัวอาจิตภาค ตั้น ควรอมส้มพันธ์แทงพิไนเอิกอาจารย์ เวลาพฤกษกรรม โอยโตยเตียตรหัตถิมพิโนโนอัน หัตถาเตี๊ยะตุ๊กตุ๊กตุ๊กตอลลี่ ตีนเตียวอมเตอะเตียวอม",
                type: "multipleChoice",
                options: [
                    "ตอบโต้เอื้อเฟื้อบัวอาจารย์เตอะเตียงโต๊ะ ตีนโต๊ะควรอมส้มพันธ์แพงพิไนโต๊ะ",
                    "ตั้นตัวอมบุญไม้พลอมเตียวอมแอนโต๊ะน วิทย์ ตั้นตีโตรอมย์",
                    "เวลาตีนเตอะเตียวอัตถิเตียวอาจ ตีทตุ๊กตุ๊ก โต๊ะโตยเตียตรเตอะ โต๊ะโตรเตอะรสรีตีทพิไนธรรมาภิบาลเตอะเตร็ง",
                    "ตีนเตอะวิทย์ตุ๊กตุ๊กเตอะเตอร์เตอร์ รีทพิไนเตอะเตียวโต้เอื้อเฟื้อโตเตียวิทย์พิเศษ อวรีทพิเศษ สมาพิเศษรีตอลลี่ อนุรักษ์รีปปิ้น",
                ],
                userAnswer: 0, // Index of selected option (first option)
                //correctAnswer: 1, // Index of correct option (second option)
                score: 0,
                maxScore: 1,
                isCorrect: false,
            },
            {
                id: 2,
                number: 2,
                text: "ตัวอย่างรหัสแพ็ง เตอะหรือบัวอาจารย์ ยืนเตียลแพงเหลียงโต๊ะ อมาตย์อริโตยโท้เอื้อนโตรกัวอาจิตภาค ตั้น ควรอมส้มพันธ์แทงพิไนเอิกอาจารย์ เวลาพฤกษกรรม โอยโตยเตียตรหัตถิมพิโนโนอัน หัตถาเตี๊ยะตุ๊กตุ๊กตุ๊กตอลลี่ ตีนเตียวอมเตอะเตียวอม",
                type: "text",
                userAnswer: "ตีนเตอะวิทย์ตุ๊กตุ๊กเตอะเตอร์เตอร์ รีทพิไนเตอะเตียวโต้เอื้อเฟื้อโตเตียวิทย์พิเศษ อวรีทพิเศษ สมาพิเศษรีตอลลี่ อนุรักษ์รีปปิ้น",
                correctAnswer: "ตีนเตอะวิทย์ตุ๊กตุ๊กเตอะเตอร์เตอร์ รีทพิไนเตอะเตียวโต้เอื้อเฟื้อโตเตียวิทย์พิเศษ อวรีทพิเศษ สมาพิเศษรีตอลลี่ อนุรักษ์รีปปิ้น",
                score: 4,
                maxScore: 4,
                isCorrect: true,
            },
        ],
    }

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1))
    }

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }

    return (
        <div className="max-w-full mx-auto bg-gray-50 min-h-screen pb-8">
            {/* Header */}
            <div className="bg-white p-4 border-b">
                <div className="max-w-full mx-auto">
                    <div className="text-sm text-gray-600 mb-2">
                        ข้อสอบและแบบประเมิน {">"} {quizResults.title}
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
                {/* Official Review Header */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <button
                            className={`text-gray-600 font-medium cursor-pointer flex-1 text-center ${active === "officialReview" ? "text-orange-500" : ""
                                }`}
                            onClick={() => {
                                handleClick("officialReview");
                               
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
                                    navigate("/teacher/exams/QuizInterface/QuizResultsReview/QuizResultsSummary"); // ส่ง navigate ไปยังหน้าอื่นที่ต้องการ
                                }}
                            >
                                สรุปข้อมูล
                            </button>
                        </div>
                    </div>



                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">จำนวนผลลัพธ์ทั้งหมด : {totalPages}</span>
                            <div className="flex items-center">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    className={`p-1 ${currentPage === 1 ? "text-gray-300" : "text-gray-600"}`}
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <div className="flex justify-center items-center">
                                    <span className="text-sm mx-2">
                                        {currentPage} จาก {totalPages}
                                    </span>
                                </div>

                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className={`p-1 ${currentPage === totalPages ? "text-gray-300" : "text-gray-600"}`}
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <button className="text-gray-600">
                            <Printer className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Quiz Title and Score */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="font-medium">{quizResults.title}</div>
                        <div className="text-sm">
                            {quizResults.totalScore} จาก {quizResults.maxScore} คะแนน
                        </div>
                    </div>
                </div>

                {/* Question 1 */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex items-start gap-2 mb-4">
                        {quizResults.questions[0].isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm font-medium">
                                    {quizResults.questions[0].score} / {quizResults.questions[0].maxScore}
                                </span>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <span className="font-medium">{quizResults.questions[0].number}</span>
                                <p className="text-sm">{quizResults.questions[0].text}</p>
                            </div>
                            <div className="space-y-3 pl-6">
                                {quizResults.questions[0].options.map((option, index) => (
                                    <label key={index} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name={`question-${quizResults.questions[0].id}`}
                                            checked={index === quizResults.questions[0].userAnswer}
                                            readOnly
                                            className={`w-4 h-4 ${index === quizResults.questions[0].userAnswer && !quizResults.questions[0].isCorrect
                                                ? "accent-red-500"
                                                : index === quizResults.questions[0].correctAnswer
                                                    ? "accent-green-500"
                                                    : ""
                                                }`}
                                        />
                                        <span
                                            className={`text-sm ${index === quizResults.questions[0].userAnswer && !quizResults.questions[0].isCorrect
                                                ? "bg-red-100 p-2 rounded-md w-full"
                                                : index === quizResults.questions[0].correctAnswer
                                                    ? "bg-green-100 p-2 rounded-md w-full"
                                                    : ""
                                                }`}
                                        >
                                            {option}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex items-start gap-2 mb-4">
                        {quizResults.questions[1].isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm font-medium">
                                    {quizResults.questions[1].score} / {quizResults.questions[1].maxScore}
                                </span>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <span className="font-medium">{quizResults.questions[1].number}</span>
                                <p className="text-sm">{quizResults.questions[1].text}</p>
                            </div>
                            <div className="pl-6">
                                <div
                                    className={`border rounded-md p-3 text-sm ${quizResults.questions[1].isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                                        }`}
                                >
                                    {quizResults.questions[1].userAnswer}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-2 mt-6">
                    <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md"
                        onClick={() => navigate("/teacher/exams/QuizInterface")} 

                    >กลับ</button>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md">ยืนยัน</button>
                </div>
            </div>
        </div>
    )
}

export default QuizResultsReview
