import React from 'react'
import '../InputBox/inputBox.css'
function inputBox({placeholder,type,setData}) {
  return (
    <div className='InputContainer'>
      <input type={type} placeholder={placeholder} className='inputElement'onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
}

export default inputBox
