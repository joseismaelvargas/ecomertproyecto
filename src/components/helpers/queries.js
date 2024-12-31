export const URL_productos=import.meta.env.VITE_API_PRODUCTOS


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