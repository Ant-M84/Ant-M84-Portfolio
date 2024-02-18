function Blog() {
    return (
      <section className="container">
      <div className="row" style={{
          color: "white",
          marginBottom: 50,
          }}>
          <h1 style={{
          color: "white",
          marginBottom: 50}}
          >Development Skills</h1>

          <div className="col-6" style={{ marginBottom: 25}}>
            <h3>Browser Technologies</h3>
              <li>HTML/CSS</li>
              <li>Javascript/jQuery</li>
              <li>Bootstrap</li>
              <li>React.js</li>
          </div>
          <div className="col-6" style={{ marginBottom: 25}}>
            <h3>Computer Science</h3>
              <li>Algorithms</li>
              <li>Big O Notation</li>
              <li>Global Context</li>
              <li>Data Structures</li>
          </div>

          <div className="col-6" style={{ marginBottom: 25}}>
            <h3>Databases</h3>
              <li>MySQL</li>
              <li>MongoDB</li>
          </div> 
          <div className="col-6" style={{ marginBottom: 25}}> 
            <h3>Server Side Development</h3>
              <li>User Authentication</li>
              <li>Progressive Web Applications</li>
              <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
          </div>
        </div>    
  </section>
    );
  }

  export default Blog;
  