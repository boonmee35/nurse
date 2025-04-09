
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Clock } from "lucide-react"
import Swal from "sweetalert2";

function QuizInterface() {
    const navigate = useNavigate();
    const showAlert = (action) => {
        let titleText = '';
        let Text = '';
    
        // เปลี่ยนข้อความตาม action
        if (action === 'edit') {
            titleText = 'แก้ไขขอมูลเรียบร้อย';
            Text = 'นำทางไปยังหน้า แสดง สอบและแบบประเมิน';
        }
    
        Swal.fire({
            title: titleText,
            text: Text,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        });
    };

    const [answers, setAnswers] = useState({
        question1: "",
        question2: "",
    })

    const handleRadioChange = (e) => {
        setAnswers({
            ...answers,
            question1: e.target.value,
        })
    }

    const handleTextChange = (e) => {
        setAnswers({
            ...answers,
            question2: e.target.value,
        })
    }

    return (
        <div className="max-w-full bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white p-4 border-b">
                <div className="max-w-full mx-auto">
                    <div className="text-sm text-gray-600 mb-2">
                        ข้อสอบและแบบประเมิน {">"} โฟลเชิร์ต อินอินโฟเชิร์ต อินอินเป็นข้อความช่วยเหลือในภาษาละติน
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-orange-500 text-white px-4 py-1.5 rounded-md text-sm">กำลัง</button>
                        <div className="flex items-center gap-1 text-sm"
                        onClick={() => navigate("/teacher/exams/QuizInterface/QuizResultsReview")} // ส่ง latestId ไป AddLessonOverview

                        >
                            <span>การตอบกลับ</span>
                            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">2</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quiz Content */}
            <div className="max-w-full mx-auto p-4">
                {/* Quiz Title and Info */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h1 className="font-medium mb-2">โฟลเชิร์ต อินอินโฟเชิร์ต อินอินเป็นข้อความช่วยเหลือในภาษาละติน</h1>
                    <p className="text-sm text-gray-600 mb-2">
                        สามารถวัดโดยแบบทดสอบคุณ โฟลเดอร์ ที่อปุกรณ์ของวัสดุ แผนแบบแบบไม่ระบุเวลาเรียกเวลาร้องขอ วัดอท่าวัดกลาวาดลายหรือลออม
                        ย่อยถือทดสอบวงศาติดทีเป็นไอ ทุนทพัฒน์โปรโมเอตรจักรจับวัสดีเลขา ก่อนมาอ่างทุกๆกับย่อม
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">รายวิชา : </span>
                            <span className="text-sm">รายวิชา1</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-gray-500" />
                            <span className="text-sm text-gray-500">1 ชั่วโมง 30 นาที</span>
                        </div>
                    </div>
                </div>

                {/* Question 1 */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex gap-2 mb-4">
                        <span className="font-medium">1</span>
                        <p className="text-sm">
                            ตัวอย่างรหัสแพ็ง เตอะหรือบัวอาจารย์ ยืนเตียลแพงเหลียงโต๊ะ อมาตย์อริโตยโท้เอื้อนโตรกัวอาจิตภาค ตั้น ควรอมส้มพันธ์แทงพิไนเอิกอาจารย์
                            เวลาพฤกษกรรม โอยโตยเตียตรหัตถิมพิโนโนอัน หัตถาเตี๊ยะตุ๊กตุ๊กตุ๊กตอลลี่ ตีนเตียวอมเตอะเตียวอม
                        </p>
                    </div>
                    <div className="space-y-3 pl-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="question1"
                                value="option1"
                                checked={answers.question1 === "option1"}
                                onChange={handleRadioChange}
                                className="w-4 h-4"
                            />
                            <span className="text-sm">ตอบโต้เอื้อเฟื้อบัวอาจารย์เตอะเตียงโต๊ะ ตีนโต๊ะควรอมส้มพันธ์แพงพิไนโต๊ะ</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="question1"
                                value="option2"
                                checked={answers.question1 === "option2"}
                                onChange={handleRadioChange}
                                className="w-4 h-4"
                            />
                            <span className="text-sm">ตั้นตัวอมบุญไม้พลอมเตียวอมแอนโต๊ะน วิทย์ ตั้นตีโตรอมย์</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="question1"
                                value="option3"
                                checked={answers.question1 === "option3"}
                                onChange={handleRadioChange}
                                className="w-4 h-4"
                            />
                            <span className="text-sm">
                                เวลาตีนเตอะเตียวอัตถิเตียวอาจ ตีทตุ๊กตุ๊ก โต๊ะโตยเตียตรเตอะ โต๊ะโตรเตอะรสรีตีทพิไนธรรมาภิบาลเตอะเตร็ง
                            </span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="question1"
                                value="option4"
                                checked={answers.question1 === "option4"}
                                onChange={handleRadioChange}
                                className="w-4 h-4"
                            />
                            <span className="text-sm">
                                ตีนเตอะวิทย์ตุ๊กตุ๊กเตอะเตอร์เตอร์ รีทพิไนเตอะเตียวโต้เอื้อเฟื้อโตเตียวิทย์พิเศษ อวรีทพิเศษ สมาพิเศษรีตอลลี่ อนุรักษ์รีปปิ้น
                            </span>
                        </label>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex gap-2 mb-4">
                        <span className="font-medium">2</span>
                        <p className="text-sm">
                            ตัวอย่างรหัสแพ็ง เตอะหรือบัวอาจารย์ ยืนเตียลแพงเหลียงโต๊ะ อมาตย์อริโตยโท้เอื้อนโตรกัวอาจิตภาค ตั้น ควรอมส้มพันธ์แทงพิไนเอิกอาจารย์
                            เวลาพฤกษกรรม โอยโตยเตียตรหัตถิมพิโนโนอัน หัตถาเตี๊ยะตุ๊กตุ๊กตุ๊กตอลลี่ ตีนเตียวอมเตอะเตียวอม
                        </p>
                    </div>
                    <div className="pl-6">
                        <textarea
                            className="w-full border rounded-md p-2 text-sm min-h-[100px]"
                            placeholder="กำลัง"
                            value={answers.question2}
                            onChange={handleTextChange}
                        ></textarea>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-2 mt-6">
                    <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md flex items-center gap-1"
                              onClick={() => navigate("/teacher/exams")} // ส่ง latestId ไป AddLessonOverview

                    >
                        กลับ
                    </button>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md" onClick={() => {
                            showAlert("edit"); 
                            navigate("/teacher/exams");
                        }}>แก้ไข</button>
                </div>
            </div>
        </div>
    )
}

export default QuizInterface
