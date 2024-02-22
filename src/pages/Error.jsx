import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className ="row" style={{ color: "white"}}>
      <h1 style={{ marginBottom: 50}}>Hmmm, something is not quite right...</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ marginBottom: 50}}>Please click the link below to return to the homepage.</p>
    
      <Link
        to="/" 
        style={{ color: "white"}}>
          Home
        </Link>
    </div>
  );
}

export default ErrorPage;