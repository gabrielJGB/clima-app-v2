import React, { useState } from 'react'
import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";


const Satellite = () => {
    const [selected, set_selected] = useState("topesc")
const [index, set_index] = useState(0)

    const arr = ["00","03","06","09","12","15","18","21","24"]



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

            <h4></h4>

            <div className="img">
                {/* <TransformWrapper
                    wrapperClass={"wrapper"}
                >
                    <TransformComponent > */}
                        {/* <img
                            src={`https://www.meteobahia.com.ar/imagenes/satelite/${selected}.jpg`}
                            alt="Satellite"
                        /> */}
                        <img src="https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/ssa/EXTENT3/GOES16-SSA-EXTENT3-900x540.gif" alt="Imagen" />
                        
                        {/* <img src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/SSA/13/GOES16-SSA-13-900x540.gif" alt="Imagen" /> */}
                    {/* </TransformComponent> */}
                    {/* <Controls /> */}
                {/* </TransformWrapper> */}



            </div>


            <a className='link' href="https://www.star.nesdis.noaa.gov/GOES/sector_band.php?sat=G16&sector=ssa&band=14&length=36&dim=1">
                Imagenes satelitales GOES-16
            </a>

            {/* <div className="buttons">
                <button onClick={()=>{
                    
                    if(index>0 )
                        set_index(prev=>prev-1)
                }}>{"<"}</button>


                <button onClick={()=>{
                    if(index < arr.length-1)
                        set_index(prev=>prev+1)
                }}>{">"}</button>
            </div> */}

            {/* <div className="buttons">
                <button className={`button ${selected === "topesn" ? "active" : ""}`}
                    onClick={() => set_selected("topesn")}>Norte</button>

                <button className={`button ${selected === "topesc" ? "active" : ""}`}
                    onClick={() => set_selected("topesc")}>Centro</button>

                <button className={`button ${selected === "topespat" ? "active" : ""}`}
                    onClick={() => set_selected("topespat")}>Sur</button>
            </div> */}
        </div>

    )
}

export default Satellite