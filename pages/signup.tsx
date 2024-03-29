import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Signup: React.FC = () => {
  return (
    <div className="signup-page-wrapper">
      <Header />

      {/* Signup Form */}
      <section className="signup-form">
        <h2>Sign Up</h2>
        {/* Add your signup form here */}
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Sign Up</button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signup;