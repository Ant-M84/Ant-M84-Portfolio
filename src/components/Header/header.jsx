function Header () {
    return (
        <header className="container-fluid header" style={{
            color: "white",
            marginBottom: "50px",
            }}>
            <div className ="row" >
                <h1 className="col-4">Anthony Michel</h1>
                <nav className="navbar col-8 justify-content-end">
                    <ul>
                        <a href="About-Ant-M84" className="link-light link-underline-opacity-0">About Ant-M84</a>
                    </ul>
                    <ul>
                        <a href="Portfolio" className="link-light link-underline-opacity-0">Portfolio</a>
                    </ul>
                    <ul>
                        <a href="Contact" className="link-light link-underline-opacity-0">Contact</a>
                    </ul>
                    <ul>
                        <a href="Resume" className="link-light link-underline-opacity-0">Resume</a>
                    </ul>
                </nav>
            </div>    
        </header>
    )
}

export default Header;
