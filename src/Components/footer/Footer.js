import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className='item1'><h1>Let's work <br /> togather</h1></div>
        <div className='item2'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, cupiditate delectus sunt dolorum ea dolores illum error. Facere, sapiente corporis.</p>
          <button>Lets Talk</button>
        </div>
      </div>

      <div className="middle">
        <div className="item1">
          <div><div className="icon">
            <i class="fa-sharp fa-solid fa-square"></i>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
          </div>
            <p>logoispum</p>
          </div>

          <div className="socials">
            <a href="/"><i class="fa-brands fa-instagram"></i></a>
            <a href="/"><i class="fa-brands fa-twitter"></i></a>
            <a href="/"><i class="fa-brands fa-facebook"></i></a>
          </div>
        </div>

        <div className="item2">
          <h2 className="heading">
            Address
          </h2>
          <p>0199 Taylor Park, North Dakota, USA</p>
        </div>

        <div className="item3">
          <h2 className="heading">
            Call us on
          </h2>
          <ul>
            <li><a href="tel:+1 9872342023">+1 98723 42023</a></li>
            <li><a href="mailto:info@logoipsum.com">info@logoipsum.com</a></li>
          </ul>
        </div>

        <div className="item4">
          <h2 className="heading">
            Our Policies
          </h2>
          <ul>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Refund Policy</a></li>
          </ul>

        </div>

      </div>

      <div className="bottom">
        <hr />
        <p>Copyright © Webalar. All Rights Reserve</p>
      </div>



    </footer>
  )
}

export default Footer