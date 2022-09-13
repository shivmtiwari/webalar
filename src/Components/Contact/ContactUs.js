import React from 'react'
import './contact.css'
import Form from './Form'

const ContactUs = () => {
    return (
        <section>
            <h2>Connect with us</h2>
            <div className="contact">
                <div className='left'>
                    <Form />
                </div>
                <div className="right">
                    <div className='address'>
                        <h3>Addres</h3>
                        <p>0199 Taylor Park, North Dakota, USA</p>
                        <hr />
                    </div>
                    <div className='callUs'>
                        <h3>Call us on</h3>
                        <ul>
                            <li><a href="tel:+1 9872342023">+1 98723 42023</a></li>
                            <li><a href="mailto:info@logoipsum.com">info@logoipsum.com</a></li>
                        </ul>
                        <hr />
                    </div>
                    <div className='socials'>
                        <h3>Social Media</h3>
                        <div className="social-icons">
                            <a href="/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="/"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs