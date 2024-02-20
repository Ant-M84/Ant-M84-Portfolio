import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'

function Nav() {
    const currentPage = useLocation().pathname;

    return (
      <header className="container-fluid header mt-3" style={{ color: "white", marginBottom: 50 }}>
          <div className ="row" >
              <h1 className="col-md-4">Anthony Michel</h1>
              <nav className="nav navbar nav-pills col-md-8 justify-content-end">
                  <ul className="nav-item">
                      <Link 
                          to="/"
                          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                          style={{ color: "white"}}
                      >
                          About Me
                      </Link>
                  </ul>
                  
                  <ul className="nav-item">
                      <Link 
                          to="/Portfolio"
                          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                          style={{ color: "white"}}
                      >
                          Portfolio
                      </Link>
                  </ul >
                  <ul className="nav-item">
                      <Link 
                          to="/Resume"
                          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                          style={{ color: "white"}}
                      >
                          Resume
                      </Link>
                  </ul>
                  <ul className="nav-item">
                      <Link 
                          to="/Contact"
                          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                          style={{ color: "white"}}
                      >
                          Contact
                      </Link>
                  </ul>
              </nav>
          </div>    
      </header>
  )
}

export default Nav;
