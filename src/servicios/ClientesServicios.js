import axios from "axios";
const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    
    return axios.get("http://localhost:8080/clientes");
      
}

ClientesServicios.buscarClientes = (criterio) => {
    return axios.get("http://localhost:8080/clientes?q="+criterio);
}

ClientesServicios.buscarCliente = (id) => {
    return axios.get("http://localhost:8080/clientes/"+id);
}

ClientesServicios.guardarCliente = (cliente) => {
    return axios.post("http://localhost:8080/clientes/", cliente);
}

ClientesServicios.modificarCliente = (id, cliente) => {
    return axios.put("http://localhost:8080/clientes/"+id, cliente);
}


ClientesServicios.borrarCliente = (id) => {
    return axios.delete("http://localhost:8080/clientes/"+id);
}


export default ClientesServicios;
