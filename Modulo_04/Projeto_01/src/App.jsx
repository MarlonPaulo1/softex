import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import './styles/global.css'

function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  function handleClick(item) {
    if(cart.indexOf(item) !== -1) return
    setCart([...cart, item])
  }

  function handleChange(item, d){
    const ind = cart.indexOf(item)
    const arr = cart
    arr[ind].amount += d

    if(arr[ind].amount === 0) arr[ind].amount = 1
    setCart([...arr])
  }

  
  return (
    <div className="App">
      <Navbar setShow={setShow} size={cart.length}/>
      {show ? (
        <ProductList handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
