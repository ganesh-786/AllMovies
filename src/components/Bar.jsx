import { Link } from "react-router-dom";

function Bar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Link to="/" className="text-white text-decoration-none">
                GC_Movies
              </Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Link
                      to="/Card"
                      className="text-white text-decoration-none"
                    >
                      WatchList
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Link to="/Fav" className="text-white text-decoration-none">
                      Favourite
                    </Link>
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Bar;
