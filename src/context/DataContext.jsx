import React, { createContext, useEffect, useState } from 'react'
import fetch_xml from '../utils/fetch_xml'
import { xml_to_json_1,xml_to_json_2 } from '../utils/xml_to_json'
import { get_current_date } from '../utils/time'
import {group_by_date} from '../utils/format_json'

export const DataContext = createContext({
  showSearchModal: null,
  setShowSearchModal: () => { },
  selected_city: null,
  set_selected_city: () => { },
  selected_date:null, 
  set_selected_date:()=>{},
  loading_1:null,
  loading_2:null,
  current_weather:null, 
  set_current_weather:null,
  forecast_arr:null, 
  set_forecast_arr:null

  
})

export function DataProvider({ children }) {
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [selected_city, set_selected_city] = useState(false)
  
  // const [dates_array, set_dates_array] = useState(false)
  // const [selected_day, set_selected_day] = useState(false)
  const [selected_date, set_selected_date] = useState(get_current_date())

  const [loading_1,set_loading_1] = useState(true)
  const [loading_2,set_loading_2] = useState(true)

  const [current_weather, set_current_weather] = useState(false)
  const [forecast_arr, set_forecast_arr] = useState([])

  useEffect(() => {// inicio

    //verificar local storage, si está vacia, mostrar input de busqueda
    if (!selected_city) {
      setShowSearchModal(true)
    }

    //setear la fecha de hoy

    console.log(selected_date)

  }, [])


  useEffect(() => {
    if (selected_city) {
      set_loading_1(true)
      set_loading_2(true)
      
      fetch_xml(selected_city.links.meteograma)
        .then(xml_doc =>  xml_to_json_1(xml_doc) )
        .then( json => group_by_date(json) )
        .then( arr => set_forecast_arr(arr))
        .catch(error=>console.error("Error 1: ",error))
        .finally(()=> set_loading_1(false))


      fetch_xml(selected_city.links.now)
        .then(xml_doc =>  xml_to_json_2(xml_doc) )
        .then( json => {set_current_weather( json ) })
        .catch(error=>console.error("Error 2: ",error))
        .finally(()=> set_loading_2(false))

    }
  }, [selected_city])


  // useEffect(() => {
  //   if (dates_array) {
  //     set_selected_day(dates_array.filter(elem => elem.date === get_current_date())[0])
  //     console.log(selected_day)
  //   }
  // }, [dates_array])




  // useEffect(() => {

  //   if (data) {
  //     let arr = []

  //     data.forEach(elem => {
  //       arr.push(xmlToJson(elem))
  //     })
  //     set_dates_array(agruparPorFecha(arr))


  //   }
  // }, [data])



  const contextValue = {
    showSearchModal, setShowSearchModal,
    selected_city, set_selected_city,
    selected_date, set_selected_date,
    loading_1,loading_2,
    forecast_arr, set_forecast_arr,
    current_weather, set_current_weather
  }

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
