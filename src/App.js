import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Products from "./components/Products";
import SlideBanner from "./components/SlideBanner";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SlideBanner />
      <Products />
      <VideoSection />
    </div>
  );
}

export default App;
