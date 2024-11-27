import { react } from "react";
import textura from '../assets/textura.png';
import boneca from '../assets/boneca.gif'

function Feedbacks() {

    return (
        <>

            <div className="feedbacks">
                <h1>Feedbacks</h1>
                <img id="specificImage" src={textura} alt="Textura" />
                <img id="boneca" src={boneca} alt="Boneco 1" />
                <div id="balao1" className="balao">
                    <p>“Parabéns por mais uma vez corresponder minhas expectativas com esse belíssimo trabalho. Nossas contações de histórias cada dia mais divertidas. ”</p>
                </div>
                <div id="balao2" className="balao">
                    <p>“Nosso Tigre Camarada ficou lindo demais!!! Parabéns mais uma vez pelo belíssimo trabalho.”</p>
                </div>
                <div id="balao3" className="balao">
                    <p>“Parabéns pelo trabalho. Há muito tempo eu queria fazer a versão fantoche do Faguinho e vocês me surpreenderam em cada detalhe.”</p>
                </div>
                <div id="balao4" className="balao">
                    <p>“Quantas aprendizagens esses recursos proporcionam. Apaixonada! ❤️”</p>
                </div>
            </div>
        </>
    )
}

export default Feedbacks;