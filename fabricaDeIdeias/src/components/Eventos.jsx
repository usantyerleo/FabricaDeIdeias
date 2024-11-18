import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import evento1 from '../assets/evento1.png';
import evento2 from '../assets/evento2.png';
import evento3 from '../assets/evento3.png';
import evento4 from '../assets/evento4.png';
import evento6 from '../assets/evento6.png';
import evento7 from '../assets/evento7.png';
import evento8 from '../assets/evento8.png';
import evento9 from '../assets/evento9.png';
import '../styles/Eventos.css';

const images = [evento1, evento2, evento3, evento4, evento6, evento7, evento8, evento9];

function Eventos() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <main className="Events-VP">
      <section className="Events-Text">
      <h1>Eventos</h1>
      </section>
      
      <section className="Events">
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }} 
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 4 }}
        >
          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Texto Alt" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
    </main>
    
  );
}

export default Eventos;
