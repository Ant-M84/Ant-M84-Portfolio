import githubLogo from '../assets/github-logo.png';

function Portfolio() {
    return (
        <section className="container-fluid" style={{ color: "white", marginBottom: 50}}>
            <div className="row">
                <nav className="navbar justify-content-center">
                    <ul className="col-3">
                        <a href="#">
                        <img src={githubLogo} className="logo" alt="Logo"/>
                        </a>
                    </ul >
                    <ul className="col-3">
                        <a href="#">
                        <img src={githubLogo} className="logo" alt="Logo"/>
                        </a>
                    </ul>
                    <ul className="col-3">
                        <a href="#">
                        <img src={githubLogo} className="logo" alt="Logo"/>
                        </a>
                    </ul>
                </nav> 
                <nav className="navbar justify-content-center">
                    <ul className="col-3">
                        <a href="#">
                        <img src={githubLogo} className="logo" alt="Logo"/>
                        </a>
                    </ul >
                    <ul className="col-3">
                        <a href="#">
                        <img src={githubLogo} className="logo" alt="Logo"/>
                        </a>
                    </ul>
                    <ul className="col-3">
                        <a href="#">
                        <img src={githubLogo} className="logo" alt="Logo"/>
                        </a>
                    </ul>
                </nav>     
            </div>
        </section>
    )
};

export default Portfolio;