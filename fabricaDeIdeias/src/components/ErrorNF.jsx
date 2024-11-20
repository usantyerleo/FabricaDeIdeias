import { react } from "react";
import errorbg from '../assets/404 page-1.png'
import apple1 from '../assets/maca1.png'
import apple2 from '../assets/maca2.png'
import apple3 from '../assets/maca3.png'
import quatro from '../assets/group23.png'
import '../styles/ErrorNF.css'
import { Link } from 'react-router-dom';


function ErrorNF() {

    return (
        <>
            <div className="Error-container">
                <img src={errorbg} className="errorbackground" alt="error page" srcset="" />
                <img src={apple1} className="apple1" alt="maçã 1" srcset="" />
                <img src={apple2} className="apple2" alt="maçã 2" srcset="" />
                <img src={apple3} className="apple3" alt="maçã 3" srcset="" />
                <img src={quatro} className="quatro" alt="quatro" srcset="" />
                <p><Link to="/" className="error-text">Voltar para a página inicial</Link></p>
            </div>
        </>
    )

}

export default ErrorNF;