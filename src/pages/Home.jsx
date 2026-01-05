import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import AmalAxisServices from '../components/AmalAxisServices';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <WhyChooseUs />
      <AmalAxisServices />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
