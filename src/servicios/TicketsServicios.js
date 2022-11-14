import axios from "axios";
const TicketsServicios = {};

TicketsServicios.listarTickets = () => {
    
    return axios.get("http://localhost:8080/tickets");
      
}

TicketsServicios.buscarTickets = (criterio) => {
    return axios.get("http://localhost:8080/tickets?q="+criterio);
}

TicketsServicios.buscarTicket = (id) => {
    return axios.get("http://localhost:8080/tickets/"+id);
}

TicketsServicios.crearTicket = (ticket) => {
    return axios.post("http://localhost:8080/tickets/", ticket);
}

TicketsServicios.modificarTicket = (id, ticket) => {
    return axios.put("http://localhost:8080/tickets/"+id, ticket);
}

export default TicketsServicios;