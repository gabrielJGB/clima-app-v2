import React from 'react'
// import drop from '../../assets/drop.png'
// import arrow from '../../assets/arrow.png'
// import pressure from '../../assets/pessure.png'
import './HourRow.scss'

const HourRow = ({hour,temp,condition,wind_speed,precipitation,pressure}) => {
    return (
      <div className="hour-row">
        <div className="hour">{hour}</div>

        <div className="temp">
          {/* <img src="" width={ICON_SIZE_2} height={ICON_SIZE_2} /> */}
          <div className="temp-num">
            <span className="num">{temp}</span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="variables">
          <div className="condition">{condition}</div>
          <div className="var wind">
            {/* <img src={arrow} width={ICON_SIZE_1} height={ICON_SIZE_1} /> */}
            <div className="text">
              {/* <span className='num'>{v.wind_speed}</span> */}
              <span className='unit'>km/h</span>
            </div>
          </div>
          <div className="var precitipation">
            {/* <img src={drop} width={ICON_SIZE_1} height={ICON_SIZE_1} /> */}
            <div className="text">
              <span className='num'>{precipitation}</span>
              <span className='unit'>mm</span>
            </div>
          </div>
          <div className="var pressure">
            {/* <img src={v.pressure} width={ICON_SIZE_1} height={ICON_SIZE_1} /> */}
            <div className="text">
              <span className='num'>{pressure}</span>
              <span className='unit'>hPa</span>
            </div>
          </div>




        </div>

      </div>
    )
  }

export default HourRow