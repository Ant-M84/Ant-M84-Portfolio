import githubLogo from '../../assets/github-logo.png';
import linkedLogo from '../../assets/linkedin-logo.png';
import stackLogo from '../../assets/stack-logo.png'

function Footer() {
    return (
        <footer className="container-fluid">
        <div className ="row">
            <nav className="navbar col justify-content-center">
                <ul>
                    <a href="https://github.com/Ant-M84">
                    <img src={githubLogo} className="logo-footer" alt="Github Link"/>
                    </a>
                </ul>
                <ul>
                    <a href="">
                    <img src={linkedLogo} className="logo-footer" alt="LinkedIn Link"/>
                    </a>
                </ul>
                <ul>
                    <a href="">
                    <img src={stackLogo} className="logo-footer" alt="Stack Overflow Link"/>
                    </a>
                </ul>
            </nav>
        </div>    
    </footer>
    )
};

export default Footer;