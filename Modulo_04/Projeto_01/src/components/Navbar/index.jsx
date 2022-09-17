import './style.css'

function Navbar({ setShow, size }) {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>My Book Shopping</span>
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        <i class="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar