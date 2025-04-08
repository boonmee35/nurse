import React, { useState } from 'react';
import { ChevronDown, Edit, Trash2 } from 'lucide-react';

const Users = () => {
  const [selectedRole, setSelectedRole] = useState('ทั้งหมด');
  
  const users = [
    { id: "#12345", name: "สมชาย วัฒนเสถียร", email: "ABC@gmail.com", phone: "000-000-0000", role: "ยังไม่ระบุ" },
    { id: "#12345", name: "สาวิ ติมาศพงษ์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "จิตรภูมิ พันทิพย์โกเมน", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "ไพโรจ อนุศาสตร์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ยังไม่ระบุ" },
    { id: "#12345", name: "ดลลยา ติมาศพงษ์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้เรียน" },
    { id: "#12345", name: "สันติชัย อิงคราวิน", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "สมชาย วัฒนเสถียร", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "สาวิ ติมาศพงษ์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "จิตรภูมิ พันทิพย์โกเมน", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้เรียน" },
    { id: "#12345", name: "ไพโรจ อนุศาสตร์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "ดลลยา ติมาศพงษ์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ยังไม่ระบุ" },
    { id: "#12345", name: "สันติชัย อิงคราวิน", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้เรียน" },
    { id: "#12345", name: "สมชาย วัฒนเสถียร", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "สาวิ ติมาศพงษ์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้เรียน" },
    { id: "#12345", name: "จิตรภูมิ พันทิพย์โกเมน", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "ไพโรจ อนุศาสตร์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้เรียน" },
    { id: "#12345", name: "ดลลยา ติมาศพงษ์", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้สอน" },
    { id: "#12345", name: "สันติชัย อิงคราวิน", email: "ABC@gmail.com", phone: "000-000-0000", role: "ผู้เรียน" },
  ];

  return (
    <>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h2 className="text-lg font-medium">ผู้ใช้งาน</h2>
          </div>

          {/* User Table Container */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Role Dropdown and Filters */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative w-40">
                <select 
                  className="w-full appearance-none px-4 py-2 pr-8 border border-gray-300 rounded bg-white shadow-sm"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="ทั้งหมด">ทั้งหมด</option>
                  <option value="ผู้สอน">ผู้สอน</option>
                  <option value="ผู้เรียน">ผู้เรียน</option>
                </select>
                <ChevronDown 
                  size={16} 
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" 
                />
              </div>
            </div>

            {/* User Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-red-500 to-purple-500 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      ID User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      ชื่อ
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      E-mail
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      โทรศัพท์
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        สิทธิ์ผู้ใช้
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                      จัดการ
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        <div className="flex justify-center space-x-2">
                          <button className="text-orange-500 hover:text-orange-700">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Users;