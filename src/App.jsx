import React from 'react'
import TopNav from './components/TopNav' 
import Featured from './components/Featured'
import Delievery from './components/Delievery'
import TopPicks from './components/TopPicks'
import Meal from './components/Meal'
import Categories from './components/Categories'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
       <TopNav />
      <Featured />
      <Delievery/>
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter/>
      <Footer /> 
     

    </div>
  )
}

export default App
