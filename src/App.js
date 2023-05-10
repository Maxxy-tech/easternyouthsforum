import React from "react";
import "./components/header.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import Volunteers from "./components/Volunteers";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import SignUp from "./components/SignUp";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="animate-fade-enter bg-gray-600">
      <Header />
      <Hero />

      <AboutPage />

      <Testimonial />
      <Form />
      <Volunteers />
      <SignUp />

      <Footer />
    </div>
  );
};
export default App;
