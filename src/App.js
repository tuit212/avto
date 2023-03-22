import { Routes , Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import DetalsItem from "./Pages/DetalsItem/DetalsItem";
import Home from "./Pages/Home/Home";
import './App.scss'


function App() {
  const [cart , setCart] = useState([]);
  const [warng , setWarng] = useState(false);

  const handleClick = (item) =>  {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      setWarng(true);
      setTimeout(() => {
        setWarng(false);
      } , 2000) 

      return;
    }
    setCart([...cart , item]);
  }

  


  return (
    <div className="App">
      <Header  size={cart.length} />
      {
        warng && <div className="warning"> oldin qo'shilgan </div>
      }
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick} />} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/about" element={<About/>}  />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}  />} />
        <Route path="/:id" element={<DetalsItem handleClick={handleClick} cart={cart}  />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
