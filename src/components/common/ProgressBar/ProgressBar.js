import React from 'react'
import '../ProgressBar/ProgressBar.css'
function ProgressBar({range,text}) {
  return (
    <div className='progress'>
        <div className="progress_info">
            <span className='ProgessText'>{text}</span>
            <span className='rangePercent'>{range}%</span>
        </div>
      <div className="slider" style={{width:`${range}px`}}></div>
    </div>
  )
}

export default ProgressBar
