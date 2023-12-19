import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import magnifier from '../../assets/magnifier.png'
import star from '../../assets/star.png'
import back_button from '../../assets/back_button.png'
import { DataContext } from '../../context/DataContext';
import './Header.scss'

const Header = () => {
  const data = useContext(DataContext)
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location;
  const ICON_SIZE = 30;
  const ICON_SIZE_2 = 24;



  return (
    <div className='header-container'>


      {
        pathname === "/" &&
        <div className="favorites-button"
          onClick={() => {
            data.set_show_favorites(prev => prev ? false : true)

          }}
        >

          <img src={star} width={ICON_SIZE} height={ICON_SIZE} />
        </div>
      }


        {
           pathname === "/day" && <div></div>
        }


      {/* {
        pathname === "/day" &&
        <div className="back-button"
          onClick={() => { navigate("/", { replace: true, relative:'path' }) }}
        >


          <img src={back_button} width={ICON_SIZE_2} height={ICON_SIZE_2} />
        </div>
      } */}




      <div className='title'>{data.selected_city ? "El tiempo en " + data.selected_city.nombre : "Pronóstico del tiempo"}</div>

      {
        pathname === "/" &&
        <div className="search-button"
          onClick={() => data.set_show_search_modal(prev => prev ? false : true)}
        >

          <img src={magnifier} width={ICON_SIZE} height={ICON_SIZE} />
        </div>
      }



      {
        pathname === "/day" &&
        <div></div>
      }

    </div>
  )
}

export default Header