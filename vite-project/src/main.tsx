import React from 'react'
import ReactDOM from 'react-dom/client'
import Componente1 from './Components/Componente1'
import Componente2 from './Components/Componente2'
import './styles.css'
import Componente3 from './Components/Componente3'
import Subscription from './Components/Subscription'
import Componente4 from './Components/Componente4'
import Carrousel from './Components/Carrousel'
import Form from './Components/Form'
import Footer from './Components/Footer'
import { ThemeProvider } from './Components/theme-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Componente1 />
      <Componente2 />
      <Componente3 />
      <Subscription />
      <Componente4 />
      <Carrousel />
      <Form />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
)
