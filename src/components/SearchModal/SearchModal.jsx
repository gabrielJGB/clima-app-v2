import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import close_button from '../../assets/close_button.png'
import search_city from '../../utils/search'
import './SearchModal.scss'

const SearchModal = () => {
    const data = useContext(DataContext)
    const [input, set_input] = useState('')
    const [search_resp, set_search_resp] = useState([])
    const ICON_SIZE = 30;

    useEffect(() => {
        let resp = search_city(input)
        set_search_resp(resp)

    }, [input])


    return (
        <div className='search-modal'
            style={{ display: (data.showSearchModal ? "flex" : "none") }}
        >
            <div className="form-container">
                <div className="form-header">
                    <div></div>
                    <div
                        className="close-button"
                        onClick={() => data.setShowSearchModal(prev => prev ? false : true)}
                    >
                        <img src={close_button} width={ICON_SIZE} height={ICON_SIZE} />
                    </div>
                </div>

                <input
                    className='search-input'
                    type="text"
                    placeholder='Escriba una ciudad'
                    onChange={(e) => { set_input(e.target.value) }}
                    autoFocus
                />

                <div className='search-results'>
                    
                    {
                        search_resp ?
                            search_resp.map((city, i) => (
                                <div 
                                    key={i} 
                                    className="result"
                                    onClick={()=>{
                                        data.set_selected_city(city)
                                        data.setShowSearchModal(false)
                                    }}
                                >{`${city.nombre}, ${city.provincia}`}</div>
                            ))
                            :
                            <></>
                    }

                </div>
            </div>
        </div>
    )
}

export default SearchModal