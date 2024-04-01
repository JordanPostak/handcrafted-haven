import React from 'react';
import Layout from '../components/Layout';
import formStyle from '../styles/form.module.css';

const Login: React.FC = () => {
    return (
      <Layout> {/* Wrap your content with Layout */}
        <div className={formStyle['login-page-wrapper']}>
          {/* Login Form */}
          <section className={formStyle['login-form']}>
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
        </div>
      </Layout>
    );
  };
  
  export default Login;