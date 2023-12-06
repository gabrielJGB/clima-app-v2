import React, { useContext, useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx'
import Forecast from '../components/Forecast/Forecast.jsx'
import SearchModal from '../components/SearchModal/SearchModal.jsx'
import Carousel from '../components/Carousel/Carousel.jsx'
import arrow from '../../public/pwa-512x512.png'
import Loading from '../components/Loading/Loading.jsx'
import { DataContext } from '../context/DataContext.jsx'
import Spinner from '../components/Spinner/Spinner.jsx'



const Home = () => {
  const data = useContext(DataContext)

  // useEffect(() => {
  //     get_xml("").then(parsed=>console.log(parsed))
  // }, [])


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
            <img src={arrow} width={200} height={200}  style={{marginTop:170}}/>
            <button 
              onClick={()=>data.setShowSearchModal(prev=>prev?false:true)}
              className='main-search-btn'>Buscar una ciudad</button>
          </>
      }


      <SearchModal />
    </div>

  )
}

export default Home