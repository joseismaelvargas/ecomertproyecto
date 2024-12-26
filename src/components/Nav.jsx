// import { useModal } from './Componentes/useModal'
import { BiAccessibility } from "react-icons/bi";

export const Nav=()=>{
 
    return(
        <nav className='nav'>  
     
        <img src="https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/90afb408-ae59-49dc-93d3-024dfad89cb3___512e889dc7a3dba0a62a4b47dffde6d1.png" alt="" width="100px" />
        <div className='iconcuenta'>
                <p>Mi cuenta</p>
                <BiAccessibility />
        </div>
  
        
        
       </nav>
    )
}