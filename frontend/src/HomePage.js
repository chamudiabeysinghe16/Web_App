import React from 'react';
import './HomePage.css'; // Make sure the CSS file is in the same directory as this JS file

function HomePage() {
  return (
    <div className="home">
      <nav className="home__nav">
        <div className="nav__section">
          <a href="#home" className="nav__link active">HOME</a>
          <a href="#register" className="nav__link">Register</a>
        </div>
      </nav>
      <main className="home__main">
        <section className="main__welcome">
          <h1>Welcome to our website</h1>
        </section>
        <section className="main__login">
          <h2>Hello! Welcome back.</h2>
          <p>Log in with your data that you entered during your registration.</p>
          <form className="login__form">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <a href="#forgot" className="form__forgot">Forgot Password</a>
            <button type="submit" className="form__submit">Start now!</button>
          </form>
          <div className="login__or">OR</div>
          <button className="login__google">Sign in with Google</button>
          <p className="login__signup">
            Don't have an account? <a href="#signup">Sign up</a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
