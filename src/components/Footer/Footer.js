import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Footer/Footer.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

function Footer() {
  return (
    <div className='footer'>
      <NavLink to={'/home'} className="Home_Link"><HomeIcon/></NavLink>
      <NavLink to={'/user'} className="user_Link"><PersonIcon/></NavLink>
    </div>
  )
}

export default Footer
