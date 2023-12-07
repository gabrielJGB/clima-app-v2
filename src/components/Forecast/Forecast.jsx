import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import HourRow from '../HourRow/HourRow'
import Spinner from '../Spinner/Spinner'
import './Forecast.scss'


const Forecast = () => {
  const data = useContext(DataContext)
  const [date_to_show, set_date_to_show] = useState(false)

  useEffect(() => {
    let date_elem = data.forecast_arr.find(date => date.date === data.selected_date)
    set_date_to_show(date_elem)
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
            wind={v.wind}
            precipitation={v.precipitation}
            pressure={v.pressure}
            icon_url={v.icon_url}
          />
        ))
        :
        <Spinner />
      }



    </div>
  )
}

export default Forecast