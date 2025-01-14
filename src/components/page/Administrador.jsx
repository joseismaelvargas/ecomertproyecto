import "../css/administrador.css"
import { Modaladministrador } from "../Modaladministrador";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import {  URL_productos } from "../helpers/queries";
import { useEffect, useState } from "react";
import { borrarProducto } from "../helpers/queries";
import { editarProducto } from "../helpers/queries";
import { Modaleditar } from "../Modaleditar";
import { Link,NavLink,useNavigate } from "react-router-dom";
export const Administrador=( )=>{
    const [productos,setProductos]=useState([])
    const [creando,setCreando]=useState(true)
    const [id,setid]=useState([])
    const [productoSeleccionado, setProductoSeleccionado] = useState({
        name: '',
        img: '',
        text: '',
        precio: '',
        categoria: '',
      });
      
  
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

      const borrar=(id)=>{
        Swal.fire({
            title: "Eliminar",
            text: "Esta seguro de Eliminar el Producto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si"
          }).then((result) => {
            if (result.isConfirmed) {
                borrarProductoadmin(id)
              Swal.fire({
                title: "Eliminado",
                text: "El producto fue eliminado.",
                icon: "success"
              });

            }
          });
      }
     const borrarProductoadmin=async(id)=>{
         try{
            const response=await fetch(borrarProducto(id))
            
            if(response.status===200){
                let actualizar=await Api()
                if(actualizar.status===200){
                let datos=await actualizar.json()
                setProductos(datos)
            }
            }
            
         }catch{
            console.log("Ocurrio un error con la petision")
         }
     }
    const editarProducto= (id)=>{
      setCreando(false)
       setid(id)
        let productoencontrado=productos.find((element)=>element.id===id)
         if(productoencontrado){
          setProductoSeleccionado(productoencontrado)
         
         }
     }
     const verProducto=(id)=>{
     window.location.href='/page/detalles.html?id='+id
     }
    return(
        <>
       
        <section className=" Administrador" > 
     
       <h2 className="text-center">Administrador de la Pagina</h2>
       <Modaladministrador productos={productos} setProductos={setProductos} ></Modaladministrador>
       <Modaleditar productoSeleccionado={productoSeleccionado} idadmin={id} productos={productos} setCreando={setCreando} creando={creando}></Modaleditar>

          <div className="nunito-uniquifier-table responsive mt-5">
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
                        <td>{item.categoria}</td>
                        <td>${item.precio.toFixed(2)}</td>
                        <td>
                           <button className="btn btn-info button-opciones"  data-bs-toggle="modal" data-bs-target="#miModaledit" onClick={()=>editarProducto(item.id)}><FaRegEdit></FaRegEdit></button> 
                           <button className="btn btn-danger button-opciones" onClick={()=>borrar(item.id)}><MdDelete></MdDelete></button>
                           <Link to={`/carasteristica/${item.id}`} className=" btn btn-warning button-opciones">
                            <FaRegEye></FaRegEye></Link>
                        </td>
                        </tr>)
                    }
                  
                 
                </tbody>
            </table>

          </div>
          <div>
    
      
    </div>

        </section>
        </>   
    )
}