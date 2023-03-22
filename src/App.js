import { Routes , Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./Pages/Cart/Cart";
import DetalsItem from "./Pages/DetalsItem/DetalsItem";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/:id" element={<DetalsItem/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
