export const get_current_date = ()=> {

    let date = new Date()

    let year = date.getFullYear()
    let month = String(date.getMonth()+1).padStart(2, '0') 
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()

    

    return `${year}-${month}-${day}`

  }

export const get_tomorrow_date = () =>{
  
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); 
  const day = tomorrow.getDate().toString().padStart(2, '0');

  const tomorrowDate = `${year}-${month}-${day}`;
  return tomorrowDate;

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
  
  const [ano, mes, dia] = fechaString.split('-');
  const fecha = new Date(ano, mes - 1, dia);
  const numeroDiaSemana = fecha.getDay();
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  
  return diasSemana[numeroDiaSemana];
}

