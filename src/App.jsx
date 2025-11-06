import React from 'react';
import './App.css'; 

const HomePage = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-brand">Adnan Waasi</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <img src="/facepic.jpg" alt="Your Profile Picture" className="profile-pic" width="150" height="150" />
            <h1>Hello, I'm Adnan Waasi</h1>
            <p className="hero-tagline">A Software Engineer specializing in AI and backend technologies .</p>
            <a href="#portfolio" className="cta-button">View My Work</a>
          </div>
        </section>

        <section id="about" className="section-block">
          <h2>About Me</h2>
          <p>Write a short bio here. Talk about your passion, skills, and what you do. This is a great place to introduce yourself to visitors and give them a sense of who you are.</p>
        </section>

        <section id="portfolio" className="section-block">
          <h2>Projects</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <h3>Project 1</h3>
              <p> deepfake detection for my own satisafaction using tensorflow and keras 
                types of neural network are CNN + LSTM.</p>
              <a href="https://www.github.com/adnanwaasi/deepfake">Learn More</a>
            </div>
            <div className="portfolio-item">
              <h3>Project 2</h3>
              <p> this is my code generator , you can vibe code anything easily with this  </p>
              <a href="https://github.com/adnanwaasi/mcpwidows/tree/main/utils">Learn More</a> <br/>
            </div>
            <div className="portfolio-item">
              <h3>Project 3</h3>
              <p>A personal project exploring the capabilities of a unique model architecture and detecting fraud in financial transactions.</p>
              <a href="https://github.com/adnanwaasi/my_weird_model" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            <div className="portfolio-item">
              <h3>More Projects</h3>
              <p>Explore more of my projects on GitHub.</p>
              <a href="https://github.com/adnanwaasi" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
            </div>
            {/* Add more portfolio items here */}
          </div>
        </section>

        <section id="photos" className="section-block">
          <h2>Photo Gallery</h2>
          <div className="photo-gallery">
            <img src="/CTF.jpg" alt="Photo 1" className="gallery-photo" />
            <img src="/ram_crash.jpg" alt="Photo 2" className="gallery-photo" />
            <img src="/won.jpg" alt="Photo 3" className="gallery-photo" />
            {/* Add more photos here */}
          </div>
        </section>

        <section id="contact" className="section-block">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out to me via email or connect with me on social media!</p>
          <p className="contact-links">
            Email: <a href="mailto:adnanwaasi1@gmail.com">adnanwaasi1@gmail.com</a><br/>
            LinkedIn: <a href="https://www.linkedin.com/in/adnan-waasi-69b077266/">linkedin.com/in/adnan-waasi-69b077266/</a><br/>
            GitHub: <a href="https://github.com/adnanwaasi">github.com/adnanwaasi</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; Adnan Waasi 08102025</p>
      </footer>
    </>
  );
};

export default HomePage;