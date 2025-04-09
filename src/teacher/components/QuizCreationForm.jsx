import { useState } from "react"
import { Plus, X, ImageIcon, ChevronDown, CircleCheck, Trash2, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function QuizCreationForm() {
    const navigate = useNavigate();
    const [questionTitle, setQuestionTitle] = useState('');

    const showAlert = (action) => {
        let titleText = '';
        let Text = '';

        // เปลี่ยนข้อความตาม action
        if (action === 'add') {
            titleText = 'เพิ่มคำถามสำเร็จ';
            
        }else if(action === 'addNew'){
            titleText = 'เพิ่มคำถามใหม่สำเร็จ';

        }else if(action === 'insert'){
            titleText = 'สร้างแบบทดสอบใหม่สำเร็จ';
            Text = 'นำทางไปยังหน้าแสดงข้อสอบและแบบประเมิน';

        }
        
        Swal.fire({
            title: titleText,
            text: Text,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        });
    };

    const [quizData, setQuizData] = useState({
        title: "",
        description: "",
        subject: "",
        timeLimit: {
            enabled: true,
            hours: 0,
            minutes: 30,
        },
    })
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(''); // ตัวแปรเก็บคะแนนที่ระบุ
    const handleSubmit = () => {
        if (score) {
            setShowAnswer(false);  // เมื่อกด "ตกลง" จะซ่อนฟอร์มและแสดงปุ่ม "เฉลยคำตอบ"
        } else {

        }
    };

    const addOption = () => {
        setNewQuestion((prev) => ({
            ...prev,
            options: [...prev.options, ""],
        }));
    };

    const [currentView, setCurrentView] = useState("edit") // "edit" or "preview"
    const [questionType, setQuestionType] = useState('multipleChoice');

    const [newQuestion, setNewQuestion] = useState({
        text: "",
        options: [""],
        correctAnswer: 0,
    })
    const handleQuestionTypeChange = (e) => {
        setQuestionType(e.target.value);
        // ถ้าเลือก "text" ให้รีเซ็ตตัวเลือก (options)
        if (e.target.value === 'text') {
            setNewQuestion((prev) => ({
                ...prev,
                options: [], // รีเซ็ตตัวเลือกเมื่อเป็นข้อสอบแบบเขียนตอบ
                correctAnswer: null, // รีเซ็ตคำตอบที่ถูกต้อง
            }));
        } else {
            // ถ้าเลือก "multipleChoice" ให้รีเซ็ตตัวเลือกให้มีแค่ตัวเลือกเดียว
            setNewQuestion((prev) => ({
                ...prev,
                options: [''],
                correctAnswer: null,
            }));
        }
    };
    const handleQuizDataChange = (e) => {
        const { name, value } = e.target
        setQuizData({
            ...quizData,
            [name]: value,
        })
    }

    const handleTimeChange = (e) => {
        const { name, value } = e.target
        setQuizData({
            ...quizData,
            timeLimit: {
                ...quizData.timeLimit,
                [name]: Number.parseInt(value, 10) || 0,
            },
        })
    }

    const toggleTimeLimit = (enabled) => {
        setQuizData({
            ...quizData,
            timeLimit: {
                ...quizData.timeLimit,
                enabled,
            },
        })
    }





    return (
        <div className="max-w-full mx-auto bg-gray-50 min-h-screen pb-8">
            {/* Header */}
            <div className="bg-white p-4 border-b">
                <div className="max-w-full mx-auto">
                    <div className="text-sm text-gray-600 mb-2">ข้อสอบและแบบประเมิน {">"} เพิ่มข้อสอบและแบบประเมิน</div>
                    <div className="flex gap-4">
                        <button className="bg-orange-500 text-white px-4 py-1.5 rounded-md text-sm">คำถาม</button>

                    </div>
                </div>
            </div>

            {/* Quiz Form */}
            <div className="max-w-full mx-auto p-4">
                {currentView === "edit" ? (
                    <>
                        {/* Quiz Details */}
                        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium mb-1">
                                    ชื่อข้อสอบ
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={quizData.title}
                                    onChange={handleQuizDataChange}
                                    className="w-full border rounded-md p-2 text-sm"
                                    placeholder="ชื่อข้อสอบ"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium mb-1">
                                    รายละเอียด
                                </label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={quizData.description}
                                    onChange={handleQuizDataChange}
                                    className="w-full border rounded-md p-2 text-sm"
                                    placeholder="รายละเอียด"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                                        รายวิชา
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={quizData.subject}
                                            onChange={handleQuizDataChange}
                                            className="w-full border rounded-md p-2 text-sm appearance-none"
                                        >
                                            <option value="">รายวิชา</option>
                                            <option value="รายวิชา1">รายวิชา1</option>
                                            <option value="รายวิชา2">รายวิชา2</option>
                                            <option value="รายวิชา3">รายวิชา3</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">กำหนดเวลาทำข้อสอบ</label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="timeEnabled"
                                                checked={quizData.timeLimit.enabled}
                                                onChange={() => toggleTimeLimit(true)}
                                                className="w-4 h-4 accent-green-500"
                                            />
                                            <span className="text-sm">กำหนด</span>
                                        </label>

                                        <div className="flex items-center gap-1">
                                            <input
                                                type="number"
                                                name="hours"
                                                value={quizData.timeLimit.hours}
                                                onChange={handleTimeChange}
                                                className="w-12 border rounded-md p-1 text-sm text-center"
                                                min="0"
                                                disabled={!quizData.timeLimit.enabled}
                                            />
                                            <span className="text-sm">ชั่วโมง</span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <input
                                                type="number"
                                                name="minutes"
                                                value={quizData.timeLimit.minutes}
                                                onChange={handleTimeChange}
                                                className="w-12 border rounded-md p-1 text-sm text-center"
                                                min="0"
                                                max="59"
                                                disabled={!quizData.timeLimit.enabled}
                                            />
                                            <span className="text-sm">นาที</span>
                                        </div>

                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="timeEnabled"
                                                checked={!quizData.timeLimit.enabled}
                                                onChange={() => toggleTimeLimit(false)}
                                                className="w-4 h-4 accent-green-500"
                                            />
                                            <span className="text-sm">ไม่กำหนด</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Question Editor */}
                        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-orange-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="questionTitle" className="block text-sm font-medium mb-1">
                                        หัวข้อคำถาม
                                    </label>
                                    <input
                                        type="text"
                                        id="questionTitle"
                                        value={questionTitle}
                                        onChange={(e) => setQuestionTitle(e.target.value)}
                                        className="w-full border rounded-md p-2 text-sm"
                                        placeholder="หัวข้อคำถาม"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="questionType" className="block text-sm font-medium mb-1">
                                        ตัวเลือกข้อสอบ
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="questionType"
                                            value={questionType}
                                            onChange={handleQuestionTypeChange}
                                            className="w-full border rounded-md p-2 text-sm appearance-none"
                                        >
                                            <option value="multipleChoice">ข้อสอบแบบตัวเลือก</option>
                                            <option value="text">ข้อสอบแบบเขียนตอบ</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    </div>
                                </div>
                            </div>

                            {/* แสดงตัวเลือกหรือฟอร์มเขียนคำตอบตามประเภทที่เลือก */}
                            {questionType === 'multipleChoice' ? (
                                <div className="mb-4">
                                    {newQuestion.options.map((option, index) => (
                                        <div key={index} className="flex items-center gap-2 mb-2">
                                            <input
                                                type="radio"
                                                name="option"
                                                className="w-4 h-4 accent-green-500"
                                                disabled={!showAnswer}
                                                checked={newQuestion.correctAnswer === index}
                                                onChange={() => {
                                                    if (showAnswer) {
                                                        setNewQuestion((prev) => ({
                                                            ...prev,
                                                            correctAnswer: index,
                                                        }));
                                                    }
                                                }}
                                            />
                                            <input
                                                type="text"
                                                value={option}
                                                onChange={(e) => {
                                                    const updatedOptions = [...newQuestion.options];
                                                    updatedOptions[index] = e.target.value;
                                                    setNewQuestion((prev) => ({
                                                        ...prev,
                                                        options: updatedOptions,
                                                    }));
                                                }}
                                                className={`flex-1 rounded-md p-2 text-sm ${newQuestion.correctAnswer === index ? 'bg-green-100' : ''}`}
                                                placeholder={`ตัวเลือกที่ ${index + 1}`}
                                            />
                                            <button className="p-1">
                                                <ImageIcon className="w-5 h-5 text-gray-500" />
                                            </button>
                                            <button
                                                className="p-1"
                                                onClick={() => {
                                                    const updatedOptions = newQuestion.options.filter((_, i) => i !== index);
                                                    setNewQuestion((prev) => ({
                                                        ...prev,
                                                        options: updatedOptions,
                                                    }));
                                                }}
                                            >
                                                <X className="w-5 h-5 text-gray-500" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // ถ้าเป็นข้อสอบแบบเขียนตอบ
                                <div className="mb-4">
                                    <textarea
                                        value={newQuestion.questionText}
                                        onChange={(e) =>
                                            setNewQuestion((prev) => ({
                                                ...prev,
                                                questionText: e.target.value,
                                            }))
                                        }
                                        className="w-full border rounded-md p-2 text-sm"
                                        placeholder="กรุณาเขียนคำตอบ"
                                    />
                                </div>
                            )}



{questionType === 'multipleChoice' && (
    <div className="flex items-center justify-start mb-4">
        <button
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 text-base font-medium"
            onClick={addOption}
        >
            <Plus className="w-6 h-6" />
            <span>เพิ่มตัวเลือก</span>
        </button>
    </div>
)}

                            <div className="border-t pt-4 flex justify-between items-center">
                                {!showAnswer && ( // แสดงปุ่ม "เฉลยคำตอบ" และตัวเลือก
                                    <>
                                        <button
                                            className="flex items-center gap-1 text-orange-500 border border-orange-500 rounded-md px-3 py-1 text-sm"
                                            onClick={() => setShowAnswer(true)} // เมื่อกดปุ่มเฉลยคำตอบ
                                        >
                                            <CircleCheck className="w-4 h-4" />
                                            <span>เฉลยคำตอบ</span>
                                        </button>

                                        {/* แสดงตัวเลือกเมื่อเป็นข้อสอบแบบตัวเลือก */}
                                        {questionType === 'multipleChoice' && (
                                            <div className="flex items-center gap-2">
                                                <label className="flex items-center gap-2">
                                                    <input type="radio" name="answerKey" className="w-4 h-4 accent-green-500" />
                                                    <span className="text-sm">คลิกเพื่อสลับตัวเลือก</span>
                                                </label>
                                                <button className="p-1">
                                                    <Trash2 className="w-5 h-5 text-gray-500" />
                                                </button>
                                            </div>


                                        )}
                                    </>
                                )}

                                {showAnswer && ( // เมื่อกดปุ่ม "เฉลยคำตอบ" จะแสดงฟอร์มระบุคะแนน
                                    <>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={score}
                                                onChange={(e) => setScore(e.target.value)} // เมื่อมีการพิมพ์คะแนน
                                                placeholder="ระบุคะแนน"
                                                className="flex-1 border border-gray-300 rounded-md px-3 py-1 text-sm"
                                            />
                                        </div>
                                        <button
                                            onClick={() => {
                                                showAlert("add");  // เรียกฟังก์ชัน showAlert
                                                handleSubmit();
                                            }}
                                            className="bg-orange-500 rounded-md flex items-center gap-1 text-white px-3 py-1 text-sm ml-auto"
                                        >
                                            ตกลง
                                        </button>
                                    </>
                                )}
                            </div>

                        </div>
                    </>
                ) : (
                    // Preview Mode - Question Display
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">

                    </div>
                )}

                {/* Bottom Navigation */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => {
                            // รีเซ็ตค่าทั้งหมด
                            setNewQuestion({
                                questionText: '',
                                options: [''],
                                correctAnswer: null,
                            });

                            setQuestionTitle(''); // รีเซ็ตหัวข้อคำถาม
                            showAlert("addNew");

                        }}
                        className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-1"
                    >
                        <Plus className="w-4 h-4" />
                        <span>เพิ่มคำถาม</span>
                    </button>




                    <div className="flex gap-2">
                        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md"
                            onClick={() => navigate("/teacher/exams")} 

                        >ยกเลิก</button>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-md flex items-center gap-1"
                            onClick={() => {
                             
                                
                                showAlert("insert"); 
                                navigate("/teacher/exams");
                            }}
                        >
                            <span>เผยแพร่บทเรียน</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCreationForm
