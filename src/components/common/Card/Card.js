import React from 'react'
import '../Card/Card.css'
function Card({EMPId,EmpName,Dob,role}) {
  return (
    <div className='CardContainer'>
        <p className='id'>{EMPId}</p>
      <div className="card">
        <div className="info">
            <span>EMP ID</span>
            <span className='colon'>:</span>
            <span>{EMPId}</span>
        </div>
        <div className="info">
            <span>Name</span>
            <span className='colon'>:</span>
            <span>{EmpName}</span>
        </div>
        <div className="info">
            <span>DOB</span>
            <span className='colon'>:</span>
            <span className='dob'>{Dob}</span>
        </div>
        <div className="info">
            <span>Role</span>
            <span className='colon'>:</span>
            <span className='role'>{role}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
