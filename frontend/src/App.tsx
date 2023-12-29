import React from 'react'
import { Header } from './components/header'
import { globalStyles } from './styles/global'
import { Home } from './pages/home'

import 'react-toastify/dist/ReactToastify.css'

globalStyles()

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
