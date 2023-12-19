import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import HourRow from '../HourRow/HourRow'
import Spinner from '../Spinner/Spinner'

import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'

import './Forecast.scss'


const Forecast = () => {
  const data = useContext(DataContext)
  const [date_to_show, set_date_to_show] = useState(false)
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const [reachedMargin, setReachedMargin] = useState(false);
  const forecast_container = useRef(null)
  const delta_x_margin = 150
  const ICON_SIZE = 30


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

      if (deltaX >= delta_x_margin) {
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

    

  }, [[],data.selected_date])


useEffect(() => {
  window.scrollTo({top: 0, behavior: 'smooth'});

}, [])


  return (
    <div
      ref={forecast_container}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      className='forecast-container'
    >


{/* 
      {
        date_to_show &&

        <Overview info={date_to_show.info} />
      } */}


      {
        date_to_show &&
        <div className="header">

              {
                data.forecast_arr.indexOf(data.forecast_arr.find(elem => elem.date === data.selected_date))?

            <span className='arrow'>
              <img 
                src={arrow_left} 
                width={ICON_SIZE} 
                height={ICON_SIZE}
                onClick={()=>{
                     let index = data.forecast_arr.indexOf(data.forecast_arr.find(elem => elem.date === data.selected_date))
                  if (index - 1 >= 0 && index - 1 < data.forecast_arr.length) {
                    data.set_selected_date(data.forecast_arr[index - 1].date)
                  }
                }}
              />
            </span>
            :
            <span style={{width:"50px"}}></span>
              }

            <span>
            {`${date_to_show.info[0].day_of_week} ${date_to_show.info[0].date_dd} de  ${date_to_show.info[0].month_name}`}
            </span>
            <span className='arrow'>
            <img 
              src={arrow_right}  
              width={ICON_SIZE} 
              height={ICON_SIZE} 
              onClick={()=>{
                let index = data.forecast_arr.indexOf(data.forecast_arr.find(elem => elem.date === data.selected_date))
                if (index + 1 >= 0 && index + 1 < data.forecast_arr.length) {
                  data.set_selected_date(data.forecast_arr[index + 1].date)
                }
              }}
            />
            </span>
        </div>
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