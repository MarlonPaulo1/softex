import arrow from '../../assets/arrow.svg'
import './style.css'

function Form({ counter, setCounter, newProduct, setNewProduct, priceProduct, setPriceProduct, handleSubmit }) {
  function incrementedButton() {
    setCounter(counter + 1)
  }

  function decrementedButton() {
    if(counter <= 1) {
        return
    }

    setCounter(counter - 1)
  }

     return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Novo Produto" 
                value={newProduct} 
                onChange={(e) => setNewProduct(e.target.value)}
            />
            <div className="amount">
                <button type="button" className='arrow' onClick={() => decrementedButton()}>
                    <img src={arrow} alt="left arrow" />    
                </button>
                <span>{counter}</span>
                <button type="button" className='arrow right' onClick={() => incrementedButton()}>
                    <img src={arrow} alt="left arrow" />    
                </button>
            </div>
            <div className="price">
                <input 
                    type="number" 
                    placeholder='Valor do Produto' 
                    value={priceProduct}
                    onChange={(e) => setPriceProduct(e.target.value)}
                />
            </div>
            <button type="submit">Add Produto</button>
        </form>
    )
}

export default Form