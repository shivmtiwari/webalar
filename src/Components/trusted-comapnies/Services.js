import React from 'react'
import './style.css'

const Services = () => {
  return (
    <>
      <div className="service">
        <h1> Our services that we provide</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore praesentium incidunt nemo unde totam illum voluptates consequatur sunt aut tenetur minus qui quidem ut recusandae omnis veritatis saepe nulla, </p>
      </div>

      <div className="cards">
        <div className="card cardd">
          <div className="image">
            <img src={require('../../assets/Group73.png')} alt='' />
          </div>
          <div className="content">
            <div className="text">
              <h3>Project1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>

        <div className=" card2">
          <div class="outer outerright">
            <div class="inner"></div>
          </div>
          <div className="card card3">
            <div className="image">
              <img src={require('../../assets/Group72.png')} alt='' />
            </div>
            <div className="content">
              <div className="text">
                <h3>Project1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
          <div class="outer outerright">
            <div class="inner"></div>
          </div>
        </div>

        <div className="card card3">
          <div className="image">
            <img src={require('../../assets/Group75.png')} alt='' />
          </div>
          <div className="content">
            <div className="text">
              <h3>Project1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

