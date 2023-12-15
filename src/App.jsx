import './styles/App.scss'
import Home from './pages/Home'
import DataProvider from './context/DataContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForecastPage from './pages/ForecastPage'
import Layout from './pages/Layout'

const App = () => {


  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/day" element={<ForecastPage />} />

            
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
