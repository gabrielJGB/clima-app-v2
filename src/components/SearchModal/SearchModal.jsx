import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import close_button from '../../assets/close_button.png'
import search_city from '../../utils/search'
import './SearchModal.scss'

const SearchModal = () => {
    const data = useContext(DataContext)
    const input_element = useRef()
    const [input, set_input] = useState('')
    const [search_resp, set_search_resp] = useState([])
    const ICON_SIZE = 30;

    useEffect(() => {
        let resp = search_city(input)
        set_search_resp(resp)

    }, [input])



    useEffect(() => {      
        input_element.current.focus()
    }, [data.show_search_modal])
    


    return (
        <div className='search-modal'
            style={{ display: (data.show_search_modal ? "flex" : "none") }}
        >
            <div className="form-container">
                <div className="form-header">
                    <div></div>
                    <div
                        className="close-button"
                        onClick={() => data.set_show_search_modal(prev => prev ? false : true)}
                    >
                        <img src={close_button} width={ICON_SIZE} height={ICON_SIZE} />
                    </div>
                </div>

                <input
                    className='search-input'
                    type="text"
                    placeholder='Escriba una ciudad'
                    onChange={(e) => { set_input(e.target.value.toLowerCase())}}
                    ref={input_element}
                    autoFocus
                />

                <div className='search-results'>
                    
                    {
                        search_resp &&
                            search_resp.map((city, i) => (
                                <div 
                                    key={i} 
                                    className="result"
                                    onClick={()=>{
                                        data.set_selected_city(city)
                                        data.set_show_search_modal(false)
                                    }}
                                >{`${city.nombre}, ${city.provincia}`}</div>
                            ))
                          
                    }

                </div>
            </div>
        </div>
    )
}

export default SearchModal