import { useState } from "react"
import Form from "../Form"
import Table from "../Table"
import './style.css'

function List() {
  const [counter, setCounter] = useState(1)
  const [newProduct, setNewProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState('')
  const [itemsTable, setItemsTable] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      counter,
      newProduct,
      priceProduct,
      itemsTable
    }

    if(!newProduct) {
      return
    }

    const newItems = [newItem, ...itemsTable]

    setItemsTable(newItems)
    setNewProduct('')
    setCounter(1)
    setPriceProduct('')
  }

  

  return (
    <>
        <h1>Lista de Compras</h1>
        <Form
          counter={counter}
          setCounter={setCounter}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          priceProduct={priceProduct}
          setPriceProduct={setPriceProduct}
          handleSubmit={handleSubmit}
        />
        <Table 
          counter={counter}
          newProduct={newProduct}
          priceProduct={Number(priceProduct)}
          itemsTable={itemsTable}
        />
    </>  

    
  )
}

export default List