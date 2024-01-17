import React, { useState } from 'react'
import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";


const Satellite = () => {
    const [selected, set_selected] = useState("topesc")

    const Controls = () => {
        const { zoomIn, zoomOut, resetTransform } = useControls();
        return (
          <div className='zoom-control'>
            <button className='zoom-button' onClick={() => zoomIn()}>Zoom In</button>
            <button className='zoom-button' onClick={() => resetTransform()}>Reset</button>
            <button className='zoom-button' onClick={() => zoomOut()}>Zoom Out</button>
          </div>
        );
      };


    const get_label = (str) => {
        switch (str) {
            case "topesn":
                return "Norte"
            case "topesc":
                return "Centro"
            case "topespat":
                return "Sur"
        }
    }

    return (
        // <div className="satellite_container">
        //     <img src={`https://www.meteobahia.com.ar/imagenes/satelite/${selected}.jpg`} />
        // </div>
        <div className="satellite_container">

            <h4>Vsita satelital {get_label(selected)}</h4>

            <div className="img">
                <TransformWrapper 
                    wrapperClass={"wrapper"}
                >
                    <TransformComponent >
                        <img
                            src={`https://www.meteobahia.com.ar/imagenes/satelite/${selected}.jpg`}
                            alt="Satellite"
                            
                        />
                    </TransformComponent>
                    {/* <Controls /> */}
                </TransformWrapper>



            </div>

            <div className="buttons">
                <button className={`button ${selected === "topesn" ? "active" : ""}`}
                    onClick={() => set_selected("topesn")}>Norte</button>

                <button className={`button ${selected === "topesc" ? "active" : ""}`}
                    onClick={() => set_selected("topesc")}>Centro</button>

                <button className={`button ${selected === "topespat" ? "active" : ""}`}
                    onClick={() => set_selected("topespat")}>Sur</button>
            </div>
        </div>

    )
}

export default Satellite