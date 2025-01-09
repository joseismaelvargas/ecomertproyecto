import { Routes ,Route} from "react-router-dom"
import { Administrador } from "../page/Administrador"
 export const Rutaadmin=()=>{
return(
   <Routes>
   <Route path="/" element={<Administrador></Administrador>}></Route>
   </Routes>
)
}