import "../css/Nav.css"
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link,NavLink,useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export const Nav=({modalOpen,modalOpen2,carrito,logeado,setlogeado})=>{
   console.log(logeado)
    return(
        <>
      <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
       
        {/* Logo */}
        <Link to="/">
          <img
            src="/img/logoPrincipal.jpg"
            alt="ecomert"
            className="logoeocomert"
          />
        </Link> 
      
   {/* Iconos */}
          <div className=" d-flex align-items-center gap-3 ">
            <FaRegUserCircle className="icono" onClick={modalOpen2} />
            <FaCartShopping className="icono" onClick={modalOpen} />
            {carrito.length > 0 && (
              <span className="nunito-uniquifier-span">{carrito.length}</span>
            )}
            {logeado.length > 0 && (
              <Link to="/administrador">
                <RiAdminFill className="icono" />
              </Link>
            )}
          </div>
          

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler bg-black text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido colapsable */}
        <div className="containerlink collapse navbar-collapse " id="navbarSupportedContent">
          {/* Buscador */}
          <form className=" d-md-block">
            <div className="input-group">
              <input
                type="search"
                className="form-control bg-dark"
                placeholder="Buscar producto "
                aria-label="Buscar producto"
              />
              <button className="btn btn-outline-secondary text-light" type="button">
                <FaSearch />
              </button>
            </div>
          </form>
          {/* Links y dropdowns */}
          <ul className="navbar-nav mb-6 mb-lg-0 d-flex align-items-start gap-2">
            <li className="nav-item">
              <Link className="nav-link fs-5 text-light" to="/registro">Registro</Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle fs-5 bg-transparent border-0 text-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </button>
              <ul className="dropdown-menu bg-black py-1 border-0 rounded-0">
                <li><Link className="dropdown-item px-3" to="/productos">Tienda</Link></li>
                <li><Link className="dropdown-item px-3" to="/error">Juegos</Link></li>
                <li><Link className="dropdown-item px-3" to="/error">Consolas</Link></li>
                <li><Link className="dropdown-item px-3" to="/error">Controles</Link></li>
                <li><Link className="dropdown-item px-3" to="/error">Periféricos</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 text-light" to="/ofertas">Ofertas</Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle fs-5 bg-transparent border-0 text-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Más
              </button>
              <ul className="dropdown-menu bg-black py-1 border-0 rounded-0">
                <li><Link className="dropdown-item px-3" to="/contacto">Contáctanos</Link></li>
              </ul>
            </li>
          </ul>
  
       
         
        </div>
      </div>
    </nav>

</>
    )
}