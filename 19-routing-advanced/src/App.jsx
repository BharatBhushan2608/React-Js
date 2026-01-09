import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import {  Route , Routes  } from "react-router-dom";
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className=' bg-black h-screen text-white '>
       <Navbar />
       <Navbar2 />
       <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/courses' element={ <Courses />} />

          {/* NOTE: Dynamic Routing */}
          <Route path='/courses/:id' element={ <CourseDetails /> } />

          {/* NOTE: Nestesd Routing */}
          <Route path='/product' element={ <Product />}> 
            <Route path='mens' element={ <Mens />} />
            <Route path='womens' element={ <Womens />} />
            <Route path='kids' element={ <Kids />} />
          </Route>



          
          <Route path='*' element={ <NotFound />} />
       </Routes>
       <Footer />
    </div>
  )
}

export default App
