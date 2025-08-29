import"./css/messaje.css"
import { Usemodal } from "./helpers/Usemodal"
import { LuMessageCircleMore } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
const Buttonmessaje = () => {
   const  [isOpen,modalClose,modalOpen]=Usemodal()
  return (
    <>
   
   <LuMessageCircleMore className="button-message" onClick={modalOpen}></LuMessageCircleMore>

    <div className={`chat_popup ${isOpen?"is-open":""}`}  id="myForm">
   <form action="" className="form_container">
            <div  className="container-header">
         
                <img src="./img/logoPrincipal.jpg" alt="logo" width={"60px"} />
           
                         <IoClose  className="modalclose" onClick={modalClose}> </IoClose>
            </div>
            <label id="msg"  className=""> Dejános tu mensaje...</label>
            <textarea
              className=" w-100 form-container text-start ps-3"
              name="msg"
             
              placeholder="Escribe un mensaje aquí..."
              required
            ></textarea>
            <button type="submit" >Enviar</button>
          </form></div>
          </>
  )
}

export default Buttonmessaje
