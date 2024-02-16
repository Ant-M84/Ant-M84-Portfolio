import githubLogo from '../../assets/github-logo.png';

function Footer() {
    return (
        <footer className="container-fluid">
        <div className ="row">
            <nav className="navbar col justify-content-center">
                <ul>
                    <a href="https://github.com/Ant-M84">
                    <img src={githubLogo} className="logo-github" alt="Github Logo"/>
                    </a>
                </ul>
            </nav>
        </div>    
    </footer>
    )
};

export default Footer;