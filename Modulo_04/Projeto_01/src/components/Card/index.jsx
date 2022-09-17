import './style.css'

function Card({ item, handleClick }) {
    const { id, title, author, price, img } = item;

  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt={title} />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>R$ {(price).toFixed(2)}</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
    </div> 
  )
}

export default Card