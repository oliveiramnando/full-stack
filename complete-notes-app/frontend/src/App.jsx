import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div data-theme="forest">
      <button className='btn btn-primary'>Click-me</button>
      <Routes>
        <Route path="/" element={<HomePage />} /> // when we visit / the element is the homepage
        <Route path="/create" element={<CreatePage />} /> 
        <Route path="/note/:id" element={<NoteDetailPage />} /> 
      </Routes>
    </div>
  )
}

export default App