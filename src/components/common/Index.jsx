import { Carrusel } from "../Carrusel"
import { Productos } from "../Productos"
import { Modalcuenta } from "../Modalcuenta"
// import Buttonmessaje from "../buttonmessaje"
import Buttonmessaje from "../Buttonmessaje"
import { Modal } from "../Modal"
import Categorias from "./Categorias"
import Asesoramiento from "../Asesoramiento"
export const Index=({isOpen,isOpen2,modalClose,modalClose2,carrito,setCarrito})=>{

    return(
        <>
      
        <Carrusel></Carrusel>
       
         <Buttonmessaje></Buttonmessaje>
         
       <Productos carrito={carrito} setCarrito={setCarrito} title={"Mas vistos"} categoria={"Muebles"} ></Productos>
        <Categorias></Categorias>
        <Productos carrito={carrito} setCarrito={setCarrito} title={"Perifericos de PC"} categoria={"Perifericos de PC"} ></Productos>
     
       <Asesoramiento></Asesoramiento>
        <Modal isOpen={isOpen}  modalClose={modalClose} carrito={carrito} setCarrito={setCarrito} ></Modal>
        <Modalcuenta isOpen2={isOpen2} modalClose2={modalClose2} ></Modalcuenta>
        </>
    )
}