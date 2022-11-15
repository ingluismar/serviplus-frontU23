import axios from "axios";
const TicketsServicios = {};

TicketsServicios.listarTickets = () => {
    
    return axios.get("https://pegasobk.herokuapp.com/tickets");
      
}

TicketsServicios.buscarTickets = (criterio) => {
    return axios.get("https://pegasobk.herokuapp.com/tickets?q="+criterio);
}

TicketsServicios.buscarTicket = (id) => {
    return axios.get("https://pegasobk.herokuapp.com/tickets/"+id);
}

TicketsServicios.crearTicket = (ticket) => {
    return axios.post("https://pegasobk.herokuapp.com/tickets/", ticket);
}

TicketsServicios.modificarTicket = (id, ticket) => {
    return axios.put("https://pegasobk.herokuapp.com/tickets/"+id, ticket);
}

export default TicketsServicios;