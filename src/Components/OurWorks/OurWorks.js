import React from 'react'
import './works.css'
const OurWorks = () => {
    return (
        <section className='ourWorks'>
            <h2>Our Works</h2>
            <div className="workWrap">
                <div className="card">
                    <div className="image">

                    </div>
                    <div className="content">
                        <div className="text">
                            <h3>Project1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="btn">
                            <a href="/"><span class="material-symbols-outlined">call_made</span></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">

                    </div>
                    <div className="content">
                        <div className="text">
                            <h3>Project1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="btn">
                            <a href="/"><span class="material-symbols-outlined">call_made</span></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                    </div>
                    <div className="content">
                        <div className="text">
                            <h3>Project1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="btn">
                            <a href="/"><span class="material-symbols-outlined">call_made</span></a>
                        </div>
                    </div>

                </div>

            </div>

            <div className="Btn"><button>View more</button></div>

        </section>
    )
}

export default OurWorks