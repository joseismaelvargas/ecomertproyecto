import "../css/administrador.css"
import { ModalAdmin } from "../ModalAdmin"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { URL_productos } from "../helpers/queries";
import { useEffect, useState } from "react";
export const Administrador=()=>{
    const [productos,setProductos]=useState([])
    const Api=async()=>{
   try{
       const response=await fetch(URL_productos)
       if(response.status===200){
        let datos=await response.json()
        console.log(datos)
         setProductos(datos)
       }
   }catch{
    console.log("Ocurrio un error con la petision")
   }
    }
     useEffect(()=>{
         Api()

     },[])

    return(
        <>
       
        <section className=" Administrador" > 
       <ModalAdmin></ModalAdmin>
       <h2 className="text-center">Section administrador</h2>
       
       <button type="button" class="button-admin btn btn-Light" data-bs-toggle="modal" data-bs-target="#exampleModal"><MdAddBusiness></MdAddBusiness></button>
          <div className="table responsive mt-5">
            <table className="table table-hover table-bordered border-light text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Producto</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((item)=>
                          <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>limpiesa</td>
                        <td>${item.precio}</td>
                        <td>
                           <button className="btn btn-info button-opciones"><FaRegEdit></FaRegEdit></button> 
                           <button className="btn btn-danger button-opciones"><MdDelete></MdDelete></button>
                           <button className=" btn btn-warning button-opciones"><FaRegEye></FaRegEye></button>
                        </td>
                        </tr>)
                    }
                  
                 
                </tbody>
            </table>

          </div>
        </section>
        </>   
    )
}