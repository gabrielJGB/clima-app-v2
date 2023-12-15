import React, { useContext, useEffect, useState } from 'react'
import { get_current_date, get_tomorrow_date } from '../../utils/time'
import drop from '../../assets/drop-color.png'
import { DataContext } from '../../context/DataContext'
import { useNavigate } from 'react-router-dom'

const DayElement = ({ info, date, temp }) => {
    const [forecast_arr, set_forecast_arr] = useState([])
    const data = useContext(DataContext)

    const navigate = useNavigate();

    const ICON_SIZE = 40;

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


    const get_sum = (total, num) => {
        return total + parseFloat(num.precipitation);
    }


    const get_drop_arr = (mm) => {

        let num = parseFloat(mm)

        if (num === 0)
            return []
        else if (num > 0.1 && num <= 3)
            return [0]
        else if (num > 3 && num <= 6)
            return [0, 1]
        else if (num > 6 && num <= 20)
            return [0, 1, 2]
        else if (num > 20 && num <= 50)
            return [0, 1, 2, 3]
        else if (num > 50)
            return [0, 1, 2, 3, 4]
        else {
            return []
        }

    }

    return (
        <div
            className="day-element"
            onClick={() => {
                data.set_selected_date(date)
                navigate("/day")
            }}
        >
            <div className="header">
                <div className="day">


                    {
                        date === get_current_date() ?
                            "Hoy"
                            :
                            date === get_tomorrow_date() ?
                                "Mañana"
                                :
                                `${info[0].day_of_week} ${info[0].date_dd} `
                    }

                    <div className='maxmin'>
                        <div> Max: <span className="max">{temp.max}</span><span className='unit'>°C</span></div>
                        <div> Min: <span className="min">{temp.min}</span><span className='unit'>°C</span></div>
                    </div>
                </div>
                <div className="drops">

                    {
                        get_drop_arr(info.reduce(get_sum, 0)).map((e, i) => (
                            <img className='drop' src={drop} key={i} width={11} height={11} />
                        ))
                    }
                </div>
            </div>
            <div className="main">
                {

                    forecast_arr.map((elem, i) => (


                        elem.data &&

                        <div key={i} className="elem">
                            <div className="text">{elem.text}</div>
                            
                                <img src={elem.data.icon_url} width={ICON_SIZE} height={ICON_SIZE} />
                            
                            <div className="temp">{elem.data.temperature}<span className='unit'>°C</span> </div>
                        </div>
                    ))

                }






            </div>
        </div>
    )
}

export default DayElement