import React from "react"
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

import './customCard.css'

const CustomCard = ({name, tagValue, tagName, delta, icon, style, deltaStatus}) => {

  return(
    <div className={`cardContainer ${style}`}>
      <div className="usernameContainer">
        <img className="icon" src={icon} alt="facebook icon" />
        <p className="username">{name}</p>
      </div>
      <div className="mainInfo"> 
        <div className="mainData">{tagValue}</div> 
        {tagName}
      </div>
      <div className={`delta ${deltaStatus}`}>
        {deltaStatus === "good"? <IoMdArrowDropup/> : <IoMdArrowDropdown/>} {delta} Today
      </div>
    </div>
  )
 }

 export default CustomCard