import cities from '../data/cities.json'

export default  (query) => {
    if (query != "") {

         let resp = cities.filter(city => {
            let city_lower = city.nombre.toLowerCase()
            if (city_lower.includes(query)) {
                return city
            }
        })
        
        return resp

    }
}