import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {v4 as uuidv4, v4}from 'uuid'
import { agregarProducto } from './helpers/queries';
import { editarProducto } from './helpers/queries';
import { MdAddBusiness } from "react-icons/md";
import { CiHospital1 } from 'react-icons/ci';
import { useProductos } from './helpers/ProductosContext';
import { IoIosAlert } from "react-icons/io";
import Swal from 'sweetalert2';
export const Modaleditar=({productoSeleccionado,idadmin,setCreando,creando,productos,setProductos})=>{
    const {register,handleSubmit,formState:{errors},reset,setValue}=useForm()
    let id=idadmin




    useEffect(()=>{
      if(productoSeleccionado){
        setValue('name',productoSeleccionado.name)
        setValue('img',productoSeleccionado.imageProducto),
        setValue('categoria',productoSeleccionado.categoria),
        setValue('text',productoSeleccionado.text)
        setValue('precio',productoSeleccionado.precio)
        setValue('namedetallado',productoSeleccionado.namedetallado)

      }
    },[productoSeleccionado,setValue])
    const editar=(data,e)=>{
        e.preventDefault()
       
       const formData = new FormData();

  formData.append("name", data.name);
  formData.append("namedetallado", data.namedetallado);
if (data.img && data.img.length > 0) {
  formData.append("imageProduct", data.img[0]);
}
  formData.append("categoria", data.categoria);
  formData.append("text", data.text);
  formData.append("precio", data.precio);
  formData.append("cantidad", "1");
         
        editarproductoadmin(formData,id)
   
    }
    const editarproductoadmin=async(producto,id)=>{
        try{
           let response=await(editarProducto(producto,id))
      
       if(response.status===200){
        const actualizar=await response.json()
        console.log(actualizar)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Producto Editado",
            showConfirmButton: false,
            timer: 500
          });
          if(actualizar){
            location.reload()
          }
    
             
       } 
        }catch{
            alert("fallo")
        }
     }
    return(
    <>
     <div className="modal fade" id="miModaledit" tabIndex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="miModalLabel">Editar Producto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
         <Form  onSubmit={handleSubmit(editar)} encType="multipart/form-data">
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

 
  {productoSeleccionado?.imageProduct && (
    <div className="mb-2">
      <img
        src={productoSeleccionado.imageProduct.startsWith("http") 
              ? productoSeleccionado.imageProduct 
              : `/uploads/${productoSeleccionado.imageProduct}`} // ajusta ruta si es local
        alt="Imagen actual"
        style={{ maxWidth: "30%", height: "auto", borderRadius: "8px" }}
      />
 
    </div>
  )}

  <Form.Label>Cambiar Imagen del Producto</Form.Label>
  <Form.Control
    type="file"
    name="imageProduct"
    id="imageProduct"
    {...register("img", {})}
  />
</Form.Group>
  </FloatingLabel>

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
    
    </>
    )
}
