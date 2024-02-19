const Download = () => {
  const pdfUrl = '../assets/resume.pdf';
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "resume-anthonymichel.pdf";
  link.click();
}

function Resume() {
  return (
    <section className="container">
      
      <div>
          <button type="button" className="btn btn-primary mb-5" onClick={Download}>
            Download Resume
          </button>
        </div> 

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

export default Resume;


  