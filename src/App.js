import React from "react";
import { Routes, Route } from 'react-router-dom';
import LOGIN from './components/login/login'
import Portfolio from "./components/portfolio/portfolio"

function App (){
  return(
    <>
    <Routes>
      <Route path = "/" element={<LOGIN/>}/>
      <Route path = "/portfolio" element={<Portfolio/>}/>
    </Routes>
    </>
  )
}
export default App;