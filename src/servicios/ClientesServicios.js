import axios from "axios";
const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    
    return axios.get("https://pegasobk.herokuapp.com/clientes");
      
}

ClientesServicios.buscarClientes = (criterio) => {
    return axios.get("https://pegasobk.herokuapp.com/clientes?q="+criterio);
}

ClientesServicios.buscarCliente = (id) => {
    return axios.get("https://pegasobk.herokuapp.com/clientes/"+id);
}

ClientesServicios.guardarCliente = (cliente) => {
    return axios.post("https://pegasobk.herokuapp.com/clientes/", cliente);
}

ClientesServicios.modificarCliente = (id, cliente) => {
    return axios.put("https://pegasobk.herokuapp.com/clientes/"+id, cliente);
}


ClientesServicios.borrarCliente = (id) => {
    return axios.delete("http://localhost:8080/clientes/"+id);
}


export default ClientesServicios;
