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
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <h3>Project 1</h3>
              <p> deepfake detection for my own satisafaction using tensorflow and keras 
                types of neural network are CNN + LSTM.</p>
              <a href="https://www.github.com/adnanwaasi/deepfake">Learn More</a>
            </div>
            <div className="portfolio-item">
              <h3>Project 2</h3>
              <p>Brief all my weird projects here i just love to make them using tensorflow and torch according to my interests.</p>
              <a href="https://www.github.com/adnanwaasi/my_models">Learn More</a> <br/>
              <a href="https://www.github.com/adnanwaasi/my_weird_model">for my future projects</a>
            </div>
            {/* Add more portfolio items here */}
          </div>
        </section>

        <section id="contact" className="section-block">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out to me via email or connect with me on social media!</p>
          <p className="contact-links">
            Email: <a href="mailto:adnanwaasi1@gamil.com">adnanwaasi1@example.com</a><br/>
            LinkedIn: <a href="https://linkedin.com/in/adnanwaasi">linkedin.com/in/adnanwaasi</a><br/>
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