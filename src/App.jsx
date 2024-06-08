import './styles/App.scss'
import './error.css'
import Home from './pages/Home'
import DataProvider from './context/DataContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForecastPage from './pages/ForecastPage'
import Layout from './pages/Layout'
import Satellite from './pages/Satellite'

const App = () => {

 /* <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/day" element={<ForecastPage />} />
            <Route path="/satellite" element={<Satellite />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )*/
  
  return (

    <div className="error">

      <h2>Fuera de servicio</h2> 
      
    </div>
    
   )
}

export default App
