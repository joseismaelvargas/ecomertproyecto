import { Nav } from "./components/common/Nav.jsx"
import { Index } from "./components/common/Index.jsx"
import { Usemodal } from "./components/helpers/Usemodal.jsx"
import React,{useState} from "react";
function App() {
  const [carrito, setCarrito] = useState([]);
  const  [isOpen,modalClose,modalOpen]=Usemodal()
  const  [isOpen2,modalClose2,modalOpen2]=Usemodal()
 return (
    <>
    <Nav modalOpen={modalOpen} modalOpen2={modalOpen2}  carrito={carrito}></Nav>
    <Index isOpen={isOpen} modalClose={modalClose} isOpen2={isOpen2} modalClose2={modalClose2} carrito={carrito} setCarrito={setCarrito} ></Index>
  
    </>
  )
}

export default App
