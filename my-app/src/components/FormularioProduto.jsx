import React, { useState } from 'react';
import "./form.css";

function FormularioProduto({ aoAdicionar }) {
  const [formData, setFormData] = useState({ nome: '', preco: '', descricao: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.preco || !formData.descricao) {
      alert("Preencha todos os campos!");
      return;
    }
    
    aoAdicionar({
      ...formData,
      id: Date.now(),
      imagem: `https://picsum.photos{Date.now()}`
    });

    setFormData({ nome: '', preco: '', descricao: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='formStyle'>
      <input name="nome" value={formData.nome} onChange={(e)=>setFormData({...formData, nome: e.target.value})} placeholder="Nome do produto" />
      <input name="preco" type="number" value={formData.preco} onChange={(e)=>setFormData({...formData, preco: e.target.value})} placeholder="Preço" />
      <textarea name="descricao" value={formData.descricao} onChange={(e)=>setFormData({...formData, descricao: e.target.value})} placeholder="Descrição" />
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}

export default FormularioProduto;

//Formulário controlado para capturar e adicionar novos itens
