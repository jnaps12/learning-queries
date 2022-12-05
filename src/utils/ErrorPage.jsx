import { Link, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const style = {
    textAlign: 'center',
    marginTop: '50px'
  }

  return (
    <div id="error-page" style={style}>
      <h1>Oops!</h1>
      <p>Desculpe, um erro acabou de acontecer.</p>
      <h3>
        <i>{error.statusText || error.message}</i>
      </h3>

      <h2>
        <Link to="/">{`Go back to <Home />`}</Link>
      </h2>
    </div>
  );
}
