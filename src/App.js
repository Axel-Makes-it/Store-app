import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PosterSection from "./components/PosterSection";
import Products from "./components/Products";
import SlideBanner from "./components/SlideBanner";
import VideoSection from "./components/VideoSection";
import CartPage from "./components/CartPage";

function Root() {
  return (
    <div>
      <Nav />
      <Hero />
      <SlideBanner />
      <Products />
      <VideoSection />
      <PosterSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/slide" element={<SlideBanner />} />
          <Route path="/video" element={<VideoSection />} />
          <Route path="/poster" element={<PosterSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
