import { Outlet, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify'; // Importando ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // CSS do Toast

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      

      <main>
        <Outlet />
      </main>

      <ToastContainer /> {/* Incluindo ToastContainer aqui */}
    </>
  );
};

export default Layout;
