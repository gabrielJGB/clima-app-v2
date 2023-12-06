import './styles/App.scss'
import Home from './pages/Home'
import DataProvider from './context/DataContext'

const App = () =>{
  

  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App
