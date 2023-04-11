import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataStore from './contextApi/ContextApi'

const AddStudent = () => {
  const navi=useNavigate()
  const [addData]=useState({})
  const StoreData=useContext(DataStore)
  const handleChange=(e)=>{
    addData[e.target.name]=e.target.value
  }
  const handleAdd=()=>{
    if(addData.name && addData.age && addData.course && addData.batch){
      StoreData.key1.push(addData)
      navi('/students')
    }
    else{alert('All Fields are Required')}
  }
  return (
  <>
    <div className='AddStudent'>
    <div className='nameBox'>
      <label htmlFor='name'>Name:</label>
      <br/>
      <input type='text' name='name' id='name' onChange={handleChange}/>
    </div>
    <div className='ageBox'>
      <label htmlFor='age'>Age:</label>
      <br/>
      <input type='number' name='age' id='age' onChange={handleChange}/>
    </div>
    <div className='courseBox'>
      <label htmlFor='course'>Course:</label>
      <br/>
      <input type='text' name='course' id='course' onChange={handleChange}/>
    </div>
    <div className='batchBox'>
      <label htmlFor='batch'>Batch:</label>
      <br/>
      <input type='text' name='batch' id='batch' onChange={handleChange}/>
    </div>
    </div>
    <div className='btnBox'>
    <button onClick={()=>{navi('/students')}}>Cancel</button>
    <button onClick={handleAdd}>Add</button>
    </div>
    </>
  )
}

export default AddStudent