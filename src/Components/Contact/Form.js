import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9x9d8k', 'template_le2q90q', form.current, '1A2bMegtfHE3cwCEM')
      .then(function (response) {
        window.alert('Message sent successfully')
      }, function (error) {
        console.log('FAILED...',);
      });
    e.target.reset()
  };

  return (
    <div className="formWrap">
      <h3>Tell us about your project</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequatur optio quia corporis! Minima non in voluptatem magnam vel porro!</p>

      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <div className='input'>
            <label>Your Name</label> <br />
            <input type="text" name="user_name" required />
          </div>

          <div className="double">
            <div className='input'>
              <label>Email</label> <br />
              <input type="email" name="user_email" required />
            </div>

            <div className='input'>
              <label>Phone</label><br />
              <input type="text" name="phone" required />
            </div>
          </div>

          <div className='input'>
            <label>Message</label>
            <textarea name="message" required />
          </div>

          <button onclick="sendEMail();">Send</button>


        </form>
      </div>
    </div>
  );
};


export default Form


