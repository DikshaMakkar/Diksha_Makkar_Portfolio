import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HeroImg from '../components/HeroImg';
import Work from '../components/Work';
import Footer from '../components/Footer';

function Home() {
  return (
    <section>
      <NavigationBar/>
      <HeroImg/>
      <Work/>
      <Footer/>
    </section>
  );
}

export default Home;
