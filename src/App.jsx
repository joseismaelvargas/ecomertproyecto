import { Nav } from "./components/common/Nav.jsx"
import { Index } from "./components/common/Index.jsx"
import { Usemodal } from "./components/helpers/Usemodal.jsx"
import React,{useState} from "react";
import {BrowserRouter, Route,Routes}from"react-router-dom"
import { ProductoCarasteristica } from "./components/page/ProductoCarasteristica.jsx";
import { Footer } from "./components/common/footer.jsx";
import { Rutaadmin } from "./components/router/Rutaadmin.jsx";
import ProtejerRuta from "./components/router/ProtejerRuta.jsx";
import ScrollToTop from "./components/helpers/ScrollToTop.jsx";
function App() {
  const [carrito, setCarrito] = useState([]);
  const usuario=JSON.parse(sessionStorage.getItem("ecomert"))||[]
  const [logeado,setlogeado]=useState(usuario)
  const  [isOpen,modalClose,modalOpen]=Usemodal()
  const  [isOpen2,modalClose2,modalOpen2]=Usemodal()
 return (
    <>
    <BrowserRouter> 
    <ScrollToTop></ScrollToTop>
    <Nav modalOpen={modalOpen} modalOpen2={modalOpen2}  carrito={carrito} logeado={logeado} setlogeado={setlogeado}></Nav>
    <Routes>
     
      <Route path="/" element={<Index isOpen={isOpen} modalClose={modalClose} isOpen2={isOpen2} modalClose2={modalClose2} carrito={carrito} setCarrito={setCarrito} ></Index>} ></Route>
      <Route path="/administrador/*" element={
        <ProtejerRuta>
          <Rutaadmin></Rutaadmin>
        </ProtejerRuta>
      }>
       
      </Route>
      <Route path={`/carasteristica/:id`} element={<ProductoCarasteristica isOpen={isOpen} isOpen2={isOpen2} modalOpen={modalOpen} modalClose={modalClose} modalOpen2={modalOpen2} carrito={carrito} setCarrito={setCarrito}></ProductoCarasteristica>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
   
  
    </>
  )
}

export default App
