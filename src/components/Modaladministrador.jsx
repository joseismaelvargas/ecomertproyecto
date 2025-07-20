import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {v4 as uuidv4, v4}from 'uuid'
import Swal from 'sweetalert2';
import { agregarProducto } from './helpers/queries';

import { MdAddBusiness } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
export const Modaladministrador=({productosadmin,setProductosadmin})=>{
    const {register,handleSubmit,formState:{errors},reset,setValue}=useForm()
   
    
    const agregar=async(data,e)=>{
        e.preventDefault()
       
        const formData = new FormData();

  formData.append("name", data.name);
  formData.append("namedetallado", data.namedetallado);
  formData.append("imageProduct", data.img[0]); 
  formData.append("categoria", data.categoria);
  formData.append("text", data.text);
  formData.append("precio", data.precio);
  formData.append("cantidad", "1");
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
    console.log("❌ Error al agregar producto (catch):", error.message);
  }
};
    return(
        <>
        <div>
   

             <button className="button-admin btn btn-Light" data-bs-toggle="modal" data-bs-target="#miModal"  ><MdAddBusiness></MdAddBusiness></button>
    

    
      <div className="modal fade" id="miModal" tabIndex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="miModalLabel">Agregue su producto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
            <Form  onSubmit={handleSubmit(agregar)} encType="multipart/form-data">
      <FloatingLabel
        controlId="floatingTextarea"
        label="Nombre del producto"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here"
        
        {...register("name",{
          required:"Agregue el Nombre del Producto",
          minLength:{
            value:5,
            message:"El nombre debe tener al menos 3 caracteres"
          },
          maxLength:{
            value:30,
            message:"El nombre no puede tener más de 30 caracteres"
          }
        })}/>
        
      </FloatingLabel>
          {errors.name&&<p className="errors mb-3"><IoIosAlert />
{errors.name.message}</p>}


          <FloatingLabel
        controlId="floatingTextarea"
        label="Nombre detallado"
        className="mb-3"
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
   
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Imagen del producto</Form.Label>
        <Form.Control type="file" name='imageProduct' id='imageProduct' {...register("img",{
          required:"Agregue la imagen del producto "
        })} />
      </Form.Group>
  </FloatingLabel>
      {errors.img&&<p className="errors mb-3"><IoIosAlert />{errors.img.message}</p>}
      <FloatingLabel
  controlId="floatingSelectGrid"
          label="Categoria de Producto"
          className='mb-3'
>
  <Form.Select
    aria-label="Seleccione la categoría del producto"
    {...register("categoria", { required: "Seleccione Categoria" })}
  >
    <option value="">Seleccione la categoría del producto</option>
    <option value="Baños y cocinas">Baños y cocinas</option>
    <option value="Electrodomesticos">Electrodomesticos</option>
    <option value="Textil y basar">Textil y basar</option>
    <option value="Muebles">Muebles</option>
    <option value="Herramientas">Herramientas</option>
    <option value="Mas vendidos">Mas vendidos</option>
  </Form.Select>
</FloatingLabel>
        {errors.categoria&&<p className='errors mb-3'><IoIosAlert />{errors.categoria.message}</p>}

      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Agregue informacion del producto">
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
      {errors.text&&<p className="errors mb-3"><IoIosAlert />{errors.text.message}</p>}
      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Precio del Producto">
        <Form.Control type='number' style={{ height: '50px',width:'150px' }} {...register("precio",{
          required:"Agregue el Precio del producto",
        
          })}></Form.Control>
      </FloatingLabel>
      {errors.precio&&<p className="errors mb-3"><IoIosAlert />{errors.precio.message}</p>}
          <button className='btn btn-primary mb-3' type='submit'> Agregar producto</button>
      </Form>
            </div>
            <div className="modal-footer">
         
            </div>
          </div>
        </div>
      </div>
    </div>
 
        </>
    )
}