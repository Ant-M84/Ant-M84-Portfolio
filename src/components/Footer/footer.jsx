import githubLogo from '../../assets/github-logo.png';
import gmailLogo from '../../assets/gmail-logo.png'

function Footer() {
    return (
        <footer className="container-fluid">
        <div className ="row">
            <nav className="navbar col justify-content-center">
                <ul>
                    <a href="https://github.com/Ant-M84">
                    <img src={githubLogo} className="logo-footer" alt="Github Logo"/>
                    </a>
                </ul>
                <ul>
                    <a href="mailto: anthony.l.michel@gmail.com">
                    <img src={gmailLogo} className="logo-footer" alt="Email Link"/>
                    </a>
                </ul>
            </nav>
        </div>    
    </footer>
    )
};

export default Footer;