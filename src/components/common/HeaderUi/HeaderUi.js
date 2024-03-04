import React from 'react'
import '../../Home/Home.css'
import CallLogo from '../../../images/callLogo.png'
import MoptroLogo from '../../../images/moptrologo.png'
function HeaderUi() {
  return (
    <div>
      <div className="callLogo">
      <img src={CallLogo} alt="callLogo" className='CallLogoImage'/>
    </div>
    <div className="moptroLogo">
      <div className="badge">4</div>
      <img src={MoptroLogo} alt="mopytoLogo" />
    </div>
    </div>
  )
}

export default HeaderUi
