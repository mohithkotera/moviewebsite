import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Movie from './pages/movie.jsx'
import Favroites from './pages/favroites.jsx'
import Wishlist from './pages/wishlist.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/favroites" element={<Favroites />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  </BrowserRouter>
);
