import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import drop from '../../assets/drop-color.png'
import './Carousel.scss'
import { get_current_date, get_tomorrow_date } from '../../utils/time'

const Carousel = () => {
  const data = useContext(DataContext)
  const carouselContainer = useRef(null);

  useEffect(() => {

    if (data.swipe_dir === "right") {
      carouselContainer.current.scrollBy(104, 0)

    }
    else if (data.swipe_dir === "left") {
      carouselContainer.current.scrollBy(-104, 0)

    }
    data.set_swipe_dir("")

  }, [data.swipe_dir])


  const get_sum = (total, num) => {
    return total + parseFloat(num.precipitation);
  }


  const get_drop_arr = (mm) => {

    let num = parseFloat(mm)

    if (num === 0)
      return []
    else if (num > 0.2 && num <= 2)
      return [0]
    else if (num > 2 && num <= 6)
      return [0, 1]
    else if (num > 6 && num <= 20)
      return [0, 1, 2]
    else if (num > 20 && num <= 50)
      return [0, 1, 2, 3]
    else if (num > 50)
      return [0, 1, 2, 3, 4]
    else {
      return []
    }

  }


  const get_element_title = (elem) => {
    
    if (elem.date === get_current_date())
      return "Hoy"
    else if (elem.date === get_tomorrow_date())
      return "Mañana"
    else {
      return elem.info[0].day_of_week
    }

  }

  return (
    <div
      className='carousel-container'
      ref={carouselContainer}
    >

      <div className='empty' ></div>
      {
        data.forecast_arr.map((elem, i) => (
          <div
            key={i}
            onClick={() => data.set_selected_date(elem.date)}
            className={`element ${data.selected_date === elem.date ? "selected_day" : ""}`}
          >

            <div className="day">
              {elem.date === get_current_date()?"Hoy": elem.info[0].day_of_week}

            <div className="date">
              {elem.info[0].date_dd_mm}
            </div>

            </div>


            <div className="bottom">
              <div className="maxmin">
                <div className="max">{elem.max}</div>
                <div className="min">{elem.min}</div>
              </div>

              <div className="mm">
                {
                  get_drop_arr(elem.info.reduce(get_sum, 0)).map((e, i) => (
                    <img className='drop' src={drop} key={i} width={11} height={11} />
                  ))
                }
              </div>
            </div>

          </div>

        ))
      }
      <div className='empty' ></div>

    </div>
  )
}

export default Carousel