import React, { useContext, useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx'
import Forecast from '../components/Forecast/Forecast.jsx'
import SearchModal from '../components/SearchModal/SearchModal.jsx'
import Carousel from '../components/Carousel/Carousel.jsx'
import background from '../assets/background.png'
import { DataContext } from '../context/DataContext.jsx'
import Spinner from '../components/Spinner/Spinner.jsx'
import Satellite from '../components/Satellite/Satellite.jsx'
import Componente from '../components/Componente.jsx'


const Home = () => {
  const data = useContext(DataContext)

  return (
    <div className='home-container'>
      <Header />
      
      {data.selected_city?
        data.loading_1 && data.loading_2 ?
          <Spinner />
          :
          <>
            <CurrentWeather />
            <Forecast />
            <Carousel />
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
      {/* <Componente /> */}
    </div>

  )
}

export default Home