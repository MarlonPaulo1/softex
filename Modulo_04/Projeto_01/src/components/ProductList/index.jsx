import { useState } from 'react'
import list from '../../data/data'
import Card from '../Card'
import './style.css'

function ProductList({ handleClick }) { 
  return (
    <section className='Product_list'>
        {list.map((item) => (
            <Card key={item.id} item={item} handleClick={handleClick} />
        ))}
    </section>
  )
}

export default ProductList