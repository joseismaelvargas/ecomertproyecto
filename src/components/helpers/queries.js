export const URL_productos=import.meta.env.VITE_API_PRODUCTOS



export const agregarProducto = async (formData) => {
  try {
   const response = await fetch(URL_productos, {
      method: "POST",
      body: formData,
    })
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error en el servidor:", errorData);
    }
    return response;
  } catch (error) {
    console.error("Error al crear un Producto:", error);
  }
};


export const borrarProducto=async(id)=>{
        try{
        const response=await fetch(URL_productos+'/'+id,{
        method:"DELETE"
        })
        return response
        }catch{
          console.log("Error al borrar")
          return false
        }
}
export const editarProducto=async(productoeditado,id)=>{
  try{
    const response=await fetch(URL_productos+"/"+id,{
      method:"PUT",
     
      body:productoeditado
   } )
   return response
   }catch{
    console.log("no se pudo editar")
    return false
   }
}

// Login 
let usuarios={
    pasword:"0340",
    email:"isma@gmail.com"
}
export const logear=(usuario)=>{
 if( usuarios.email===usuario.email&&usuarios.pasword===usuario.pasword){
   sessionStorage.setItem("ecomert",JSON.stringify(usuarios.email)) 
   return true
 }else{
    return false
 }
}