import { useState, useEffect } from 'react'
import ProdutoCard from './components/ProdutoCard'
import FormularioProduto from './components/FormularioProduto'
import {produtosIniciais} from './data/mockData'
import "./components/layout.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(produtosIniciais);
      setCarregando(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='layout'>
      <h1>Catálogo de Produtos</h1>
      
      <h2>Cadastrar Novo</h2>
      <FormularioProduto aoAdicionar={(novo) => setProdutos([...produtos, novo])}  />  {/* PROP */}

      <h2>Lista de Produtos</h2>
      {carregando ? (
        <p>Carregando produtos...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {produtos.map(prod => (
            <ProdutoCard 
              key={prod.id}
              nome={prod.nome}
              preco={prod.preco}
              descricao={prod.descricao}
              imagem={prod.imagem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App
