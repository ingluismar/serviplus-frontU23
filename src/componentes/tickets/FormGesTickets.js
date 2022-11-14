import TicketsServicios from"../../servicios/TicketsServicios"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormGesTickets = () => {

    const { id } = useParams();
    const navigateTo = useNavigate();
    const [fecha, setFecha] = useState("");
    const [asunto, setAsunto] = useState("");
    const [solicitud, setSolicitud] = useState("");
    const [estadotk, setEstado] = useState("");
    const [agente, setAgente] = useState("");
    const [cierre, setCierre] = useState("");
    const [fechaCierre, setFechaCierre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [ titulo, setTitulo ] = useState("");

    const gestionarTicket = async (event) => {

        event.preventDefault();

        try {
            const ticket = {
                fecha:fecha,
                asunto: asunto,
                solicitud: solicitud,
                estadotk: estadotk,
                agente: agente,
                cierre: cierre,
                fechaCierre: fechaCierre
                
            }
                console.log(ticket);
                if (id != null) {
                await TicketsServicios.modificarTicket(id, ticket);
                navigateTo("/tickets");
            }
            
            else {
               
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
                    setFecha(respuesta.data.fecha);
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

    

    const cancelar = () => {
        if (id != null) {
            navigateTo("/tickets");
        }
        else {
            navigateTo("/");
        }
    }

    const cambiarEstado = (event) => {
        setEstado(event.target.value);
    }

    const cambiarAgente = (event) => {
        setAgente(event.target.value);
    }

    const cambiarCierre = (event) => {
        setCierre(event.target.value);
    }

    const cambiarFechaCierre = (event) => {
        setFechaCierre(event.target.value);
    }

    useEffect(()=> {
        cargarTicket();
    }, [])

    return (

      

        <div className="container ">
              <div className="px-5 my-3">
              <h3>{titulo} Gestion de Tickets</h3>
              </div>
    <div className="row ">
    
        <div class="card col-6">
        <div class="card-body">

            <form className="container" action=""></form>
            <div class="row my-4">
            </div>

            <div className=" px-5 my-2">
                <label htmlFor="fecha"  class="form-label"  >Fecha*</label>
                <input type="fecha" value ={fecha}   class="form-control" id="fecha"disabled>
                </input>
            </div>

            <div className=" px-5 my-2">
                <label htmlFor="asunto"  class="form-label"  >Asunto*</label>
                <input type="asunto" value={asunto} class="form-control" id="asunto"disabled>
                </input>
            </div>

            <div className=" px-5 my-3">
                <label htmlFor="solicitud" class="form-label">Solicitud*</label>
                <textarea class="form-control"value={solicitud}  id="solicitud" rows="7"disabled>
                </textarea>
            </div>
        </div>
        </div>
        <div class="card col-6">
        <div class="card-body">

            <div className="px-5 my-2">
                <label htmlFor="fechaCierre" class="form-label"  >Fecha de cierre*</label>
                <input type="fechaCierre" onChange={cambiarFechaCierre} value={fechaCierre} class="form-control" id="fechaCierre">
                </input>
            </div>
         
            <div className="px-5 my-3">
                <label htmlFor="cierre" class="form-label">Solucion cierre*</label>
                <textarea class="form-control" onChange={cambiarCierre} value={cierre} id="cierre" rows="7">
                </textarea>
            </div>
            
           
            <div className="px-5 my-2">   
            <label htmlFor="agente" class="form-label"  >Seleccione Agente*</label>
                <select className="form-control" onChange={cambiarAgente} value={agente} type = "text" name = "agente" id = "agente" required>
                <option value = ""selected>seleccion agente</option>
                <option value = "Agente1">Agente1</option>
                <option value = "Agente2">Agente2</option>
                <option value = "Agente3">Agente3</option>
                <option value = "Agente4">Agente4</option>          
                </select> 
            </div>

            <div className=" px-5 my-2">
                <label htmlFor="estadotk" class="form-label"  >Seleccione Estado Tickets*</label>
                <select className="form-control" onChange={cambiarEstado} value={estadotk} type = "text" name = "estadotk" id = "estadotk" required>
                <option value = ""selected>seleccion estado</option>
                <option value = "Pendiente">Pendiente</option>
                <option value = "En preoceso">En proceso</option>
                <option value = "Solucionado">Solucionado</option>
                <option value = "Suspendido">Suspendido</option>          
                </select> 
            </div>

            <div class="px-5">
                <button  onClick={gestionarTicket} className="btn btn-outline-primary bi bi-usb-drive  my-2 my-sm-2 me-2"  type="submit" >Guardar</button>
                <button onClick={cancelar} className="btn btn-outline-danger  my-2 my-sm-2" type="cancelar" >Cancelar</button>
                <div id="mensaje">{mensaje} </div>
            </div>
        </div>
    </div>
    </div>
    </div>
     
    )
}

export default FormGesTickets;