import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import HeroImgPro from '../components/HeroImgPro';
import Form from '../components/Form';

function Contact() {
  return (
      <div className="contact">
        <NavigationBar />
        <HeroImgPro heading="CONTACT" text="Lets have a quick chat!"/>
        <Form />
        <Footer/>
      </div>
  );
}

export default Contact;
