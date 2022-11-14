const ListadoAgentes = () => {
    return (
        <div className="container">
            <h3 className="mt-3">Lista de agentes</h3>
            <table className="table table-sm"> 
                <thead>
                    <tr>
                        <th>Nombres completos</th>
                        <th>Documento</th>
                        <th>Cargo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pepe Pimiento</td>
                        <td>12345</td>
                        <td>Administrador</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListadoAgentes;