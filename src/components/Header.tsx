import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className=''>
        <ul className='flex justify-center gap-10 p-3 '>
          <li className='navbar__item relative'>
            <Link to='/usuario'>Usuario</Link>
          </li>
          <li className='navbar__item relative'>
            <Link to='/activo'>Activo</Link>
          </li>
          <li className='navbar__item relative'>
            <Link to='/registro'>Registro</Link>
          </li>
          <li className='navbar__item relative'>
            <Link to='/analisis'>Análisis</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
