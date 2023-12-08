import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../../context/DataContext'
import './Carousel.scss'

const Carousel = () => {
  const data = useContext(DataContext)
  const carouselContainer = useRef(null);

  useEffect(() => {

    if(data.swipe_dir=== "right"){
      carouselContainer.current.scrollBy(98,0)
      
    }
    else if (data.swipe_dir=== "left"){
      carouselContainer.current.scrollBy(-98,0)

    }
    data.set_swipe_dir("")

  }, [data.swipe_dir])
  
  
  const  get_sum = (total, num) => {
    return total + parseFloat(num.precipitation);
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
                {elem.info[0].day_of_week}
              </div>
              <div className="date">
                {elem.info[0].date_dd_mm}
              </div>
            

            <div className="maxmin">
              <div className="max">{elem.max}</div>
              <div className="min">{elem.min}</div>
            </div>

            <div className="mm">
              { `${parseFloat(elem.info.reduce(get_sum, 0)).toFixed(1)} mm`}
            </div>

          </div>

        ))
      }
   <div className='empty' ></div>
   
    </div>
  )
}

export default Carousel