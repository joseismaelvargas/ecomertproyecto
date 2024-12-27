import { Nav } from "./components/Nav"
import { Carrusel } from "./components/Carrusel"
import { Modal } from "./components/Modal"
import { Usemodal } from "./components/helpers/Usemodal"
import { Modalcuenta } from "./components/Modalcuenta"
import { Productos } from "./components/Productos"

function App() {
  const  [isOpen,modalClose,modalOpen]=Usemodal()
  const  [isOpen2,modalClose2,modalOpen2]=Usemodal()
  return (
    <>
    <Nav modalOpen={modalOpen} modalOpen2={modalOpen2}></Nav>
    <Carrusel></Carrusel>
    <Productos></Productos>
    <Modal isOpen={isOpen}  modalClose={modalClose} ></Modal>
    <Modalcuenta isOpen2={isOpen2} modalClose2={modalClose2} ></Modalcuenta>
    </>
  )
}

export default App
