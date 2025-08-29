import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {v4 as uuidv4, v4}from 'uuid'
import Swal from 'sweetalert2';
import { agregarProducto } from './helpers/queries';
import "../components/css/administrador.css"
import { MdAddBusiness } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
export const Modaladministrador=({productosadmin,setProductosadmin})=>{
    const {register,handleSubmit,formState:{errors},reset,setValue}=useForm()
    const [images,setImages]=useState([])
    const handleImageChange = (e) => {
  // convertir FileList en array
  const files = Array.from(e.target.files);
  setImages(files);
};
    const agregar=async(data)=>{
        // e.preventDefault()
       
        const formData = new FormData();

  formData.append("name", data.name);
  formData.append("namedetallado", data.namedetallado);
 
  formData.append("categoria", data.categoria);
  formData.append("text", data.text);
  formData.append("precio", data.precio);
  formData.append("cantidad", "1");
  for(let i=0;i<images.length;i++){
     formData.append("imagenesProduct",images[i])
    }
  agregarProductos(formData)
  
        }

const agregarProductos = async (producto) => {
  try {
    const response = await agregarProducto(producto);
    console.log("STATUS:", response.status);

    let actualizar = null;

    // Solo intentamos parsear si el Content-Type es JSON
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      actualizar = await response.json();
    }

    if (response.status === 201) {
      console.log("Producto agregado:", actualizar);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Producto Agregado",
        showConfirmButton: false,
        timer: 500,
      });

      if (actualizar) {
        location.reload();
      }
    } else {
      const errorText = await response.text();
      console.error("Error del servidor:", errorText);
      alert("Error al agregar producto");
    }
  } catch (error) {
    console.log(" Error al agregar producto (catch):", error.message);
  }
};
    return(
        <>
        <div>
   
  <MdAddBusiness  data-bs-toggle="modal" data-bs-target="#miModal" className='btn-admin'></MdAddBusiness>
    

    
      <div className="modal fade " id="miModal" tabIndex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
        <div className="modal-dialog text-light rounded">
          <div className="modal-content ">
            <div className="modal-header bg-black text-light p-4 rounded">
              <h5 className="modal-title" id="miModalLabel">Agregue su producto</h5>
              <button type="button" className="btn-close text-white " data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body bg-black text-light p-4 rounded">
            <Form  className='bg-black text-light p-4 rounded' onSubmit={handleSubmit(agregar)} encType="multipart/form-data">
      <FloatingLabel
        controlId="floatingTextarea"
        label="Nombre del producto"
        className="mb-3 text-dark"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here"
        
        {...register("name",{
          required:"Agregue el Nombre del Producto",
          minLength:{
            value:5,
            message:"El nombre debe tener al menos 3 caracteres"
          },
          maxLength:{
            value:100,
            message:"El nombre no puede tener más de 100 caracteres"
          }
        })}/>
        
      </FloatingLabel>
          {errors.name&&<p className="errors mb-3"><IoIosAlert />
{errors.name.message}</p>}


          <FloatingLabel
        controlId="floatingTextarea"
        label="Nombre detallado"
        className="mb-3 text-dark"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here"
          
        
        {...register("namedetallado",{
          required:"Agregue el Nombre del Producto",
          minLength:{
            value:3,
            message:"El nombre debe tener al menos 3 caracteres"
          },
          maxLength:{
            value:200,
            message:"El nombre no puede tener más de 200 caracteres"
          }
        })}/>

        </FloatingLabel>    
      {errors.namedetallado&&<p className="errors mb-3"><IoIosAlert />{errors.namedetallado.message}</p>}
        <FloatingLabel controlId="floatingTextarea" className="mb-3">
   
    <Form.Group controlId="formFile" className="mb-3 text-dark">

        <Form.Control multiple type="file"  name='imageProduct' id='imageProduct' onChange={handleImageChange}  />
      </Form.Group>
  </FloatingLabel>

      <FloatingLabel
  controlId="floatingSelectGrid"
          label="Categoria de Producto"
          className='mb-3 text-dark'
>
  <Form.Select
    aria-label="Seleccione la categoría del producto"
    {...register("categoria", { required: "Seleccione Categoria" })}
  >
    <option value="">Seleccione la categoría del producto</option>
    <option value="Componentes de PC">Componentes de PC</option>
    <option value="Placas de Video">Placas de Video</option>
    <option value="Monitores">Monitores</option>
    <option value="Escritorios y Mesas de PC">Escritorios y Mesas de PC</option>
    <option value="Perifericos de PC">Perifericos de PC</option>
    <option value="Computadoras y Notebooks">Computadoras y Notebooks</option>
     <option value="Procesadores">Procesadores</option>
        <option value="Almacenamiento">Almacenamiento</option>
  </Form.Select>
</FloatingLabel>
        {errors.categoria&&<p className='errors mb-3'><IoIosAlert />{errors.categoria.message}</p>}

      <FloatingLabel className='mb-3 text-dark' controlId="floatingTextarea2" label="Agregue informacion del producto">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          {...register("text",{
            required:"Agregue informacion del producto",
            minLength:{
              value:5,
              message:"la informacion debe tener mas de 5 caracteres"
            },
            maxLength:{
              value:500,
              message:"la informacion no puede tener  más de 20 caracteres"
            }})}/>
      </FloatingLabel>
      {errors.text&&<p className="errors mb-3 text-dark"><IoIosAlert />{errors.text.message}</p>}
      <FloatingLabel className='mb-3 text-dark' controlId="floatingTextarea2" label="Precio del Producto">
        <Form.Control type='number' style={{ height: '50px',width:'150px' }} {...register("precio",{
          required:"Agregue el Precio del producto",
        
          })}></Form.Control>
      </FloatingLabel>
      {errors.precio&&<p className="errors mb-3 text-dark"><IoIosAlert />{errors.precio.message}</p>}
          <button className='btn-agregar ' type='submit'> Agregar producto</button>
      </Form>
            </div>
       
          </div>
        </div>
      </div>
    </div>
 
        </>
    )
}