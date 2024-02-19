import jateLogo from '../assets/jate-logo.jpg';
import socialLogo from '../assets/social-network-api.jpg';
import sqlLogo from '../assets/sql-employee-tracker.jpg';
import noteLogo from '../assets/note-taker.jpg';

function Portfolio() {
    return (
        <section className="container-fluid" style={{ color: "white", marginBottom: 50}}>
            <div className="row">
                <div className="navbar justify-content-center">
                    <ul className="col-5 mb-3">
                        <label className="mb-2">PWA - Text Editor</label>
                        <a href="https://github.com/Ant-M84/PWA-Text-Editor">
                        <img src={jateLogo} className="port-logo" alt="Logo"/>
                        </a>
                    </ul >
                    <ul className="col-5 mb-3">
                    <label className="mb-2">Express.js/Mongoose - Social Network API</label>
                        <a href="https://github.com/Ant-M84/Social-Network-API">
                        <img src={socialLogo} className="port-logo" alt="Logo"/>
                        </a>
                    </ul>
                </div> 
                <nav className="navbar justify-content-center">
                    <ul className="col-5 mb-3">
                    <label className="mb-2">SQL - Employee Tracker</label>
                        <a href="https://github.com/Ant-M84/SQL-Employee-Tracker">
                        <img src={sqlLogo} className="port-logo" alt="Logo"/>
                        </a>
                    </ul >
                    <ul className="col-5 mb-3">
                    <label className="mb-2">Express.js - Note Taker</label>
                        <a href="https://github.com/Ant-M84/Note-Taker">
                        <img src={noteLogo} className="port-logo" alt="Logo"/>
                        </a>
                    </ul>
                </nav>     
            </div>
        </section>
    )
};

export default Portfolio;