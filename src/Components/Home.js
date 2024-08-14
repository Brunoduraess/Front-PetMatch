// dependencies
import { motion } from 'framer-motion';

// assets
import { pets } from '../data/data.js';

// components
import CardPet from './CardPet.js';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.section className='home' initial={{ width: 0 }} animate={{ width: "auto", transition: { duration: 0.5 } }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
      <div className='home__buttons'>
        <Link className='button donation' to='/cadastro_animal'>Anunciar um amiguinho para adoção</Link>
      </div>
      <p>Caso queria dar uma lar para um amiguinho, <br /> Veja abaixo os pets disponíveis para adoção!</p>
      <div className='cards'>
        {
          pets.map((pet, i) => (
            <CardPet
              age={pet.age}
              size={pet.size}
              behavior={pet.behavior}
              city={pet.city}
              name={pet.name}
              img={pet.img}
              key={i}
            />
          ))
        }
      </div>
    </motion.section >
  );
};

export default Home;