import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import LessonList from '../components/dashboard/LessonList';

const Dashboard = () => {
    const dataAttend = [
        { day: "Mon", attendance: 10 },
        { day: "Tue", attendance: 50 },
        { day: "Wed", attendance: 45 },
        { day: "Thu", attendance: 80 },
        { day: "Fri", attendance: 70 },
        { day: "Sat", attendance: 90 },
        { day: "Sun", attendance: 100 }
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
        { month: "Dec", highest: 70, lowest: 50 }
    ];

    return (
        <div className="p-6 space-y-6">
            {/* Section: กราฟ */}
            <div className="grid grid-cols-10 gap-3">
                {/* กราฟสถิติการเข้าเรียน (30%) */}
                <div className="bg-white p-6 rounded-lg shadow-md col-span-4">
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

                {/* กราฟสถิติคะแนน (70%) */}
                <div className="bg-white p-6 rounded-lg shadow-md col-span-6">
                    <h2 className="text-lg font-semibold mb-4">สถิติคะแนน</h2>
                    <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={scoreData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend align="right" verticalAlign="top" />

                            {/* กราฟแท่ง */}
                            <Bar dataKey="highest" fill="#8a2be2" name="คะแนนสูงสุด" radius={[10, 10, 0, 0]} barSize={10} />
                            <Bar dataKey="lowest" fill="#ff4500" name="คะแนนต่ำสุด" radius={[10, 10, 0, 0]} barSize={10}/>

                            
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <LessonList/>
        </div>
    );
};

export default Dashboard;