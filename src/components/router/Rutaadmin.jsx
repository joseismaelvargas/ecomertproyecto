import { Routes ,Route} from "react-router-dom"
import { Administrador } from "../page/Administrador"
 export const Rutaadmin=()=>{
return(
   <Routes>
   <Route path="/administrador" element={<Administrador></Administrador>}></Route>
   </Routes>
)
}