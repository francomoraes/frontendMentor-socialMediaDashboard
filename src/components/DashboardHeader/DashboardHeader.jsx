import './dashboardHeader.css'
import Switch from '@mui/material/Switch';

const Header = () => {
  return(
    <div className='header'>
      <div className="headerContainer">
        <h1 className='title'>Social Media Dashboard</h1>
        <p className='subtitle'>Total Followers: 23,004</p>
      </div>
      <div className="switch"><Switch /></div>
    </div>
  )
}

export default Header