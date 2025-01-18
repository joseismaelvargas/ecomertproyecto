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
import { useProductos } from "../helpers/ProductosContext.jsx";
export const Administrador=( )=>{
    // const {productos,setProductos}=useProductos();
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
       if(response.ok){
        let datos=await response.json()
        if (Array.isArray(datos)) {
          console.log('Datos obtenidos:', datos);
          setProductos(datos);
      } else {
          console.error('La respuesta no es un array:', datos);
      }  console.log(datos)
        
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
            const response=await borrarProducto
            console.log(response)
            if(response.status===200){
              setProductos(productos.filter((producto) => producto._id !== id));
              Swal.fire({
                  title: "Eliminado",
                  text: "El producto fue eliminado.",
                  icon: "success"
              });
            }
            
         }catch{
            console.log("Ocurrio un error con la petision")
         }
     }
    const editarProducto= (id)=>{
      setCreando(false)
       setid(id)
        let productoencontrado=productos.find((element)=>element._id===id)
         if(productoencontrado){
          setProductoSeleccionado(productoencontrado)
         
         }
     }
    
    return(
        <>
       
        <section className=" Administrador" > 
     
       <h2 className="text-center">Administrador de la Pagina</h2>
       <Modaladministrador productos={productos} setProductos={setProductos} ></Modaladministrador>
       <Modaleditar productoSeleccionado={productoSeleccionado} idadmin={id} productos={productos} setProductos={setProductos} setCreando={setCreando} creando={creando}></Modaleditar>

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
                          <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.categoria}</td>
                        <td>${item.precio.toFixed(2)}</td>
                        <td>
                           <button className="btn btn-info button-opciones"  data-bs-toggle="modal" data-bs-target="#miModaledit" onClick={()=>editarProducto(item._id)}><FaRegEdit></FaRegEdit></button> 
                           <button className="btn btn-danger button-opciones" onClick={()=>borrar(item._id)}><MdDelete></MdDelete></button>
                           <Link to={`/carasteristica/${item._id}`} className=" btn btn-warning button-opciones">
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