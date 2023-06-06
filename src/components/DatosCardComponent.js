import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DatosCardComponent = () => {
    return ( 
        <Card>
            <Card.Header as='h5'>Datos</Card.Header>
            <Card.Body>
                <Card.Title>Ingresa los datos a calcular</Card.Title>
                <Card.Text>
                    Ingresa el material o herramienta
                </Card.Text>
                <Button variant='primary'>Ingresar</Button>
            </Card.Body>
        </Card>
     );
}
 
export default DatosCardComponent;