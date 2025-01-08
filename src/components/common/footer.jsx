import "../css/footer.css"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"
import { CiHeadphones } from "react-icons/ci";

export const Footer=()=>{
    return(
        <>
        <footer className="nunito-uniquifier-footer">
        <div className="footerContainer">
        <div className="flex1" >
         
         
         <img src="https://ecomert.md/wp-content/uploads/2024/02/share.jpg" alt="img"  width={"170px"}></img>

       
         
        <div style={{margin: "0px"}}>
        <h5>Seguinos en</h5>
          <FaInstagram className="icon"></FaInstagram>
          <FaFacebook className="icon"></FaFacebook>
          <FaTiktok className="icon"></FaTiktok>
          <FaYoutube className="icon"></FaYoutube>
          <h5>Medios de pago</h5>
          <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/dd2c3fc3-45ea-43e6-bcff-9cf5110c979b___b3c0a27259d4e4f9a2a08bad60b8cf90.svg" alt=""  className="tarjeta"/>
          <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/52443e71-e815-4a4a-baad-470fd14e6f87___66fbd627742cea2d6e58b4c5545f62c9.svg" alt=""  className="tarjeta"/>
          <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/1b403e7f-21b3-412c-9ed0-49b7ba24a14b___daff6e2be4b4264d92181706dd034176.svg" alt=""  className="tarjeta"/>
          <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/d0e38006-1466-4294-9868-d2e8969370a7___c8b105cadad8af6aca8d1164c6e2d070.svg" alt=""  className="tarjeta"/>
          <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/6a5968fd-1ffb-4a1e-95b6-e50c6b97cc6c___53519102ea64f853910360c135478239.svg" alt=""  className="tarjeta"/>
           <hr />
          <h6><CiHeadphones className="icon"></CiHeadphones>Atencion al Cliente</h6>
          <h6>
          0810-999-EASY(3279)</h6>
          <h6>

0800-555-0055</h6>
        </div>
        

     
           </div>
          
        
           <div className="flex2">
        
        <h4>Compra online</h4>
       <p>Registrate</p>
       <p>Nuestros Locales</p>
       <p>Medios de pago</p>
       <p>Promociones</p>
       <p>Garantia de precios</p>
        

    </div>
    <div className="flex3">
      <h4>Ecomert</h4>
      <p>Codigo de etica</p>
      <p>Club ecomert</p>
      <p>Contacto</p>
      <p>Mundo experto</p>
      <p>Servicios e instalaciones</p>
      <p>Hot sale</p>
      <p>Trabaja con nosotros</p>
      <p>Red de instalaciones</p>
      
    </div>
    <div className="flex4">
       <h4>Ayuda</h4>
       <p>Libro de quejas</p>
       <p>Decreto175</p>
       <p>Preguntas Frecuentes</p>
       <p>Validacion Biometrica</p>
       <p>Defenza al consumidor</p>
       <p>Terminos y condiciones </p>
       <p>Venta Empresa</p>
       <p>Contactanos</p>
    </div>
    <div className="flex5">
       <h4>Mas cencosud</h4>
       <p>Blainsten</p>
       <p>Jumbo </p>
       <p>Disco</p>
       <p>Vea</p>
       <p>Tarjeta cencosud</p>
    </div>
      </div>
        </footer>
        </>
    )
}