import Nav from 'react-bootstrap/Nav'
import React, {Component} from 'react';

const HeaderComponent = () => {
    return ( 
        <Nav justify variant="tabs" defaultActiveKey="/home" className='bg-dark'>
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contacto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3">Ayuda</Nav.Link>
        </Nav.Item>
      </Nav>
     );
}
 
export default HeaderComponent;