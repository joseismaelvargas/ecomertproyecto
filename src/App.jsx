import { Nav } from "./components/Nav"
import { Carrusel } from "./components/Carrusel"
import { Modal } from "./components/Modal"
import { Usemodal } from "./components/helpers/Usemodal"
import { Modalcuenta } from "./components/Modalcuenta"
import { Productos } from "./components/Productos"
import { useState } from "react"
import { Footer } from "./common/footer"
function App() {
  const [carrito, setCarrito] = useState([]);
  const  [isOpen,modalClose,modalOpen]=Usemodal()
  const  [isOpen2,modalClose2,modalOpen2]=Usemodal()
  console.log(carrito)
  return (
    <>
    <Nav modalOpen={modalOpen} modalOpen2={modalOpen2} carrito={carrito} ></Nav>
    <Carrusel></Carrusel>
    <Productos carrito={carrito} setCarrito={setCarrito}></Productos>
    <Modal isOpen={isOpen}  modalClose={modalClose} carrito={carrito} setCarrito={setCarrito} ></Modal>
    <Modalcuenta isOpen2={isOpen2} modalClose2={modalClose2} ></Modalcuenta>
   <Footer></Footer>
    </>
  )
}

export default App
