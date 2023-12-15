import React, { useContext, useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx'
import Forecast from '../components/Forecast/Forecast.jsx'
import Carousel from '../components/Carousel/Carousel.jsx'
import SearchModal from '../components/SearchModal/SearchModal.jsx'
import background from '../assets/background.png'
import Spinner from '../components/Spinner/Spinner.jsx'
import Satellite from '../components/Satellite/Satellite.jsx'
import Favorites from '../components/Favorites/Favorites.jsx'
import MainContainer from '../components/MainContainer/MainContainer.jsx'

import { DataContext } from '../context/DataContext.jsx'



const Home = () => {
  const data = useContext(DataContext)

  return (
    <div className='home-container'>
      
      
      {data.selected_city?
        data.loading_1 && data.loading_2 ?
          <Spinner />
          :
          <>
            <CurrentWeather />
            
            {/* <Forecast />
            <Carousel /> */}

            <MainContainer />

          </>
          :
          <>
            <img src={background} width={200} height={200}  style={{marginTop:170}}/>
            <button 
              onClick={()=>data.set_show_search_modal(prev=>prev?false:true)}
              className='main-search-btn'>Buscar una ciudad</button>
          </>
      }

      <Satellite />
      <SearchModal />
      <Favorites />
    </div>

  )
}

export default Home