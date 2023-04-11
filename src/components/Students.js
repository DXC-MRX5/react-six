import React, { useContext } from 'react'
import DataStore from './contextApi/ContextApi'
import { Link, useNavigate } from 'react-router-dom'

const Students = () => {
  const navi=useNavigate()
  const StoreData=useContext(DataStore)
  return (
    <div className='Students'>
      <div className='heading'>
        <h1>Students Details</h1>
        <button onClick={()=>{navi('/addstudent')}}>Add new Student</button>
      </div>
      <div className='table-cntnr'>
            <table>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {StoreData.key1.map((info,ind)=>{
                  return(
                    <tr key={ind}>
                      <td>{info.name}</td>
                      <td>{info.age}</td>
                      <td>{info.course}</td>
                      <td>{info.batch}</td>
                      <td><Link to='/edit' state={{ind}} className='editLink'>Edit</Link></td>
                    </tr>
                  )
                })}
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default Students