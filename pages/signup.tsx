import React from 'react';
import Layout from '../components/Layout';
import formStyle from '../styles/form.module.css';

const Signup: React.FC = () => {
  return (
    <Layout>
    <div className={formStyle['login-page-wrapper']}>
      {/* Signup Form */}
      <section className={formStyle['login-form']}>
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
    </div>
    </Layout>
  );
};

export default Signup;