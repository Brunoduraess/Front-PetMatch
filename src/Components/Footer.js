// dependencies
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <img className="footer__img" src="pets.svg" alt="" aria-hidden='true' />}
      <footer className="footer">
        <p>2024 - Desenvolvido por <a href="https://github.com/brunoduraess/" target='_blank' rel="noreferrer">Bruno Durães</a> e <a href="https://github.com/tamireespaiva/" target='_blank' rel="noreferrer">Tamires Paiva</a>.</p>
      </footer>
    </>
  );
};

export default Footer;