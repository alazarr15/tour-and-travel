import React from 'react'
import "./Home.css"

function Home () {
  return (
    <>
    <div className="home-container">
        <img src="village.jpg" alt="village" />
        <div className="nav">
            <li>Home</li>  <img src="home.png" alt="home" className='home' />
            <li>About</li> <img src="about.png" alt="about" className='about' />
            <li>Packages</li> <img src="packages.png" alt="packages" className='packages' />
            <li>Blog</li> <img src="blog.png" alt="blog" className='blog' />
            <li>Contact</li> <img src="contact.png" alt="contact" className='contact' />
        </div>
        <div className="home-info">
            <h1>Explore The Exotic</h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. A, molestiae earum? 
                Modi vel quae, aliquid amet
                consequuntur porro nisi culpa.</p>
            <button>Explore Now</button>

        </div>
        
    </div>
    </>
  )
}

export default Home