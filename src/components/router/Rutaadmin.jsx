import { Routes ,Route} from "react-router-dom"
import { Administrador } from "../page/Administrador"
import { ProductosProvider, useProductos } from "../helpers/ProductosContext.jsx";
 export const Rutaadmin=()=>{
return(
   <Routes>
   <Route path="/" element={<Administrador></Administrador>}></Route>
   </Routes>
)
}