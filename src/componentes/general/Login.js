import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EstadoLogin from "../../enum/EstadoLogin";
import Estados from "../../enum/Estados";
import LoginServicios from "../../servicios/LoginServicios";
import { ContextoUsuario } from "./ContextoUsuario";



const Login = () => {
    const navigateTo = useNavigate();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [recordar, setRecordar] = useState(false);
    const { user, setUsuario } = useContext(ContextoUsuario);

    const crearSesion = (datosPerfil) => {
        sessionStorage.setItem("nombres", datosPerfil.nombres);
        sessionStorage.setItem("estadologin", datosPerfil.estadologin);
        setUsuario(datosPerfil);
    }

    const validar = async (event) => {
        event.preventDefault();

        try {
            const credenciales = {
                correo: correo,
                password: password
            };
            const result = await LoginServicios.login(credenciales);
            console.log(result);
            const datosPerfil = {
                nombres: result.data.nombres,
                estadologin: result.data.es_admin ? EstadoLogin.ADMIN : EstadoLogin.CLIENTE


            }
            crearSesion(datosPerfil)
            console.log(datosPerfil);
            if (datosPerfil.estadologin === EstadoLogin.ADMIN) {

                navigateTo("/dashboard");
            }



            else {
                navigateTo("/");
            }

        } catch (error) {
            if (error.response.status === 401) {
                setMensaje(error.response.data);
            }
        }
    }



    const cambiarCorreo = (event) => {
        setCorreo(event.target.value);
        setMensaje("");
    }

    const cambiarPassword = (event) => {
        setPassword(event.target.value);
        setMensaje("");
    }

    const cambiarRecordar = (event) => {
        setRecordar(event.target.checked);
    }



    return (


        <body className="img-fluid img-thumbnail w-auto p-5" background="https://img.freepik.com/vector-gratis/fondo-tinta-alcohol-dorado-pintura-arte-fluido-abstracto_25819-752.jpg?w=1380&t=st=1667409718~exp=1667410318~hmac=f009fb6ef3e87f66d53fc8fd9bc4898f00d01443995f0eff6625d6905c248ce2">
            <form onSubmit={validar} className="card m-auto p-4 p-md-5 rounded-5 shadow bg-dark text-white opacity-100" style={{ maxWidth: "600px", padding: "15px" }}>
                <h3 className="h3 mb-3">Ingresar</h3>
                
                    <form onSubmit={validar} className="card shadow w-100 m-auto bg-dark" style={{ maxWidth: "800px", padding: "15px" }}>
                        
                        <div className="row mb-2 ">
                            <label htmlFor="correo" className="form-control-sm col-3">correo</label>
                            <div className="col-9">
                                <input type="correo" className="form-control form-control-sm col-8" onChange={cambiarCorreo} value={correo} id="correo" name="correo" placeholder="nombre@ejemplo.com" required />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <label htmlFor="password" className="form-control-sm col-3">Contraseña</label>
                            <div className="col-9">
                                <input type="password" className="form-control form-control-sm" onChange={cambiarPassword} value={password} id="password" name="password" placeholder="Contraseña" required />
                            </div>
                        </div>

                        
                    </form>
                
                <div className="checkbox mb-3">
                    <label className="form-control-sm">
                        <input className="" type="checkbox" onChange={cambiarRecordar} checked={recordar} /> Recordar contraseña
                    </label>
                </div>
                < button className="btn-warning btn btn-outline-white me-4" type="submit">Ingresar</button>
                <a href="/" className="btn btn-light me-4" type="submit">Cancelar</a> {mensaje}
            </form>
            </body>
            )
}

            export default Login;