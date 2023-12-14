export const  group_by_date = (data) => {
    
    const result = {};
    data.weatherdata.forecast.tabular.time.forEach((item, index) => {
      const fecha = item.date.date;

      if (!result[fecha]) {
        result[fecha] = [];
      }

      let item_data = get_item_obj(item)
      result[fecha].push(item_data);
    });


    const array_final = Object.entries(result).map(([fecha, datos]) => ({
      date: fecha,
      info: datos,
      max: get_max_min(datos).max,
      min: get_max_min(datos).min,
    }));


/*
    array_final.forEach((elem, i) => {
      if ((i + 1) < array_final.length) {
        let x = array_final[i + 1].info[0]
        elem.info.push(x)
      }
    })
*/


    return array_final;
  }


  function get_item_obj(item) {


    return {
      temperature: parseInt(item.temperature.value),
      icon_url: `https://www.meteobahia.com.ar/imagenes/new/${item.symbol.number}.png`,

      day_of_week: item.date.dayOfWeek,
      date_dd: parseInt(item.date.day),
      date_dd_mm: `${parseInt(item.date.day)}/${item.date.month}`,

      month_name: item.date.monthName,
      time: item.date.time,
      precipitation: item.precipitation.value,
      date_yy: item.date.year,
      wind: {
        deg: item.windDirection.deg,
        speed: item.windDirection.name.split(" km/h del ")[0],
        code: item.windDirection.name.split(" km/h del ")[1],
      },
      description: item.symbol.name.replace("Parcialmente", "Parcialm."),
      pressure: item.pressure.value,
      cold_risk: item.coldrisk.value,
      heat_risk: item.heatrisk.value,
      frost_risk: item.frostrisk.value

    }
  }

  const  get_max_min = (arr) => {

    let temp_arr = arr.map(fila => fila.temperature);
    let max = Math.max(...temp_arr);
    let min = Math.min(...temp_arr);

    return { max, min };
  }
