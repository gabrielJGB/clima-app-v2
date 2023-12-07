import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import drop from '../../assets/drop.png'
import pressure from '../../assets/pressure.png'
import arrow from '../../assets/arrow.png'


import './Forecast.scss'
import HourRow from '../HourRow/HourRow'


const Forecast = () => {
  const data = useContext(DataContext)
  const [date_to_show, set_date_to_show] = useState(false)
  const ICON_SIZE_1 = 15;
  const ICON_SIZE_2 = 60;

  useEffect(() => {
    let x = data.forecast_arr.find(date => date.date === data.selected_date)
    set_date_to_show(x)

    
  }, [[], data.selected_date])




  return (
    <div className='forecast-container'>
      {
        date_to_show ?
          <div className="date">{`${date_to_show.info[0].day_of_week} ${date_to_show.info[0].date_dd} de ${date_to_show.info[0].month_name}`}</div>
          :
          <></>
      }
      {date_to_show ?
        date_to_show.info.map((v, i) => (

          <HourRow
            key={i}
            hour={v.time}
            temp={v.temperature}
            condition={v.description}
            wind_speed={v.wind}
            precipitation={v.precipitation}
            pressure={v.pressure}
          />
        ))
        :
        <></>
      }

    </div>
  )
}

export default Forecast