import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import Spinner from '../Spinner/Spinner'
import './Carousel.scss'

const Carousel = () => {
  const data = useContext(DataContext)
  

  return (
    <div className='carousel-container'>
        
        {
          data.forecast_arr.map((elem,i)=>(
            <div 
              key={i} 
              className="element"
              onClick={()=>{data.set_selected_date(elem.date)}}
            >{elem.date}</div>

          ))
        }

    </div>
  )
}

export default Carousel