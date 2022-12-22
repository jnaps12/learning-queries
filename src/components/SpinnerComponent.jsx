import Spinner from 'react-bootstrap/Spinner';

const style = {
  margin: '0 auto',
  textAlign: 'center'
}

function SpinnerComponent() {
  return <Spinner style={{style}} animation="border" />;
}

export default SpinnerComponent;
