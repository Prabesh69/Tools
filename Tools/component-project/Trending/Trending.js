import React from 'react'
import Latestnews from './Latestnews'
import './Trending.css'
import {BsFire} from 'react-icons/bs'
function Trending() {
  return (
   <section className='trending'>
    <div className="text">
    <p className='trending-p'>Trending-<BsFire className='icon-fire' size={24}/></p>
    </div>
    
   <div className="content">
    <Latestnews/>
      </div>
   </section>
  )
}

export default Trending