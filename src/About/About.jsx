import React from 'react';
import "./about.css"

function About (){
  return (
    <>
    <div className="about-container">
        <div className="about-content">
    <div className="about-info">
   <span>Punt</span>  is a premier tour and travel agency that offers unparalleled 
    experiences for adventurous explorers. Founded on the principle of
    providing exceptional service and unforgettable journeys, Punt has built a
    reputation for curating unique itineraries that take travelers
    off the beaten path. From stunning natural landscapes to 
    vibrant cultural destinations, the team at Punt leverages 
    their extensive knowledge and global connections to craft
    bespoke tours that capture the true essence of each location.
    Punt is a premier tour and travel agency that offers unparalleled 
    experiences for adventurous explorers. Founded on the principle of
    providing exceptional service and unforgettable journeys, Punt has built a
    reputation for curating unique itineraries that take travelers
    off the beaten path. From stunning natural landscapes to 
    vibrant cultural destinations, the team at Punt leverages 
    their extensive knowledge and global connections to craft
    bespoke tours that capture the true essence of each location.
    </div>
    <img src="agency-logo.png" alt="logo" className="agency-logo" />
        </div>

        <div className="about-sociaLinks">
           <img src="instagram.png" alt="instagram" />
          <img src="telegram.png" alt="telegram" />
          <img src="facebook.png" alt="facebook" />
        </div>


        <div className="about-second">
        <h1>Let's Explore</h1>

    <div className="about-cards">
        <div className="card">
          <img src="adventure.jpg" alt="village" />
        <div className="card-content">Adventure Tours</div>
        </div>

        <div className="card">
          <img src="rafting.jpg" alt="village" />
        <div className="card-content">Rafting Tours</div>
        </div>

        <div className="card">
          <img src="safari.jpg" alt="village" />
          <div className="card-content">Safari Tours</div>
        </div>

        <div className="card">
          <img src="island.jpg" alt="village" />
        <div className="card-content">Island Tours</div>
        </div>

        <div className="card">
          <img src="village.jpg" alt="village" />
        <div className="card-content">Experential Tours</div>
        </div>

        <div className="card">
          <img src="hiking.jpg" alt="village" />
          <div className="card-content">Hiking Tours</div>
        </div>
      </div>
      </div>

        
       
    </div>
    </>
  )
}

export default About