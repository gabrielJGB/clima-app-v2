import React from 'react'
import { useContext } from 'react';
import magnifier from '../../assets/magnifier.png'
import arrow from '../../assets/arrow.png'
import { DataContext } from '../../context/DataContext';
import './Header.scss'

const Header = () => {
  const data = useContext(DataContext)
  const ICON_SIZE = 30;

  return (
    <div className='header-container'>
      <div></div>

      <div className='title'>{data.selected_city?"El tiempo en "+data.selected_city.nombre:"Pronóstico del tiempo"}</div>

      <div  className="search-button" 
            onClick={()=>data.set_show_search_modal(prev=>prev?false:true)} 
      >

        <img src={magnifier} width={ICON_SIZE} height={ICON_SIZE} />
      </div>
    </div>
  )
}

export default Header