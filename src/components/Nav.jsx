import "../App.css"
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

export const Nav=({modalOpen,modalOpen2})=>{
 
    return(
        <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid d-flex justify-content-around">
    <img
      src="https://ecomert.md/wp-content/uploads/2024/02/share.jpg"
      alt="ecomert"
      className="logoeocomert"
    /><div className="incocuenta">
        <BiUser  className="icono"  onClick={modalOpen2}/>
         <FaCartShopping  className="icono"onClick={modalOpen}/>
         </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <form className="d-flex" role="search">
            <input
              className="inputnav form-control me-2"
              type="search"
              placeholder="Buscar Producto"
              aria-label="Search"
            />
            <button className="lupa" type="submit">
              <CiSearch />
            </button>
          </form>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

</>
    )
}