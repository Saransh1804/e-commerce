import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Announcement from '../components/Announcement/Announcement'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
    <Announcement />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <NewsLetter />
    <Footer />
    </div>
  )
}

export default Home