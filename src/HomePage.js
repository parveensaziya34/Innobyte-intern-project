import React from 'react';
import './home.css'; // Ensure this import is correct

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container px-6 py-3 flex justify-between items-center">
          <a className="text-xl font-bold text-white logo" href="#kingsukhn">King Sukh Guest House</a>
          <div className="flex items-center space-x-4">
            <a href="#home" className="navbar-item" >Home</a>
            <a href="#rooms" className="navbar-item">Rooms</a>
            <a href="#about" className="navbar-item">About</a>
            <a href="#service" className="navbar-item">Services</a>
            <a href="#contact" className="navbar-item">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to King Sukh Guest House</h1>
            <p className="mt-4 text-lg">Experience comfort and luxury in the heart of nature</p>
            <a href="https://wa.me/1234567890" target='_blank'  rel="noreferrer" className="mt-8 inline-block bg-yellow-500 text-white font-bold py-3 px-6 rounded hover:bg-yellow-600">Book Now</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section__container about__container" id="about">
        <div className="about__content">
          <div className="about__text-and-image">
            <div className="about__image-container">
              <img src="out.jpg" alt="King Sukh Guest House" className="about__image" />
            </div>
            <div className="about__text">
              <p className="section__subheader">ABOUT US</p>
              <h2 className="section__header">The Best Holidays Start Here!</h2>
              <p className="section__description">
                Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
              </p>
              <h4><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></h4>
              <h4><a href="tel:+919007062180"> Contact us: +91 9007062180 </a></h4>
              <div className="about__btn">
                <a href="https://wa.me/1234567890" target='_blank'  rel="noreferrer">
                  <button className="btn">BOOK NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section__container room__container" id="rooms">
        <p className="section__subheader">OUR LIVING ROOM</p>
        <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
        <div className="room__grid">
          <div className="room__card">
            <div className="room__card__image">
              <img src="small.jpg" alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Cozy Haven Room</h4>
              <p>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
              <h5>Starting from <span>Rs. 1000/night</span></h5>
              <a href="https://wa.me/1234567890" target='_blank'  rel="noreferrer">
                <button className="btn">BOOK NOW</button>
              </a>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src="room1.jpg" alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Spacious Serenity Suite</h4>
              <p>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
              <h5>Starting from <span>Rs. 1500/night</span></h5>
              <a href="https://wa.me/1234567890" target='_blank'  rel="noreferrer">
                <button className="btn">BOOK NOW</button>
              </a>
            </div>
          </div>
        </div>
      </section>

       {/* Service Section */}
       <section className="service" id="service">
        <div className="section__container service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li>
                <span><i className="ri-shield-star-line"></i></span>
                High Class Security
              </li>
              <li>
                <span><i className="ri-24-hours-line"></i></span>
                24 Hours Room Service
              </li>
              <li>
                <span><i className="ri-restaurant-2-fill"></i></span>
                Restaurant
              </li>
              <li>
                <span><i className="ri-map-2-line"></i></span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 King Sukh Guest House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;