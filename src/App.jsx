import { Nav } from "./components/common/Nav.jsx"
import { Index } from "./components/common/Index.jsx"
import { Usemodal } from "./components/helpers/Usemodal.jsx"
import React,{useState} from "react";
import {BrowserRouter, Route,Routes}from"react-router-dom"
import { Administrador } from "./components/page/Administrador";
import { ProductoCarasteristica } from "./components/page/ProductoCarasteristica.jsx";
function App() {
  const [carrito, setCarrito] = useState([]);
  const  [isOpen,modalClose,modalOpen]=Usemodal()
  const  [isOpen2,modalClose2,modalOpen2]=Usemodal()
 return (
    <>
    <BrowserRouter>
    <Nav modalOpen={modalOpen} modalOpen2={modalOpen2}  carrito={carrito}></Nav>
    <Routes>
      <Route path="/" element={<Index isOpen={isOpen} modalClose={modalClose} isOpen2={isOpen2} modalClose2={modalClose2} carrito={carrito} setCarrito={setCarrito} ></Index>} ></Route>
      <Route path="/administrador" element={<Administrador></Administrador>}></Route>
      <Route path={`/carasteristica/:id`} element={<ProductoCarasteristica></ProductoCarasteristica>}></Route>
    </Routes>
    </BrowserRouter>
   
  
    </>
  )
}

export default App
