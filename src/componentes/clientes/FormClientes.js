import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import ClientesServicios from "../../servicios/ClientesServicios";

const FormClientes = () => {

    const { id } = useParams();
    const navigateTo = useNavigate();
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [ titulo, setTitulo ] = useState("");


   const guardarCliente = async (event) => {
        event.preventDefault();
        if (password === confirm) {

            try{
                const cliente = {
                    nombres: nombres,
                    apellidos: apellidos,
                    documento: documento,
                    telefono: telefono,
                    correo: correo,
                    usuario: usuario,
                    password: password
                    
                }
                console.log(cliente);
                if (id == null) {
                    await ClientesServicios.guardarCliente(cliente);
                    navigateTo("/");
                }
                else {
                    await ClientesServicios.modificarCliente(id, cliente);
                    navigateTo("/clientes");
                }
            } catch (error) {
                setMensaje("Ocurrió un error");
            }
        }
        else {
            setMensaje("Las contraseñas no coinciden");
        }
    }

    const cancelar = () => {
        if (id != null) {
            navigateTo("/clientes");
        }
        else {
            navigateTo("/");
        }
    }

    const cargarCliente = async () => {
        try {
            if (id != null) {
                const respuesta = await ClientesServicios.buscarCliente(id);
                if (respuesta.data != null) {
                    console.log(respuesta.data);
                    setNombres(respuesta.data.nombres);
                    setApellidos(respuesta.data.apellidos);
                    setDocumento(respuesta.data.documento);
                    setTelefono(respuesta.data.telefono);
                    setCorreo(respuesta.data.correo);
                    setUsuario(respuesta.data.usuario);
                    setPassword(respuesta.data.password);
                    setConfirm(respuesta.data.password);
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
        cargarCliente();
    }, [])

    const cambiarNombres = (event) => {
        setNombres(event.target.value);
    }


    const cambiarApellidos = (event) => {
        setApellidos(event.target.value);

    }

    const cambiarDocumento = (event) => {
        setDocumento(event.target.value);

    }
    const cambiarTelefono = (event) => {
        setTelefono(event.target.value);

    }
    const cambiarCorreo = (event) => {
        setCorreo(event.target.value);

    }
    const cambiarUsuario = (event) => {
        setUsuario(event.target.value);

    }
    const cambiarPassword = (event) => {
        setPassword(event.target.value);

    }
    const cambiarConfirm = (event) => {
        setConfirm(event.target.value);

    }

    return (
        <div className="container">
        <div className="px-5 ">
        <h3>{titulo} Creacion de clientes</h3>
        </div>

        <div class="card  px-3 col-7">
        <div class="card-body">
       

           
            <form className="container" action="">
                <div className="row">

                    
                    <div className="col-5 my-2">
                        <label htmlFor="nombres">Nombres*</label>
                        <input className="form-control" type="text" onChange={cambiarNombres} value={nombres} id="nombres" required />
                    </div>

                    <div className="col-5 my-2">
                        <label htmlFor="apellidos">Apellidos*</label>
                        <input className="form-control" type="text" onChange={cambiarApellidos} value={apellidos} id="apellidos" required />
                    </div>

                    <div className="col-5 my-2">
                        <label htmlFor="documento">Documento*</label>
                        <input className="form-control" type="text" onChange={cambiarDocumento} value={documento} id="documento" required />
                    </div>
                    <div className="col-5 my-2">
                        <label htmlFor="telefono">Telefono*</label>
                        <input className="form-control" type="text" onChange={cambiarTelefono} value={telefono} id="telefono" required />
                    </div>

                    <div className="col-5 my-2">
                        <label htmlFor="correo"> Correo *</label>
                        <input className="form-control" type="text" onChange={cambiarCorreo} value={correo} id="correo" required />
                    </div>
                    <div className="col-5 my-2" >
                        <label htmlFor="usuario"> Usuario *</label>
                        <input className="form-control" type="text" onChange={cambiarUsuario} value={usuario} id="usuario" required />
                    </div>

                    <div className="col-5 my-2" >
                        <label  htmlFor="password"> Password *</label>
                        <input className="form-control" type="password" onChange={cambiarPassword} value={password} id="pasword" required />
                    </div>

                    <div className="col-5 my-2" >
                        <label  htmlFor="confirm"> Confirme Password *</label>
                        <input className="form-control" type="password" onChange={cambiarConfirm} value={confirm} id="confirm" required />
                    </div>

                    <div class="col-5 my-2">
                        <button onClick = {guardarCliente} className="btn btn-outline-primary  my-2 my-sm-2 me-2" type="registrar" >Registrar</button>
                        <button onClick={cancelar}className="btn btn-outline-danger  my-2 my-sm-2" type="cancelar" >Cancelar</button>
                        <div id = "mensaje">{mensaje} </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
      </div>
    
    )
}

export default FormClientes;