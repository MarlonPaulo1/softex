import './style.css'

function Table({ itemsTable }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Preço Total</th>
                </tr>    
            </thead>
            <tbody>
                {
                    itemsTable.map((item, index) => (
                        
                        <tr key={index}>
                            <td data-label="Produto">{item.newProduct}</td>
                            <td data-label="Quantidade">{item.counter}</td>
                            <td data-label="Preço Unitário">{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(item.priceProduct)}</td>
                            <td data-label="Preço Total">{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(item.counter * item.priceProduct)}</td>
                        </tr> 
                        
                    ))
                }

                
            </tbody> 
        </table>
    )
}

export default Table