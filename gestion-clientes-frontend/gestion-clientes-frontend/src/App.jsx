import { useState } from 'react'

import './App.css'
import ListClientesComponent from './components/ListClientesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import AddClienteComponent from './components/AddClienteComponent'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListClientesComponent />} />
            <Route path="/clientes" element={<ListClientesComponent />} />
            <Route path="/add-cliente" element={<AddClienteComponent />} />
            <Route path="/edit-cliente/:id" element={<AddClienteComponent />} />
          </Routes>

        </div>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
