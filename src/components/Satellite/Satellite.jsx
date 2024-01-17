import React, { useState } from 'react'
import { useContext } from 'react'
import close_button from '../../assets/close_button.png'
import { DataContext } from '../../context/DataContext'
import './Satellite.scss'

const Satellite = () => {
    const data = useContext(DataContext)
    const [selected, set_selected] = useState("topesc")
    const ICON_SIZE = 35;

    return (

        <div className='satellite-container' style={{ display: (data.show_satellite ? "flex" : "none") }}>
            <div></div>
            <div className="img-container">
                {/* <img src={`https://www.meteobahia.com.ar/imagenes/satelite/${selected}.jpg`} /> */}
                <img src="https://www.meteobahia.com.ar/scripts/mapas/Clouds-00.png" alt="Imagen"  />
            </div>

            <div className="button-container">


                

                <button
                    className={`${selected === "topesn" ? "active" : ""}`}
                    onClick={() => { set_selected("topesn") }}
                >NORTE</button>

                <button
                    className={`${selected === "topesc" ? "active" : ""}`}
                    onClick={() => set_selected("topesc")}
                >CENTRO</button>

                <button
                    className={`${selected === "topespat" ? "active" : ""}`}
                    onClick={() => set_selected("topespat")}
                >SUR</button>
            </div>

            <div className="close-button-sat" onClick={() => { data.set_show_satellite(false) }}>
                <img src={close_button} width={ICON_SIZE} height={ICON_SIZE} />
            </div>
        </div>
    )
}

export default Satellite