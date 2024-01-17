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


      <img typeof="image/gif" style={{display:"none"}} src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/SSA/13/GOES16-SSA-13-900x540.gif" />

    </div>
  )
}

export default MainContainer