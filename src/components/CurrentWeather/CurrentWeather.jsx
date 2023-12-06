import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import sunrise from '../../assets/sunrise.png'
import sunset from '../../assets/sunset.png'
import drop from '../../assets/drop.png'
import pressure from '../../assets/pressure.png'
import arrow from '../../assets/arrow.png'


import './CurrentWeather.scss'

const CurrentWeather = () => {
  const data = useContext(DataContext)

  const ICON_SIZE_1 = 15;
  const ICON_SIZE_2 = 35;
  const ICON_SIZE_3 = 60;

  useEffect(() => {
    if(data.current_weather)
      console.log(data.current_weather)
  }, [data.current_weather])


  const CurrentWeatherInfo = (props)=>{
    return (
      <div className='current-container'>

      <div className="current-temp">
        <img src={data.current_weather.response.cc.dir.img.attributes.src.replace("..","https://www.meteobahia.com.ar")} width={ICON_SIZE_3} height={ICON_SIZE_3} />
        <div className="temp-num"> {data.current_weather.response.cc.temp} <span className='temp-unit'>°C</span></div>
      </div>

      <div className="variables">
        <div className="condition">{data.current_weather.response.cc.condition}</div>
        <div className="var wind">
          {/* <img src={arrow} width={ICON_SIZE_1} height={ICON_SIZE_1} style={{ transform: (`rotate(${data.current_weather.response.cc.wind_sp}deg)`)}  } /> */}
          <div> {data.current_weather.response.cc.wind_dir} </div>

          <div className="text">
            <span className='num'>{data.current_weather.response.cc.wind_sp}</span>
            <span className='unit'>km/h</span>
          </div>
        </div>
        <div className="var precitipation">
          <img src={drop} width={ICON_SIZE_1} height={ICON_SIZE_1} />
          <div className="text">
            <span className='num'>{data.current_weather.response.cc.pp}</span>
            <span className='unit'>mm</span>
          </div>
        </div>
        <div className="var pressure">
          <img src={pressure} width={ICON_SIZE_1} height={ICON_SIZE_1} />
          <div className="text">
            <span className='num'>{data.current_weather.response.cc.pres}</span>
            <span className='unit'>hPa</span>
          </div>
        </div>




      </div>




      <div className="sun">
        <div className="rise">
          <img src={sunrise} width={ICON_SIZE_2} height={ICON_SIZE_2} />
          <div className="num">05:40</div>
        </div>


        <div className="set">
          <img src={sunset} width={ICON_SIZE_2} height={ICON_SIZE_2} />
          <div className="num">20:40</div>
        </div>

      </div>

    </div>
    )
  }

  return (
    <>
      {
        data.current_weather ?
          <CurrentWeatherInfo />
          :
          <></>
      }


    </>


  )
}

export default CurrentWeather