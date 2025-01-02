import "../css/administrador.css"
export const Administrador=()=>{
    return(
        <>
        <section className="container-fluid Administrador" >
       <h2 className="text-center">Section administrador</h2>
          <div className="table responsive mt-5">
            <table className="table table-hover table-bordered border-light text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Producto</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

          </div>
        </section>
        </>
    )
}