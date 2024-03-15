import React from 'react';
import './HomePage.css'; // Make sure to import the CSS file

function HomePage() {
  return (
    <div className="home">
      <header>
        <nav>
          <div className="logo">LOGO</div>
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
      </header>

      <div className="main-content">
        <div className="welcome-section">
          <h1>Welcome to our website</h1>
        </div>

        <div className="login-section">
          <h2>Hello! Welcome back.</h2>
          <p>Log in with your data that you entered during your registration.</p>
          
          <form className="login-form">
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Start now!</button>
            <a href="/forgot-password">Forgot Password</a>

            <div className="divider">OR</div>
            
            <button className="google-sign-in">Sign in with Google</button>
          </form>
          
          <div className="sign-up">
            Don't have an account? <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
