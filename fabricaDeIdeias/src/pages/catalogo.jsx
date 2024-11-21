import React, { useState } from 'react';
import Footer from '../components/Footer';
import '../styles/Catalogo.css';
import tristeza from '../assets/tristeza.png';
import alegria from '../assets/alegria.png';
import nojinho from '../assets/nojinho.png';
import raiva from '../assets/raiva.png';
import medo from '../assets/medo.png';
import chapeuzinho from '../assets/chapeuzinho.png';
import porquinhos from '../assets/porquinhos.png';
import logo from '../assets/logo2.png';
import cartIcon from '../assets/sacola.png'; 
import { Link } from 'react-router-dom';
import catalogo from '../assets/catalogo.png';
import removeIcon from '../assets/lixeira.png'; 

function Catalogo() {
  const [carrinho, setCarrinho] = useState([]); 
  const [mostrarModal, setMostrarModal] = useState(false); 

  const produtos = [
    { id: 1, nome: 'Boneca divertidamente: Tristeza', preco: 85.00, imagem: tristeza },
    { id: 2, nome: 'Boneca divertidamente: Alegria', preco: 85.00, imagem: alegria },
    { id: 3, nome: 'Boneca divertidamente: Nojinho', preco: 85.00, imagem: nojinho },
    { id: 4, nome: 'Boneca divertidamente: Raiva', preco: 85.00, imagem: raiva },
    { id: 5, nome: 'Boneca divertidamente: Medo', preco: 85.00, imagem: medo },
    { id: 6, nome: 'Dedoche Chapeuzinho vermelho', preco: 30.00, imagem: chapeuzinho },
    { id: 7, nome: 'Dedoche dos três porquinhos', preco: 30.00, imagem: porquinhos },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
    window.alert(`${produto.nome} foi adicionado ao carrinho!`); 
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id)); 
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2);
  };

  return (
    <>
      <div className='header'>
        <div className="logo">
          <Link to="/" className="active"><img src={logo} alt="Fabrica de Ideias" /></Link>
        </div>
        <div className='nome'>
          <img src={catalogo} alt="" />
        </div>
        <nav className="bar">
          <ul className="menu">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobremim" className="active">Sobre mim</Link></li>
            <li><Link to="/colabore">Colabore</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
          </ul>
        </nav>
      </div>

      <div className='catalogo'>
        <h3>Buscar por</h3>
        <div className="buscas">
          <button>Brinquedos</button>
          <button>Bonecos</button>
          <button>Dedoches</button>
          <button>Fantoche</button>
          <button>Tiaras</button>
          <input type='text' placeholder='Buscar' />
          <button id='pesquisa'>Ir</button>
          <img 
          id='carro'
            src={cartIcon} 
            alt="Carrinho" 
            onClick={() => setMostrarModal(true)} 
          />
        </div>

        <div className='produtos'>
          {produtos.map((produto) => (
            <div key={produto.id} className='conteiner'>
              <img src={produto.imagem} alt={produto.nome} className='produto-imagem' />
              <p className="produto-nome">{produto.nome}</p>
              <p className="produto-preco">R$ {produto.preco.toFixed(2)}</p>
              <button id='botao' className="addBotao" onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao carrinho</button>
            </div>
          ))}
        </div>
      </div>

      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
          <button id='botao2' onClick={() => setMostrarModal(false)}>x</button>

            <h3>Itens no Carrinho</h3>
            {carrinho.length === 0 ? (
              <p>Seu carrinho está vazio!</p>
            ) : (
              <ul>
                {carrinho.map((item, index) => (
                  <li key={index} className="item-carrinho">
                    <img src={item.imagem} alt={item.nome} className="miniatura" />
                    {item.nome} - R$ {item.preco.toFixed(2)}
                    <img 
                     id='lixo'
                      src={removeIcon} 
                      alt="Remover" 
                      className="remove-icon" 
                      onClick={() => removerDoCarrinho(item.id)} 
                    />
                  </li>
                ))}
              </ul>
            )}           
            <p className="total">Total: R$ {calcularTotal()}</p>
            <a 
              href="https://api.whatsapp.com/message/23Q3N4KIHR3WG1?autoload=1&app_absent=0"  
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="whatsapp-button">Entrar em contato no WhatsApp</button>
            </a>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Catalogo;
