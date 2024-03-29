import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login: React.FC = () => {
  return (
    <div className="login-page-wrapper">
      <Header />

      {/* Login Form */}
      <section className="login-form">
        <h2>Login</h2>
        {/* Add your login form here */}
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;