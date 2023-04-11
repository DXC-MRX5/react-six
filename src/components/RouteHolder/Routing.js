import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Students from '../Students'
import Contact from '../Contact'
import EditData from '../EditData'
import AddStudent from '../AddStudent'
import DataStore from '../contextApi/ContextApi'

const Routing = () => {
  const [data,setData]=useState([
    {name:'John', age: 24, course:'MERN', batch:'October'},
    {name:'Doe', age: 25, course:'MERN', batch:'November'},
    {name:'BIden', age: 26, course:'MERN', batch:'September'},
    {name:'Barar', age: 22, course:'MERN', batch:'September'},
    {name:'Christ', age: 23, course:'MERN', batch:'October'},
    {name:'Elent', age: 24, course:'MERN', batch:'November'}
  ])
  return (
    <DataStore.Provider value={{key1:data, key2:setData}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/edit' element={<EditData/>}/>
      <Route path='/addstudent' element={<AddStudent/>}/>
    </Routes>
    </DataStore.Provider>
    )
}

export default Routing