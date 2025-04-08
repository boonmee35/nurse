import React from 'react'
import { useState } from "react"
import { Book, Clock } from "lucide-react"

function LessonItem({ course }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <div
        className={`flex gap-3 md:gap-4 transition-all duration-200 p-2 rounded-lg ${isHovered ? "bg-gray-50" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={course.thumbnail || `/placeholder.svg?height=80&width=80`}
            alt={`${course.subject} thumbnail`}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
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
              <div className="flex items-center gap-2">
                <div className="w-16 sm:w-20 md:w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs sm:text-sm">{course.progress}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default LessonItem