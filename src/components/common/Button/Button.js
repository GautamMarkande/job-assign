import React from 'react'
import '../Button/Button.css'
function Button({text}) {
  return (
    <div className='btn-container'>
      <button className='btn'>{text}</button>
    </div>
  )
}

export default Button
