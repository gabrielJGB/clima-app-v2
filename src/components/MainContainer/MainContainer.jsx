import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import DayElement from './DayElement';
import './MainContainer.scss'

const MainContainer = () => {
  const data = useContext(DataContext)

  

  return (
    <div className='main-container'>

     

      {data.forecast_arr.length &&
        data.forecast_arr.map((elem, i) => (

          <DayElement key={i} date={elem.date} info={elem.info} temp={{max:elem.max,min:elem.min}}/>
        ))
      }




    </div>
  )
}

export default MainContainer