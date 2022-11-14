import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EstadoLogin from "../../enum/EstadoLogin";
import { ContextoUsuario } from "./ContextoUsuario";

const Header = () => {
    const navigateTo = useNavigate();
    const { user, setUsuario } = useContext(ContextoUsuario);

    const revisarSesion = () => {
        if (sessionStorage.getItem("estadologin") != null) {
            const usuarioSesion = {
                nombres: sessionStorage.getItem("nombres"),
                estadologin: parseInt(sessionStorage.getItem("estadologin"))
            }
            console.log(usuarioSesion);
            setUsuario(usuarioSesion);
        }
        else {
            setUsuario({ nombres: "", estadologin: EstadoLogin.NO_LOGUEADO });
        }
    }

    const cerrarSesion = () => {
        sessionStorage.clear();
        revisarSesion();
        navigateTo("/");
    }

    useEffect(() => {
        revisarSesion();
    }, [])


    return (
        <nav className="d-flex flex-wrap  justify-content-center px-5 py-4 mb-1  bg-primary bg-gradient " >
            <a href="/" className="d-flex algin-items-center mb-3 mb-md-0 me-md-auto text-decoration-none" style={{ color: "#fff" }}>
                <span className="fs-4">SERVIPLUS</span>
            </a>

            {
                user.estadologin === EstadoLogin.NO_LOGUEADO ? (
                    <>
                        <ul className="nav nav-pills">
                            <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                            <li class="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tickets</a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item " href="/">Creación de Ticket</a></li>
                                    <li><a className="dropdown-item" href="/">Listado Tickets</a></li>
                                    <li><a className="dropdown-item" href="/">Gestion de Tickets</a></li>
                                </ul>
                            </li>

                            <div className="text-end">
                                <a href="/general/login" type="button" className="btn btn-danger me-1">Login</a>
                                <a href="/clientes/form" type="button" className="btn btn-warning">Sign-up</a>
                            </div>
                        </ul>
                    </>
                ) :

                    user.estadologin === EstadoLogin.CLIENTE ? (
                        <>
                            <ul className="nav nav-pills">
                                <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tickets</a>
                                    <ul className="dropdown-menu ">
                                        <li><a className="dropdown-item " href="/tickets/form">Creación de Ticket</a></li>
                                        <li><a className="dropdown-item" href="/tickets">Listado Tickets</a></li>
                                        <li><a className="dropdown-item" href="/gestiontickets">Gestion de Tickets</a></li>
                                    </ul>
                                </li>

                                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                    <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                                </form>

                                <div className="text-end">
                                    <a href="/general/login" type="button" className="btn btn-danger me-1">Login</a>
                                    <a href="/clientes/form" type="button" className="btn btn-warning">Sign-up</a>
                                </div>
                            </ul>
                        </>

                    ) :

                        user.estadologin === EstadoLogin.ADMIN ? (
                            <>  
                                <ul className="nav nav-pills">
                                    <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Agentes</a>
                                        <ul className="dropdown-menu ">
                                            <li><a className="dropdown-item " href="/clientes/form">Creación de Agentes</a></li>
                                            <li><a className="dropdown-item" href="/clientes/">Listado Agentes</a></li>
                                            <li><a className="dropdown-item" href="/">Gestion de Agentes</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Clientes</a>
                                        <ul className="dropdown-menu ">
                                            <li><a className="dropdown-item " href="/clientes/form">Creación de Usuarios</a></li>
                                            <li><a className="dropdown-item" href="/clientes/">Listado Usuarios</a></li>
                                            <li><a className="dropdown-item" href="/general/login">Gestion de Usuarios</a></li>
                                        </ul>
                                    </li>

                                    <div className="nav-item dropdown">
                                        <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tickets</a>

                                        <ul className="dropdown-menu ">
                                            <li><a className="dropdown-item " href="/tickets/form">Creación de Ticket</a></li>
                                            <li><a className="dropdown-item" href="/tickets">Listado Tickets</a></li>
                                            <li><a className="dropdown-item" href="/gestiontickets">Gestion de Tickets</a></li>
                                        </ul>
                                    </div>
                                </ul>
                                <form className="col-13 col-lg-auto mb-1 mb-lg-0 me-lg-3" role="search">
                                    <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                                </form>
                                <li className="col-md-2 text-end text-light">
                                {user.nombres} 
                                <button onClick={cerrarSesion} type="button" className="btn btn-sm btn-warning ms-2 my-2">Cerrar sesion</button>
                                
                                </li>
                            </>

                        ) : (
                            <>
                                <ul className="nav nav-pills">
                                    <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tickets</a>
                                        <ul className="dropdown-menu ">
                                            <li><a className="dropdown-item " href="/">Creación de Ticket</a></li>
                                            <li><a className="dropdown-item" href="/">Listado Tickets</a></li>
                                            <li><a className="dropdown-item" href="/">Gestion de Tickets</a></li>
                                        </ul>
                                    </li>
                                    <div className="col-md-4 text-end text-light">
                                        {user.nombres}
                                        <button onClick={cerrarSesion} type="button" className="btn btn-sm btn-warning">Cerrar sesion</button>
                                    </div>
                                </ul>
                            </>

                        )

            }

        </nav>
    )
}

export default Header;