import { Carousel } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const CarouselComponent = () => {
    const cursorP={
        cursor:"pointer"
    }
    return ( 
        <Carousel>
            <Carousel.Item>
                <img    crossOrigin="anonymous" 
                        className="d-block w-100" 
                        style={{height:'300px', objectFit:'cover'}}
                        src="/images/imagen5-A.jpg" 
                        alt="First slide"
                />
                <Carousel.Caption>
                    <LinkContainer style={cursorP} to="">
                        <h3 >Electricidad</h3>
                    </LinkContainer>
                        <p >Planeación y organización</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img    crossOrigin="anonymous" 
                        className="d-block w-100" 
                        style={{height:'300px', objectFit:'cover'}}
                        src="/images/imagen6-A.jpg" 
                        alt="Second slide"
                />
                <Carousel.Caption>
                    <LinkContainer style={cursorP} to="">
                        <h3 >Electricidad</h3>
                    </LinkContainer>
                        <p >Planeación y organización</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img    crossOrigin="anonymous" 
                        className="d-block w-100" 
                        style={{height:'300px', objectFit:'cover'}}
                        src="/images/imagen7-A.jpg" 
                        alt="Second slide"
                />
                <Carousel.Caption>
                    <LinkContainer style={cursorP} to="">
                        <h3 >Electricidad</h3>
                    </LinkContainer>
                        <p >Planeación y organización</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img    crossOrigin="anonymous" 
                        className="d-block w-100" 
                        style={{height:'300px', objectFit:'cover'}}
                        src="/images/imagen8-A.jpg" 
                        alt="Second slide"
                />
                <Carousel.Caption>
                    <LinkContainer style={cursorP} to="">
                        <h3 >Electricidad</h3>
                    </LinkContainer>
                        <p >Planeación y organización</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     );
}
 
export default CarouselComponent;