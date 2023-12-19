import React, { useEffect } from 'react'
import drop from '../../assets/drop.png'
import arrow from '../../assets/arrow.png'
import pressure_icon from '../../assets/pressure.png'

import './HourRow.scss'

const HourRow = ({ hour, temp, condition, wind, precipitation, pressure, icon_url }) => {
  const ICON_SIZE_1 = 15;
  const ICON_SIZE_2 = 40;


  const get_color = (time) => {
    switch (time) {
      case "00:00":
        return "color_00";
      case "03:00":
        return "color_03";
      case "06:00":
        return "color_06";
      case "09:00":
        return "color_09";
      case "12:00":
        return "color_12";
      case "15:00":
        return "color_15";
      case "18:00":
        return "color_18";
      case "21:00":
        return "color_21";
      default:
        return ""; 
    }
  };
  


  const get_hour = (hour) => {

    switch (hour) {
      case "00:00":
        return "03:00";
      case "03:00":
        return "06:00";
      case "06:00":
        return "09:00";
      case "09:00":
        return "12:00";
      case "12:00":
        return "15:00";
      case "15:00":
        return "18:00";
      case "18:00":
        return "21:00";
      case "21:00":
        return "00:00";
      default:
        return ""
        


    }

  }


  return (
    <div className={`hour-row ${get_color(hour)}`} >
      <div className="hour">
        <div>{hour}</div> <div>{get_hour(hour)} </div></div>

      <div className="temp">
        <img src={icon_url} width={ICON_SIZE_2} height={ICON_SIZE_2} />
        <div className="temp-num">
          <span className="num">{temp}</span>
          <span className="unit">°C</span>
        </div>
      </div>

      <div className={`row-variables ${get_color(hour)} `} >
        <div className="condition" >{condition}</div>


        <div className="var precitipation">
          <img className='icon' src={drop} width={ICON_SIZE_1} height={ICON_SIZE_1} />
          <div className="text">
            <span className='num'>{precipitation}</span>
            <span className='unit'>mm</span>
          </div>
        </div>

        <div className="var wind">
          <img className='icon' src={arrow} style={{ transform: `rotate(${parseFloat(wind.deg)}deg)` }} width={ICON_SIZE_1} height={ICON_SIZE_1} />
          <div className="text">
            <span className='num'>{wind.speed}</span>
            <span className='unit'>km/h{" " + wind.code}</span>
          </div>
        </div>

{/* 
        <div className="var pressure">
          <img className='icon' src={pressure_icon} width={ICON_SIZE_1} height={ICON_SIZE_1} />
          <div className="text">
            <span className='num'>{pressure}</span>
            <span className='unit'>hPa</span>
          </div>
        </div> */}




      </div>

    </div>
  )
}

export default HourRow