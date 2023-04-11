import React,{useContext, useState} from 'react'
import DataStore from './contextApi/ContextApi'
import { useLocation, useNavigate } from 'react-router-dom'

const EditData = () => {
  const navi=useNavigate()
  const StoreData=useContext(DataStore)
  const locateId=useLocation().state.ind
  const [updateData]=useState({})
  const handlechange=(e)=>{
    updateData[e.target.name]=e.target.value
  }
  const handleSave=()=>{
    StoreData.key1[locateId]=updateData;
    navi('/students')
  }
  return (
  <>
    <div className='AddStudent'>
    <div className='nameBox'>
      <label htmlFor='name'>Name:</label>
      <br/>
      <input type='text' name='name' id='name' placeholder={StoreData.key1[locateId].name} onChange={handlechange}/>
    </div>
    <div className='ageBox'>
      <label htmlFor='age'>Age:</label>
      <br/>
      <input type='number' name='age' id='age' placeholder={StoreData.key1[locateId].age} onChange={handlechange}/>
    </div>
    <div className='courseBox'>
      <label htmlFor='course'>Course:</label>
      <br/>
      <input type='text' name='course' id='course' placeholder={StoreData.key1[locateId].course} onChange={handlechange}/>
    </div>
    <div className='batchBox'>
      <label htmlFor='batch'>Batch:</label>
      <br/>
      <input type='text' name='batch' id='batch' placeholder={StoreData.key1[locateId].batch} onChange={handlechange}/>
    </div>
    </div>
    <div className='btnBox'>
    <button onClick={()=>{navi('/students')}}>Cancel</button>
    <button onClick={handleSave}>Save</button>
    </div>
  </>
  )
}

export default EditData