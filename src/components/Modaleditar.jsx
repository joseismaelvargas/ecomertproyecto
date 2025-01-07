import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {v4 as uuidv4, v4}from 'uuid'
import { agregarProducto } from './helpers/queries';
import { editarProducto } from './helpers/queries';
import { MdAddBusiness } from "react-icons/md";
import { CiHospital1 } from 'react-icons/ci';
export const Modaleditar=({productoSeleccionado,idadmin,setCreando,creando})=>{
    const {register,handleSubmit,formState:{errors},reset,setValue}=useForm()
    let id=idadmin
    


    useEffect(()=>{
      if(productoSeleccionado){
        setValue('name',productoSeleccionado.name)
        setValue('img',productoSeleccionado.img),
        setValue('categoria',productoSeleccionado.categoria),
        setValue('text',productoSeleccionado.text)
        setValue('precio',productoSeleccionado.precio)

      }
    },[productoSeleccionado,setValue])
    const editar=(data,e)=>{
        e.preventDefault()
       
        let producto={
            id:productoSeleccionado.id,
            name:data.name,
            img:data.img,
            text:data.text,
            precio:Number(data.precio),
            categoria:data.categoria,
       }
         
        editarproductoadmin(producto,id)
      location.reload()
    }
    const editarproductoadmin=async(producto,id)=>{
        try{
           let response=await(editarProducto(producto,id))
       console.log(response)
       if(response.status===200){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Producto Editado",
            showConfirmButton: false,
            timer: 1500
          });
             reset()
    
             
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
            <Form  onSubmit={handleSubmit(editar)} >
      <FloatingLabel
        controlId="floatingTextarea"
        label="Nombre del Producto"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here"
          
        
        {...register("name",{
          required:"Agregue el Nombre del Producto",
          minLength:{
            value:3,
            message:"El nombre debe tener al menos 3 caracteres"
          },
          maxLength:{
            value:10,
            message:"El nombre no puede tener más de 10 caracteres"
          }
        })}/>
        
      </FloatingLabel>
          {errors.name&&<p className="errors mb-3">{errors.name.message}</p>}
      <FloatingLabel
        controlId="floatingTextarea"
        label="Agregue Imagen"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here"  {...register("img",{
          required:"Agregue la imagen del Producto",
          
         })}/>
      </FloatingLabel>
      {errors.img&&<p className="errors mb-3">{errors.img.message}</p>}
      <FloatingLabel
  controlId="floatingSelectGrid"
          label="Categoria de Producto"
          className='mb-3'
>
  <Form.Select
 
    aria-label="Seleccione la categoría del producto"
    {...register("categoria", { required: "Seleccione Categoria" })}
  >
    <option value="">Seleccione la categoría del Producto</option>
    <option value="Limpieza">Limpieza</option>
    <option value="Viberes">Viberes</option>
    <option value="Refrigerios">Refrigerios</option>
  </Form.Select>
</FloatingLabel>
        {errors.categoria&&<p className='errors mb-3'>{errors.categoria.message}</p>}

      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Agregue informacion del producto">
        <Form.Control
     
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          {...register("text",{
            required:"Agregue informacion del producto",
            minLength:{
              value:3,
              message:"la informacion debe tener mas de 5 caracteres"
            },
            maxLength:{
              value:20,
              message:"la informacion no puede tener  más de 20 caracteres"
            }})}/>
      </FloatingLabel>
      {errors.informacion&&<p className="errors mb-3">{errors.informacion.message}</p>}
      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Precio del Producto">
        <Form.Control type='number' style={{ height: '50px',width:'150px' }} 
      {...register("precio",{
          required:"Agregue el Precio del Producto",
        
          })}></Form.Control>
      </FloatingLabel>
      {errors.precio&&<p className="errors mb-3">{errors.precio.message}</p>}
          <button className='btn btn-primary mb-3' type='submit'> Agregar Producto</button>
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