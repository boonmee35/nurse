import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import HomeStudent from './student/Home'
import HomeTeacher from './teacher/Home'
import HomeAdmin from './admin/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/student/*" element={<HomeStudent/>} />
        <Route path="/teacher/*" element={<HomeTeacher/>} />
        <Route path="/admin/*" element={<HomeAdmin/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App