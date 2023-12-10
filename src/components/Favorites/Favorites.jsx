import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import close_button from '../../assets/close_button.png'

import './Favorites.scss'

const Favorites = () => {
    const data = useContext(DataContext)
    const ICON_SIZE = 30;
    const [elem_in_ls, set_elem_in_ls] = useState(false)
    const [saved_arr, set_saved_arr] = useState(JSON.parse(localStorage.getItem('saved')) || [])

    useEffect(() => {
        const city_in_ls = saved_arr.find(obj => obj.code === data.selected_city.code)
        if(!city_in_ls){
            set_elem_in_ls(false)
        }else{
            set_elem_in_ls(true)
        }
        

    } , [data.show_favorites])
    


    const handle_save = (selected_city) => {

        const city_in_ls = saved_arr.find(obj => obj.code === selected_city.code);

        if (!city_in_ls) {
            saved_arr.push(selected_city)
            localStorage.setItem('saved', JSON.stringify(saved_arr))
            let arr = JSON.parse(localStorage.getItem('saved'))
            set_saved_arr(arr)
            set_elem_in_ls(true)
        }
    }


    const delete_elem = (elem) => {
        const existingData = JSON.parse(localStorage.getItem('saved')) || [];
        

        // Filtrar el array para excluir el objeto que deseas borrar
        const newArray = existingData.filter(obj => obj.code !== elem.code);

        // Guardar el nuevo array en localStorage
        localStorage.setItem('saved', JSON.stringify(newArray));
        let arr = JSON.parse(localStorage.getItem('saved'))
        set_saved_arr(arr)

    }


    return (
        <div
            className='favorites-modal'
            style={{ display: (data.show_favorites ? "flex" : "none") }}
        >

            <div className="form-header">

                <div
                    className="close-button"
                    onClick={() => data.set_show_favorites(prev => prev ? false : true)}
                >
                    <img src={close_button} width={ICON_SIZE} height={ICON_SIZE} />
                </div>

                <div className='title'>Favoritos</div>
                <div></div>

            </div>

            <div className="favorites-container">



                {

                    !elem_in_ls &&
                    <button
                        className="save-button"
                        onClick={() => { handle_save(data.selected_city) }}

                    >Guardar ciudad actual</button>

                }


                {
                    saved_arr.map((elem, i) => (


                        <div key={i} className="saved">
                            <div 
                                onClick={()=>{
                                    data.set_selected_city(elem)
                                    data.set_show_favorites(false)
                                }}
                                className="city">{`${elem.nombre}, ${elem.provincia}`}</div>
                            <button 
                                onClick={()=>delete_elem(elem)}
                                className='delete-btn'>Borrar</button>
                        </div>
                    ))

                }




            </div>
        </div>
    )
}

export default Favorites