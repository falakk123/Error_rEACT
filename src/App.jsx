import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/SignUp'
import Page404 from './pages/Page404'
import Products from './pages/Products'
import NavigationBar from './Components/NavigationBar'
import About from './pages/About'
import Categorey from './pages/Categorey'
import Brands from './pages/Brands'
import BrandPage from './pages/BrandPage'
import CategoreyPage from './pages/CategoreyPage'
import ContactUs from './pages/ContactUs'
import Terms from './pages/Terms'
import MyFooter from './Components/MyFooter'






export default function App() {

  const [user, setUser] = useState(true)
  return (
    <>

      <NavigationBar />

      {
        user

          ?
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/categorey" element={<Categorey />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/:brandName" element={<BrandPage />} />
              {/* <Route path="/products/:productID" element={<ProductPage />} /> */}
              <Route path="/categorey/:categoreyName" element={<CategoreyPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/singup" element={<Singup />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/terms" element={<Terms />} />

            </Routes>
          )
          :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/login" replace={true} />} />
              <Route path="*" element={<Page404 />} />
            </Routes>



          )

      }

      <div >
        <MyFooter />

      </div>
    </>
  )

}

