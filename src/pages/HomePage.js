import { Container, Row } from "react-bootstrap";
import CarouselComponent from "../components/CarouselComponent"
import DatosCardComponent from "../components/DatosCardComponent";

const HomePage = () => {
    return ( 
        <>
        <CarouselComponent/>
        <Container>
            <Row xs={1} md={1} className="g-1 m-1">
            <DatosCardComponent/>
            <DatosCardComponent/>
            <DatosCardComponent/>
            <DatosCardComponent/>
            </Row>
        </Container>
        </>
     );
}
 
export default HomePage;