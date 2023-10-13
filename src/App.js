import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SlideBanner from "./components/SlideBanner";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SlideBanner />
    </div>
  );
}

export default App;
