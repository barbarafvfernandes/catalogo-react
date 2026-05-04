import React from 'react';
import './card.css'

function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className='cardStyle'>
      <img src={imagem} alt={nome} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong style={{ color: '#2ecc71' }}>
        R$ {Number(preco).toFixed(2)}
      </strong>
    </div>
  );
}

export default ProdutoCard;

//Componente que recebe os dados via props para renderizar o produto