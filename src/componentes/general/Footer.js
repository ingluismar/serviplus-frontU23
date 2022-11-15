const Footer = () => {
    return (
        <div className="footer mt-auto py-3 bg-dark">
                <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-6 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-icono.png" width="50" height="50" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="..."></img>
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li id="whatsapp" className="ms-3"><a className="text-muted" href="https://api.whatsapp.com/"><i class="bi bi-whatsapp fs-5"></i></a></li>
                    <li id="linkedin" className="ms-3"><a className="text-muted" href="https://www.linkedin.com/"><i class="bi bi-linkedin fs-5"></i></a></li>
                    <li id="facebook" className="ms-3"><a className="text-muted" href="https://www.facebook.com/"><i class="bi bi-facebook fs-5"></i></a></li>
                </ul>
            </footer>
        </div></div>
    );
}

export default Footer;