import TicketsServicios from"../../servicios/TicketsServicios"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormTickets = () => {

    const { id } = useParams();
    const navigateTo = useNavigate();
    const [asunto, setAsunto] = useState("");
    const [solicitud, setSolicitud] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [ titulo, setTitulo ] = useState("");

    const crearTicket = async (event) => {

        event.preventDefault();

        try {
            const ticket = {
                asunto: asunto,
                solicitud: solicitud
            }
            console.log(ticket);
            if (id == null) {
                await TicketsServicios.crearTicket(ticket);
                navigateTo("/");
            }
            else {
                await TicketsServicios.modificarTicket(id, ticket);
                navigateTo("/tickets");
            }
        } catch (error) {
            setMensaje("Ocurrió un error");
        }
    }

    const cargarTicket = async () => {
        try {
            if (id != null) {
                const respuesta = await TicketsServicios.buscarTicket(id);
                if (respuesta.data != null) {
                    console.log(respuesta.data);
                    setAsunto(respuesta.data.asunto);
                    setSolicitud(respuesta.data.solicitud);
                }  
            }
            else {
                setTitulo("Registro");
            }
        } catch (error) {
            console.log("Ocurrió un error");
        }
    }

    useEffect(()=> {
        cargarTicket();
    }, [])

    const cancelar = () => {
        if (id != null) {
            navigateTo("/tickets");
        }
        else {
            navigateTo("/");
        }
    }

    const cambiarAsunto = (event) => {
        setAsunto(event.target.value);
    }

    const cambiarSolicitud = (event) => {
        setSolicitud(event.target.value);
    }

    return (

        

        <div className="container ">
              <div className="px-5 my-3">
              <h3>{titulo} Creación de  Tickets</h3>
              </div>

        <div class="card col-6">
        <div class="card-body">
            <form className="container" action=""></form>
            <div class="row my-4">
            </div>
            <div className=" px-5 my-2">
                <label htmlFor="asunto" class="form-label"  >Asunto*</label>
                <input type="asunto" onChange={cambiarAsunto} value={asunto} class="form-control" id="asunto" placeholder="asunto">
                </input>
            </div>
            <div className=" px-5 my-3">
                <label htmlFor="solicitud" class="form-label">Solicitud*</label>
                <textarea class="form-control" onChange={cambiarSolicitud} value={solicitud} id="solicitud" rows="7">
                </textarea>
            </div>
            <div className="row ">
                <div className=" px-5">
                    <label htmlFor="formFile" class="form-label">Adjuntar archivo</label>
                    <input className="form-control" type="file" id="formFile"></input>
                </div>
            </div>
            <div class="px-5">
                <button  onClick={crearTicket} className="btn btn-outline-primary bi bi-rocket-takeoff-fill  my-2 my-sm-2 me-2" type="submit" >Crear Ticket</button>
                <button onClick={cancelar} className="btn btn-outline-danger  my-2 my-sm-2" type="cancelar" >Cancelar</button>
                <div id="mensaje">{mensaje} </div>
            </div>
        </div>
     </div>
    </div>

    )
}

export default FormTickets;