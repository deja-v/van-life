import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import "./server.js"
import Vans from './pages/vans/Vans.jsx';
import VanDetails from './pages/vans/VanDetails.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Reviews from './pages/host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVan from './pages/host/HostVan.jsx';
import HostVanDetail from './pages/host/HostVanDetail.jsx';
import HostVanInfo from './pages/host/HostVanInfo.jsx';
import HostVanPhotos from './pages/host/HostVanPhotos.jsx'
import HostVanPricing from './pages/host/HostVanPricing.jsx'
import NotFound from './pages/NotFound.jsx';
import Login from './pages/login.jsx';
import AuthRequired from './components/AuthRequired.jsx';

export default function App() {
  const [authenticated,setAuthenticated] = useState(false)
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />}/>
            <Route path="/vans/:id" element={<VanDetails />}/>
            <Route path='/login' element={<Login setAuthenticated={setAuthenticated}/>}/>
            
            <Route element={<AuthRequired authenticated={authenticated}/>}>
              <Route path="/host" element={<HostLayout/>}>
                <Route index element={<Dashboard />} />
                <Route path="/host/income" element={<Income/>}/>
                <Route path="/host/vans" element={<HostVan/>}/>
                <Route path="/host/reviews" element={<Reviews/>}/>
                <Route path="/host/vans/:id" element={<HostVanDetail/>}>
                  <Route index element={<HostVanInfo/>}/>
                  <Route path="/host/vans/:id/photos" element={<HostVanPhotos/>}/>
                  <Route path="/host/vans/:id/pricing" element={<HostVanPricing/>}/>
                </Route>

              </Route>
            </Route>

            <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}