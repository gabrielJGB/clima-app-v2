export const get_current_date = ()=> {

    let date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`

  }




export const get_month_name = monthNumber=> {
  
  var months = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  return months[monthNumber];

}

export function get_day_of_week(fechaString) {
  // Dividir la cadena en año, mes y día
  const [ano, mes, dia] = fechaString.split('-');

  // Crear un objeto Date con la fecha proporcionada
  const fecha = new Date(ano, mes - 1, dia);

  // Obtener el número del día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
  const numeroDiaSemana = fecha.getDay();

  // Array con los nombres de los días de la semana
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // Devolver el nombre del día de la semana
  return diasSemana[numeroDiaSemana];
}



// export const get_day_of_week = dateString =>{
  
  

//   let dateObject = new Date();

//   let year = dateString.split("-")[2]
//   let month = parseInt(dateString.split("-")[1])
//   let date = parseInt(dateString.split("-")[0] - 1)

//   dateObject.setDate(date)
//   dateObject.setMonth(month - 1)
//   dateObject.setFullYear(year)

  
//   let daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];


//   let dayIndex = dateObject.getDay();


//   return daysOfWeek[dayIndex];
// }