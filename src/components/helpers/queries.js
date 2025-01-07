export const URL_productos=import.meta.env.VITE_API_PRODUCTOS
export const agregarProducto = async (producto) => {
  try {
    const response = await fetch(URL_productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto), // Ahora está al mismo nivel que headers
    });
    return response;
  } catch (error) {
    console.log("Error al crear un Producto:", error);
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
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(productoeditado)
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
    email:"isma@gamil.com"
}
export const logear=(usuario)=>{
 if( usuarios.email===usuario.email&&usuarios.pasword===usuario.pasword){
   sessionStorage.setItem("ecomert",JSON.stringify(usuarios.email)) 
   return true
 }else{
    return false
 }
}