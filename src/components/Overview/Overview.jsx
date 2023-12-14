import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext';
import { get_current_date, get_tomorrow_date } from '../../utils/time';

const Overview = ({ info }) => {

    const data = useContext(DataContext)
    const [forecast_arr, set_forecast_arr] = useState([])
    const [date_to_show, set_date_to_show] = useState(false)
    const ICON_SIZE_2 = 32;

    useEffect(() => {
        let date_elem = data.forecast_arr.find(date => date.date === data.selected_date)
        set_date_to_show(date_elem)

    }, [[], data.selected_date])


    useEffect(() => {
        const arr = [
            { time: "06:00", text: "Mañana" },
            { time: "12:00", text: "Mediodía" },
            { time: "15:00", text: "Tarde" },
            { time: "21:00", text: "Noche" }
        ]

        let arr_ = []
        arr.forEach((arr_elem) => {
            let time_elem = info.find(elem => elem.time === arr_elem.time)
            arr_.push({ data: time_elem, text: arr_elem.text })
        })
        set_forecast_arr(arr_)


    }, [info])


    return (
        <div className='overview-container'>
            {
                date_to_show &&

                <div className="date">

                    {date_to_show.date === get_current_date() ? "Hoy, " : ""}
                    {date_to_show.date === get_tomorrow_date() ? "Mañana, " : ""}

                    {`${date_to_show.info[0].day_of_week.toLowerCase()} ${date_to_show.info[0].date_dd} `}

                    {/* {`${date_to_show.info[0].day_of_week.toLowerCase()} ${date_to_show.info[0].date_dd} de ${date_to_show.info[0].month_name}`} */}
                </div>
            }
            <div className="day-forecast-container">
                {
                    forecast_arr.map((elem, i) => (

                        elem.data &&

                        <div key={i} className="forecast">
                            <div>{elem.text}</div>
                            <div className="top">
                                <img src={elem.data.icon_url} width={ICON_SIZE_2} height={ICON_SIZE_2} />
                                <div className='temp'>{elem.data.temperature}<span className='unit'>°C</span> </div>
                            </div>
                        </div>
                    ))

                }

            </div>
        </div>
    )
}

export default Overview