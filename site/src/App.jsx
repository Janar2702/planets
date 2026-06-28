import React, { useState } from 'react'
import Planets from './pages/Planets'
import About from './pages/About'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('planets')

  return (
    <div className="app-wrapper">
      <nav className="main-nav">
        <button 
          className={currentPage === 'planets' ? 'active-nav-btn' : ''} 
          onClick={() => setCurrentPage('planets')}
        >
          Каталог планет
        </button>
        <button 
          className={currentPage === 'about' ? 'active-nav-btn' : ''} 
          onClick={() => setCurrentPage('about')}
        >
          О проекте
        </button>
      </nav>

      <main className="page-content">
        {currentPage === 'planets' && <Planets />}
        {currentPage === 'about' && <About />}
      </main>
    </div>
  )
}

export default App
