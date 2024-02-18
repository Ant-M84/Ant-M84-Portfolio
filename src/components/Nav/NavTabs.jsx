import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
      <header className="container-fluid header" style={{ color: "white", marginBottom: 50 }}>
          <div className ="row" >
              <h1 className="col-4">Anthony Michel</h1>
              <nav className="nav nav-tabs navbar col-8 justify-content-end">
                  <ul className="nav-item">
                      <Link 
                          to="/"
                          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                      >
                          About Me
                      </Link>
                  </ul>
                  <ul>
                      <Link 
                          to="/Portfolio"
                          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                      >
                          Porfolio
                      </Link>
                  </ul>
                  <ul>
                      <Link 
                          to="/Resume"
                          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                      >
                          Resume
                      </Link>
                  </ul>
                  <ul className="nav-item">
                      <Link 
                          to="/Contact"
                          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                      >
                          Contact
                      </Link>
                  </ul>
              </nav>
          </div>    
      </header>
  )
}

export default NavTabs;
