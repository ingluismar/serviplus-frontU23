import axios from "axios";

const LoginServicios = {}
const URL = "https://pegasobk.herokuapp.com/login/";
    
LoginServicios.login = (credenciales) => {
    return axios.post(URL, credenciales);
}

export default LoginServicios;