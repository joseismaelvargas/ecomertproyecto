import'./css/carrito.css'
import { BiPlus } from "react-icons/bi";
import { FiX } from "react-icons/fi";
export const Carrito=({carrito})=>{
    return(
        <>
       
        <div className="prop">
            {carrito.map((prop)=>
          <div key={prop.id} className="containerCarrito">
                        <img className="imgcarrito" src={prop.img} alt="" />
                   
                           <p className="nunito-uniquifier-preciocarrito">${prop.precio*prop.cantidad}</p>
                            <CgMathMinus onClick={()=>dismuirCantidad(prop.id)} className="menos"></CgMathMinus>
                           <p className="nunito-uniquifier-preciocarrito">{prop.cantidad}</p>
                             <BiPlus  className ="pluz" onClick={()=>aumentarCantidad(prop.id)}></BiPlus>
                           <FiX className="fix" onClick={()=>eliminarproducto(prop.id)}></FiX>
                            
     </div>)}
     </div >
     </>
    )
}