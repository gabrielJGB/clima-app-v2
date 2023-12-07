import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import drop from '../../assets/drop.png'
import pressure from '../../assets/pressure.png'
import wind_flag from '../../assets/wind_flag.png'
import arrow from '../../assets/arrow.png'
import Spinner from '../Spinner/Spinner'
import { get_direction } from '../../utils/get_direction'

import './CurrentWeather.scss'

const CurrentWeather = () => {
  const data = useContext(DataContext)

  const ICON_SIZE_1 = 15;
  const ICON_SIZE_2 = 35;
  const ICON_SIZE_3 = 50;

  useEffect(() => {
    // console.log(data.current_weather.response.cc)
  }, [])



  const CurrentWeatherInfo = () => {
    return (
      <div className='current-container'>

        <div className="left">
          <div className="temp-num"> {data.current_weather.response.cc.temp} <span className='temp-unit'>°C</span></div>
          <div className="update-time">
            Actualizado: {data.current_weather.response.cc.time}
          </div>
        </div>


        <div className="current-temp">
          {/* <img src={data.current_weather.response.cc.dir.img?.attributes.src.replace("..", "https://www.meteobahia.com.ar")} width={ICON_SIZE_3} height={ICON_SIZE_3} /> */}
          <img src={`https://www.meteobahia.com.ar/imagenes/new/${data.current_weather.response.cc.icon}.png`} width={ICON_SIZE_3} height={ICON_SIZE_3} />
          <div className="condition">{data.current_weather.response.cc.condition}</div>
        </div>



        <div className="variables">



          <div className="var wind">
            {/* <img src={arrow} width={ICON_SIZE_1} height={ICON_SIZE_1} style={{ transform: (`rotate(${data.current_weather.response.cc.wind_sp}deg)`)}  } /> */}

            {
              data.current_weather.response.cc.wind_dir != " " ?
                <>
                  <img src={arrow} style={{ transform: `rotate(${get_direction(data.current_weather.response.cc.wind_dir)}deg)` }} width={ICON_SIZE_1} height={ICON_SIZE_1} />
                  <div className="text">
                    <span className='num'>{data.current_weather.response.cc.wind_sp}</span>
                    <span className='unit'>km/h {data.current_weather.response.cc.wind_dir} </span>
                  </div>
                </>
                :
                <>
                  <img src={wind_flag} width={ICON_SIZE_1} height={ICON_SIZE_1} />
                  <div className="text">
                    <span className='wind_desc'>{data.current_weather.response.cc.wind_sp}</span>
                  </div>

                </>
            }





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


          <div >
            <span className="st">ST </span>
            <span className='num'>{data.current_weather.response.cc.st}</span>
            <span className='unit'>°C</span>
          </div>


        </div>




        {/*         
          <div className="sun">
            <div className="rise">
              <img src={sunrise} width={ICON_SIZE_2} height={ICON_SIZE_2} />
              <div className="num">05:40</div>
            </div>


            <div className="set">
              <img src={sunset} width={ICON_SIZE_2} height={ICON_SIZE_2} />
              <div className="num">20:40</div>
            </div>

          </div> */}




      </div>
    )
  }

  return (
    <>
      {
        data.current_weather ?
          <CurrentWeatherInfo />
          :
          <div> ...... </div>
      }


    </>


  )
}

export default CurrentWeather