import React, { useEffect, useState } from 'react'

const Overview = ({ info }) => {
    const [forecast_1, set_forecast_1] = useState(false)
    const [forecast_2, set_forecast_2] = useState(false)
    const [forecast_3, set_forecast_3] = useState(false)
    const ICON_SIZE_2 = 32;

    useEffect(() => {
        set_forecast_1(info.find(elem => elem.time === "06:00"))
        set_forecast_2(info.find(elem => elem.time === "15:00"))
        set_forecast_3(info.find(elem => elem.time === "21:00"))

    }, [info])


    return (
        <div className='overview-container'>

            {
                forecast_1 &&
                <div className="forecast">
                    <div>Mañana</div>
                    <div className="top">
                        <img src={forecast_1.icon_url} width={ICON_SIZE_2} height={ICON_SIZE_2} />
                        <div className='temp'>{forecast_1.temperature}<span className='unit'>°C</span> </div>
                    </div>
                </div>

            }

            {
                forecast_2 &&

                <div className="forecast">
                    <div>Tarde</div>
                    <div className="top">
                        <img src={forecast_2.icon_url} width={ICON_SIZE_2} height={ICON_SIZE_2} />
                        <div className='temp'>{forecast_2.temperature}<span className='unit'>°C</span> </div>
                    </div>
                </div>
            }

            {
                forecast_3 &&

                <div className="forecast">
                    <div>Noche</div>
                    <div className="top">
                        <img src={forecast_3.icon_url} width={ICON_SIZE_2} height={ICON_SIZE_2} />
                        <div className='temp'>{forecast_3.temperature}<span className='unit'>°C</span> </div>
                    </div>
                </div>


            }
        </div>
    )
}

export default Overview