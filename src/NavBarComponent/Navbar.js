import React from 'react'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import Home from '../Component/Home'
import Student from '../Component/Student'
import ContactUs from '../Component/ContactUs'
function Navbar() {
  return (
    <>
      <BrowserRouter>
      <div className='navbar'>
      <NavLink to="/" className="removeLine" style={({isActive})=>{return isActive?{color:"pink"}:{color:"white"}}} >Home</NavLink>
      <NavLink to="/student" className="removeLine" style={({isActive})=>{return isActive?{color:"pink"}:{color:"white"}}}>Students</NavLink>
      <NavLink to="/contact" className="removeLine" style={({isActive})=>{return isActive?{color:"pink"}:{color:"white"}}}>ContactUs</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={<Student/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navbar
