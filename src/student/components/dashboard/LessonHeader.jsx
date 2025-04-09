import React from 'react'
import { useState } from "react"

function LessonHeader() {
    const [activeTab, setActiveTab] = useState("lessons")

    return (
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
    )
  }

export default LessonHeader