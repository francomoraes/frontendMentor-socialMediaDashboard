import CustomCard from '../CustomCard/CustomCard'
import facebookIcon from '../../assets/icons/icon-facebook.svg'
import twitterIcon from '../../assets/icons/icon-twitter.svg'
import instagramIcon from '../../assets/icons/icon-instagram.svg'
import youtubeIcon from '../../assets/icons/icon-youtube.svg'

import './mainDashboard.css'
import Header from '../DashboardHeader/DashboardHeader'

const MainDashboard = () => {
  return(
    <div className="mainDashboard">
      <Header/>
      <div className="dashboardContainer">
        <div className="card"> <CustomCard name="@nathanf" icon={facebookIcon} tagValue="1987" tagName="FOLLOWERS" delta="12" deltaStatus="good" style="facebook" /> </div>
        <div className="card"> <CustomCard name="@nathanf" icon={twitterIcon} tagValue="1044" tagName="FOLLOWERS" delta="99" deltaStatus="good" style="twitter" /> </div>
        <div className="card"> <CustomCard name="@realnathanf" icon={instagramIcon} tagValue="11k" tagName="FOLLOWERS" delta="1099" deltaStatus="good" style="instagram" /> </div>
        <div className="card"> <CustomCard name="Nathan F." icon={youtubeIcon} tagValue="8239" tagName="SUBSCRIBERS" delta="144" deltaStatus="bad" style="youtube" /> </div>
    </div>
    </div>
  )
}

export default MainDashboard