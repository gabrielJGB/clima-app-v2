import React, { useState } from 'react'
import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";


const Satellite = () => {
    const [selected, set_selected] = useState("topesc")
    const [selected_img_1, set_selected_img_1] = useState(false)
    const [selected_img_2, set_selected_img_2] = useState(false)


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
                {/* <img
                            src={`https://www.meteobahia.com.ar/imagenes/satelite/${selected}.jpg`}
                            alt="Satellite"
                        /> */}
                <h2>Imagen de radar</h2>
                {/* <TransformWrapper centerOnInit >
                    <TransformComponent > */}
                <img
                    className={selected_img_1 ? "selected-img" : ""}
                    onClick={() => set_selected_img_1(prev => !prev)}
                    type='gif'
                    src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/SSA/13/GOES16-SSA-13-900x540.gif" alt="Imagen" width={window.innerWidth - 19} />

                {/* </TransformComponent>
                </TransformWrapper> */}

                <h2>Actividad eléctrica</h2>
                {/* <TransformWrapper>
                    <TransformComponent > */}
                <img
                    className={selected_img_2 ? "selected-img" : ""}
                    onClick={() => set_selected_img_2(prev => !prev)}
                    typeof='image/gif' src="https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/ssa/EXTENT3/GOES16-SSA-EXTENT3-900x540.gif" alt="Imagen" width={window.innerWidth - 20} />
                {/* </TransformComponent>
                </TransformWrapper> */}

                {/* <img src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/SSA/13/GOES16-SSA-13-900x540.gif" alt="Imagen" /> */}



            </div>


            <a className='link' href="https://www.star.nesdis.noaa.gov/GOES/sector_band.php?sat=G16&sector=ssa&band=14&length=36&dim=1">
                Imagen satelite GOES-16
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