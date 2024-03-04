import React, { useState } from 'react'
import logo1 from '../../images/logo1.png'
import '../Dashboard/Dashboard.css'
import Button from '../common/Button/Button'
import InputBox from '../common/InputBox/inputBox'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
  const navigate = useNavigate(null)
  const [email,setemail] = useState('')
  const [pass,setpass] = useState('')
  function handleLogin(){
     if(!email || !pass){
      alert('please  enter all fields');
    }else{
      navigate('/home')
     }
  }
  
  return (
    <div className='DashboadContainer'>
      <img src={logo1} alt="logo" className='logo1Images'/>
      <p className='TitleText'>We are Electric</p>
      <div className="InputBtnContainer">
       <InputBox placeholder={"E-mail"} type={'email'} setData={setemail}/>
       <InputBox placeholder={"Password"} type={'password'} setData={setpass}/>
       <div onClick={handleLogin}>
       <Button text={"Login"} />
       </div>
      </div>
      <p className='TitleText'>Forget Password ?</p>
    </div>
  )
}

export default Dashboard
