import Footer from '../components/Footer';
import '../styles/Catalogo.css';
import tristeza from '../assets/tristeza.png';
import alegria from '../assets/alegria.png'
import nojinho from  '../assets/nojinho.png'
import raiva from '../assets/raiva.png'
import medo from '../assets/medo.png'
import chapeuzinho from '../assets/chapeuzinho.png'
import porquinhos from '../assets/porquinhos.png'
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import catalogo from '../assets/catalogo.png'
function Catalogo() {
  const produtos = [
    { id: 1, nome: 'Boneca divertidamente: Tristeza', preco: 'R$ 85,00', imagem: tristeza },
    { id: 2, nome: 'Boneca divertidamente: Alegria', preco: 'R$ 85,00', imagem: alegria },
    { id: 3, nome: 'Boneca divertidamente: Nojinho', preco: 'R$ 85,00', imagem: nojinho },
    { id: 4, nome: 'Boneca divertidamente: Raiva', preco: 'R$ 85,00', imagem: raiva },
    { id: 5, nome: 'Boneca divertidamente: Medo', preco: 'R$ 85,00', imagem: medo },
    { id: 6, nome: 'Dedoche Chapeuzinho vermelho', preco: 'R$ 30,00', imagem: chapeuzinho },
    { id: 7, nome: 'Dedoche dos três porquinhos: ', preco: 'R$ 30,00', imagem: porquinhos },
  ];  

  

  return (
    <>
      <div className='header'>
      <div className="logo"> 
          <Link to="/" className="active"> <img src={logo} alt="Fabrica de Ideias"/></Link>
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
        </div>
        
        <div className='produtos'>
          {produtos.map((produto) => (
            <div key={produto.id} className='conteiner'>
              <img src={produto.imagem} alt={produto.nome} className='produto-imagem' />
              <p className="produto-nome">{produto.nome}</p>
              <p className="produto-preco">{produto.preco}</p>
            </div>
          ))}
        </div>

      </div>
      <div className='personalize'>
        <h2>Personalize o seu brinquedo</h2>
        <h3>Crie um amigo do seu jeitinho!</h3>
        <button>Entrar em contato</button>
      </div>
      <Footer />
    </>
  );
}


export default Catalogo;
