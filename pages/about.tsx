import React from 'react';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
        <p>
          Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. 
          Praesent elementum hendrerit tortor. Sed semper lorem at felis. 
          Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien 
          ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;