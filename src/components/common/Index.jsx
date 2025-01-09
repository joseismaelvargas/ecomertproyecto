import { Carrusel } from "../Carrusel"
import { Productos } from "../Productos"
import { Modalcuenta } from "../Modalcuenta"

import { Modal } from "../Modal"

export const Index=({isOpen,isOpen2,modalClose,modalClose2,carrito,setCarrito})=>{

    return(
        <>
        <Carrusel></Carrusel>
       <Productos carrito={carrito} setCarrito={setCarrito} title={"Productos recomendados"} categoria={"Recomendados"} ></Productos>
       <Productos carrito={carrito} setCarrito={setCarrito} title={"Nuevos Lanzamientos: Muebles de Exterior"} categoria={"Muebles"} ></Productos>
       <Productos carrito={carrito} setCarrito={setCarrito} title={"Nuevos Lanzamientos:Herramientas"} categoria={"Herramientas"} ></Productos>
       
       
        <Modal isOpen={isOpen}  modalClose={modalClose} carrito={carrito} setCarrito={setCarrito} ></Modal>
        <Modalcuenta isOpen2={isOpen2} modalClose2={modalClose2} ></Modalcuenta>
        </>
    )
}