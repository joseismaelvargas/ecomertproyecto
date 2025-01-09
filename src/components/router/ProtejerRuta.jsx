import { Navigate } from "react-router-dom"
const ProtejerRuta=({children})=>{
   const usuario=JSON.parse(sessionStorage.getItem("ecomert"))||null
   if(!usuario){
    return <Navigate to={"/"}></Navigate>
   }else{
    return children
   }
   
}
export default ProtejerRuta