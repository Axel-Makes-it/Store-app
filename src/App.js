import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Products from "./components/Products";
import SlideBanner from "./components/SlideBanner";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SlideBanner />
      <Products />
    </div>
  );
}

export default App;
