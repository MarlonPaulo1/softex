import { useEffect } from "react"
import { useState } from "react"
import './style.css'

function Cart({ cart, setCart, handleChange }) {
    const [price, setPrice] = useState(0)

    function handleRemove(id) {
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr)
        handlePrice()
    }

    function handlePrice() {
        let ans = 0
        cart.map((item) => (ans += item.amount * item.price))
        setPrice(ans)
    }

    useEffect(() => {
        handlePrice()
    })

  return (
    <article>
        {cart.map((item) => (
            <div className="cart_box" key={item.id}>
                <div className="cart_img">
                    <img src={item.img} alt={item.title} />
                    <p>{item.title}</p>
                </div>
                <div className="calc-price">
                    <div className="buttons">
                        <button className="plus" onClick={() => handleChange(item, 1)}>+</button>
                        <button className="quant">{item.amount}</button>
                        <button className="min" onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <div className="price-container">
                        <span className="price">R$ {(item.price).toFixed(2)}</span>
                        <button className="trash" onClick={() =>handleRemove(item.id)}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                </div>
            </div>
        ))}
        <div className="total">
            <span>Total Price of your Cart</span>
            <span>R$ {(price).toFixed(2)}</span>
        </div>
    </article>
  )
}

export default Cart