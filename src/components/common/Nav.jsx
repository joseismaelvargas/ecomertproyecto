import "../css/Nav.css"
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import { Link,NavLink,useNavigate } from "react-router-dom";
export const Nav=({modalOpen,modalOpen2,carrito,logeado,setlogeado})=>{
   console.log(logeado)
    return(
        <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid d-flex justify-content-around ">
    <Link to="/">
    <img
      src="https://ecomert.md/wp-content/uploads/2024/02/share.jpg"
      alt="ecomert"
      className="logoeocomert" 
    />
    </Link>
    
    <div className="incocuenta">
        <BiUser  className="icono" onClick={modalOpen2}/>
         <FaCartShopping  className="icono"onClick={modalOpen} />
         {carrito.length>0?<span className="nunito-uniquifier-span">{carrito.length}</span>:<span></span>}     
    
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
        {logeado.length > 0 ? (
  <Link to={"/administrador"}>
    <GrUserAdmin className="iconoadmin" />
  </Link>
) : (
  ""
)} 
               
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