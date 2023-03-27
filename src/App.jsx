import React from "react";
import { Routes, Route } from "react-router-dom"
import {
  heroapi, albumapi, topchartapi
} from "./data/data";
import Layout from './components/Layout'
import Hero from "./components/Hero";
import Album from "./components/Album";
import TopChart from "./components/TopCharts";



const App = () => {
  return (
    <>
      <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Hero endpoint={heroapi} />} />
        <Route path="/album" element={<Album endpoint={albumapi} />} />
        <Route path="/topchart" element={<TopChart endpoint={topchartapi } />} />
       </Route>
      </Routes>
    </>
  )
}

export default App
;
