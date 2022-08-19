import CustomTag from '../CustomTag/CustomTag'
import facebookIcon from '../../assets/icons/icon-facebook.svg'
import twitterIcon from '../../assets/icons/icon-twitter.svg'
import instagramIcon from '../../assets/icons/icon-instagram.svg'
import youtubeIcon from '../../assets/icons/icon-youtube.svg'

import './tagBoard.css'
import TagHeader from '../TagboardHeader/TagboardHeader'

const MainDashboard = () => {
  return(
    <div className="TagBoard">
      <TagHeader/>
      <div className="tagsDiv">
        <div className="cardTag"> <CustomTag icon={facebookIcon} tagValue="87" tagName="Page Views" delta="3%" deltaStatus="good" /> </div>
        <div className="cardTag"> <CustomTag icon={facebookIcon} tagValue="52" tagName="Likes" delta="2%" deltaStatus="bad" /> </div>
        <div className="cardTag"> <CustomTag icon={instagramIcon} tagValue="5462" tagName="Likes" delta="2257%" deltaStatus="good" /> </div>
        <div className="cardTag"> <CustomTag icon={instagramIcon} tagValue="52k" tagName="Profile Views" delta="1375%" deltaStatus="good" /> </div>
        <div className="cardTag"> <CustomTag icon={twitterIcon} tagValue="117" tagName="Retweets" delta="303%" deltaStatus="good" /> </div>
        <div className="cardTag"> <CustomTag icon={twitterIcon} tagValue="507" tagName="Likes" delta="553%" deltaStatus="good" /> </div>
        <div className="cardTag"> <CustomTag icon={youtubeIcon} tagValue="107" tagName="Likes" delta="19%" deltaStatus="bad" /> </div>
        <div className="cardTag"> <CustomTag icon={youtubeIcon} tagValue="1407" tagName="Total Views" delta="12%" deltaStatus="bad" /> </div>
      </div>
    </div>
  )
}

export default MainDashboard