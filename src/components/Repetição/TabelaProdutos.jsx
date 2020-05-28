import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'
export default props => {
    const lista = produtos.map(produto => {
        return <tr key={produto.id} className={produto.id%2===0 ? 'Par' : 'Impar'}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R$ {produto.preço.toFixed(2).replace('.',',')}</td>
        </tr>
    })


    return (
        <div className="TabelaProdutos">
            <table border="1"style={{ textAlign: "justify" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>   
                </thead>
                <tbody>
                    {lista}
                </tbody>
            </table>
        </div>
    )
}