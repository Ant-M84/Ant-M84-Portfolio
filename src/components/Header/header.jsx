function Header () {
    return (
        <header className="container-fluid header">
            <div className ="row">
                <h1 className="col-4">Anthony Michel</h1>
                <nav className="navbar col-8 justify-content-end">
                    <ul>
                        <a href="#">About Ant-M84</a>
                    </ul>
                    <ul>
                        <a href="#">Portfolio</a>
                    </ul>
                    <ul>
                        <a href="#">Contact</a>
                    </ul>
                    <ul>
                        <a href="#">Resume</a>
                    </ul>
                </nav>
            </div>    
        </header>
    )
}

export default Header;
