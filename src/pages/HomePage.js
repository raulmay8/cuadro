import { Container, Row } from "react-bootstrap";
import CarouselComponent from "../components/CarouselComponent"
import DatosCardComponent from "../components/DatosCardComponent";
import CreateCuadro from "../components/CreateCuadro";

const HomePage = () => {
    return ( 
        <>
        <CarouselComponent/>
        <Container>
            <Row xs={1} md={1} className="g-1 m-1">
            <CreateCuadro/>
            </Row>
            
        </Container>
        </>
     );
}
 
export default HomePage;