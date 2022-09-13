import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="content">
        <h1>Let's create something greate togather</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident accusantium laboriosam, molestias sed fugiat voluptate nobis mollitia, numquam vero, nostrum alias minus. Minima ea quidem eligendi, rerum corporis exercitationem.</p>

        <button>Let's talk</button>

      </div>
      <div className="image">
        <img src={require('../../assets/hero.png')} alt='' />

      </div>
    </div>
  )
}

export default Hero