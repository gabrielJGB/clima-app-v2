import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import HourRow from '../HourRow/HourRow'
import Overview from '../Overview/Overview'
import Spinner from '../Spinner/Spinner'
import './Forecast.scss'


const Forecast = () => {
  const data = useContext(DataContext)
  const [date_to_show, set_date_to_show] = useState(false)
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const [reachedMargin, setReachedMargin] = useState(false);
  const swipeContainerRef = useRef(null);


  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setReachedMargin(false);
  };

  const handleTouchMove = (e) => {
    if (!startX) {
      return;
    }

    const currentX = e.touches[0].clientX;

    if (!reachedMargin) {
      const deltaX = Math.abs(currentX - startX);

      if (deltaX >= 90) {
        setReachedMargin(true);
        if (startX !== null && endX !== null) {
          const deltaX = endX - startX;
          let index = data.forecast_arr.indexOf(data.forecast_arr.find(elem => elem.date === data.selected_date))

          if (deltaX > 0) {

            if (index - 1 >= 0 && index - 1 < data.forecast_arr.length) {
              data.set_selected_date(data.forecast_arr[index - 1].date)
              data.set_swipe_dir('left')

            }

          } else if (deltaX < 0) {
            if (index + 1 >= 0 && index + 1 < data.forecast_arr.length) {
              data.set_selected_date(data.forecast_arr[index + 1].date)
              data.set_swipe_dir('right')
            }

          }

          setStartX(null);
          setEndX(null);
          setReachedMargin(false);
        }
      }
      setEndX(currentX);

      return;
    }

  };

  useEffect(() => {
    let date_elem = data.forecast_arr.find(date => date.date === data.selected_date)
    set_date_to_show(date_elem)
  }, [[], data.selected_date])








  return (
    <div
      ref={swipeContainerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className='forecast-container'
    >
      {
        date_to_show &&

        <div className="date">
          {`${date_to_show.info[0].day_of_week} ${date_to_show.info[0].date_dd} de ${date_to_show.info[0].month_name}`}
        </div>
      }


      {
        date_to_show && 

          <Overview info={date_to_show.info} />
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