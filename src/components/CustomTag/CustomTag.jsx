import React from "react"
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

import './customTag.css'

const CustomTag = ({tagValue, tagName, delta, icon, deltaStatus}) => {

  return(
    <div className="tagContainer">
      <div className="mainInfoTag"> 
        {tagName}
        <div className="mainDataTag">{tagValue}</div> 
      </div>
      <div className={`deltaTag ${deltaStatus}`}>
        <img className="icon" src={icon} alt="facebook icon" />
        {deltaStatus === "good"? <IoMdArrowDropup/> : <IoMdArrowDropdown/>} {delta}
      </div>
    </div>
  )
 }

 export default CustomTag