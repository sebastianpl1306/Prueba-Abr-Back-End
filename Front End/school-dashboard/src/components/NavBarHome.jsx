export const NavBarHome = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand mb-0 h1" href="/">Escuela App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/profesores">Profesores</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/estudiantes">Estudiantes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/materias">Materias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/reportes">Reportes</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}