import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHome from './components/Dashboard/DashboardHome';

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Routes>

            <Route path='/*' element={<DashboardHome />} />

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
