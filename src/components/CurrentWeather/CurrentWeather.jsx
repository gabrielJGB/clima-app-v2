import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import drop from '../../assets/drop.png'
import sunrise from '../../assets/sunrise.png'
import sunset from '../../assets/sunset.png'
import wind_flag from '../../assets/wind_flag.png'
import arrow from '../../assets/arrow.png'
import { get_direction } from '../../utils/get_direction'

import './CurrentWeather.scss'
import { useNavigate } from 'react-router-dom'

const CurrentWeather = () => {
  const data = useContext(DataContext)
  const navigate = useNavigate()

  const ICON_SIZE_1 = 15;
  const ICON_SIZE_2 = 32;
  const ICON_SIZE_3 = 50;
  const ICON_SIZE_4 = 17;



  const format_update_date = (date) => {
    const year = new Date().getFullYear().toString().slice(2)
    return date.slice(5).split("/")[1] + "/" + date.slice(5).split("/")[0] + "/" + year
  }

  function is_outdated(fecha, hora) {

    const now = new Date();
    const fechaHora = new Date(`${fecha} ${hora}`);
    const diferenciaEnMilisegundos = now - fechaHora;
    const dosHorasEnMilisegundos = 2 * 60 * 60 * 1000;
    return diferenciaEnMilisegundos > dosHorasEnMilisegundos;
  }

  const CurrentWeatherInfo = () => {
    return (
      <div className='current-container' onClick={() => navigate("/satellite")}>

        {
          data.current_weather.response.cc.date != "1969/12/31" ?
            <>

              <div className="left">
                <div className="temp-num"> {data.current_weather.response.cc.temp} <span className='temp-unit'>°C</span></div>
                <div className={`update-time ${is_outdated(data.current_weather.response.cc.date,data.current_weather.response.cc.time)?"outdated":""}`}>


                  <div>Actualizado {data.current_weather.response.cc.time}</div>
                  <div className='day'>{format_update_date(data.current_weather.response.cc.date)}</div>
                </div>
              </div>

              <div className="current-temp">
                {/* <img src={data.current_weather.response.cc.dir.img?.attributes.src.replace("..", "https://www.meteobahia.com.ar")} width={ICON_SIZE_3} height={ICON_SIZE_3} /> */}
                <img src={`https://www.meteobahia.com.ar/imagenes/new/${data.current_weather.response.cc.icon}.png`} alt={data.current_weather.response.cc.condition} width={ICON_SIZE_3} height={ICON_SIZE_3} />
                <div className="condition">{data.current_weather.response.cc.condition}</div>
              </div>



              <div className="variables">



                <div className="var wind">
                  {/* <img src={arrow} width={ICON_SIZE_1} height={ICON_SIZE_1} style={{ transform: (`rotate(${data.current_weather.response.cc.wind_sp}deg)`)}  } /> */}

                  {
                    data.current_weather.response.cc.wind_dir != " " ?
                      <>
                        <img src={arrow} alt="arrow" style={{ transform: `rotate(${get_direction(data.current_weather.response.cc.wind_dir)}deg)` }} width={ICON_SIZE_1} height={ICON_SIZE_1} />
                        <div className="text">
                          <span className='num'>{data.current_weather.response.cc.wind_sp}</span>
                          <span className='unit'>km/h {data.current_weather.response.cc.wind_dir} </span>
                        </div>
                      </>
                      :
                      <>
                        <img src={wind_flag} alt="flag" width={ICON_SIZE_1} height={ICON_SIZE_1} />
                        <div className="text">
                          <span className='wind_desc'>{data.current_weather.response.cc.wind_sp}</span>
                        </div>

                      </>
                  }

                </div>

                <div className="var precitipation">
                  <img src={drop} width={ICON_SIZE_1} alt="drop" height={ICON_SIZE_1} />
                  <div className="text">
                    <span className='num'>{data.current_weather.response.cc.pp}</span>
                    <span className='unit'>mm</span>
                  </div>
                </div>

                <div className="var sun">
                  <img src={sunrise} alt="sunrise" width={ICON_SIZE_1} height={ICON_SIZE_1} />
                  <div className="text">
                    <span className='num'>{data.sun.rise}</span>
                    <span className='unit'>hs</span>
                  </div>
                </div>

                <div className="var sun">
                  <img src={sunset} alt="sunset" width={ICON_SIZE_1} height={ICON_SIZE_1} />
                  <div className="text">
                    <span className='num'>{data.sun.set}</span>
                    <span className='unit'>hs</span>
                  </div>
                </div>





                {/* <div className="var pressure">
                  <img src={pressure} width={ICON_SIZE_1} height={ICON_SIZE_1} />
                  <div className="text">
                    <span className='num'>{data.current_weather.response.cc.pres}</span>
                    <span className='unit'>hPa</span>
                  </div>
                </div>


                <div   >
                  <span className="st">ST </span>
                  <span className='num'>{data.current_weather.response.cc.st}</span>
                  <span className='unit'>°C</span>
                </div> */}


              </div>
            </>

            :
            <div className='error'>
              <img src="https://www.meteobahia.com.ar/imagenes/new/nodisponible.png" alt="Error" width={ICON_SIZE_2} height={ICON_SIZE_2} />
              <div>Estación meteorológica fuera de linea</div>
            </div>



        }





      </div>
    )
  }

  return (
    <>
      {
        data.current_weather ?
          <CurrentWeatherInfo />
          :
          <div className='loading'>Cargando...</div>
      }


    </>


  )
}

export default CurrentWeather