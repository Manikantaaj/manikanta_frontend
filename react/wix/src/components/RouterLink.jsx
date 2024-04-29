import { Link } from "react-router-dom";
import "./RouterLink.css"

function RouterLink() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary text-center bg-white sticky-top"
        id="nav-custom"
      >
        <div className="container-fluid">
          <Link className="navbar-brand col-4 my-4" href="#">
            J.ALISSA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse col-10 d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ClientAlbmuns">
                  ClientAlbmuns
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default RouterLink;

