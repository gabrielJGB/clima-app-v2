import React, { createContext, useEffect, useState } from 'react'
import fetch_xml from '../utils/fetch_xml'
import { xml_to_json_1,xml_to_json_2 } from '../utils/xml_to_json'
import { get_current_date } from '../utils/time'
import {group_by_date} from '../utils/format_json'

export const DataContext = createContext({
  show_search_modal: null,
  set_show_search_modal: () => { },
  selected_city: null,
  set_selected_city: () => { },
  selected_date:null, 
  set_selected_date:()=>{},
  loading_1:null,
  loading_2:null,
  current_weather:null, 
  set_current_weather:()=>{},
  forecast_arr:null, 
  set_forecast_arr:()=>{},
  show_satellite:null, 
  set_show_satellite:()=>{},
  swipe_dir:null, 
  set_swipe_dir:()=>{}
  
})

export function DataProvider({ children }) {
  const [show_search_modal, set_show_search_modal] = useState(false)
  const [selected_city, set_selected_city] = useState(false)
  const [selected_date, set_selected_date] = useState(get_current_date())
  const [loading_1,set_loading_1] = useState(true)
  const [loading_2,set_loading_2] = useState(true)
  const [current_weather, set_current_weather] = useState(false)
  const [forecast_arr, set_forecast_arr] = useState([])
  const [show_satellite, set_show_satellite] = useState(false)
  const [swipe_dir, set_swipe_dir] = useState(false)

  useEffect(() => {

    const stored_city = localStorage.getItem('city');
    if (stored_city) {
      set_selected_city(JSON.parse(stored_city));
    }
   

  }, [])


  useEffect(() => {
    if (selected_city) {

      localStorage.setItem('city', JSON.stringify(selected_city));

      set_loading_1(true)
      set_loading_2(true)
      const req = { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
      const req_ns = { headers: { 'X-Requested-With': 'XMLHttpRequest' } ,cache:'no-store'}
      
      fetch_xml(selected_city.links.meteograma,req)
        .then(xml_doc =>  xml_to_json_1(xml_doc) )
        .then( json => group_by_date(json) )
        .then( arr => set_forecast_arr(arr))
        .catch(error=>console.error("Error 1: ",error))
        .finally(()=> set_loading_1(false))


      fetch_xml(selected_city.links.now,req_ns)
        .then(xml_doc =>  xml_to_json_2(xml_doc) )
        .then( json => {set_current_weather( json ) })
        .catch(error=>console.error("Error 2: ",error))
        .finally(()=> set_loading_2(false))

    }
  }, [selected_city])





  const contextValue = {
    show_search_modal, set_show_search_modal,
    selected_city, set_selected_city,
    selected_date, set_selected_date,
    loading_1,loading_2,
    forecast_arr, set_forecast_arr,
    current_weather, set_current_weather,
    show_satellite, set_show_satellite,
    swipe_dir, set_swipe_dir
  }

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
