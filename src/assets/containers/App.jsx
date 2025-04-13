import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to my website!</h1>
        <p>I'm Octaviusb, a full-stack developer with a passion for learning and sharing knowledge.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;