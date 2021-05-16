// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react'
import { HashRouter as Router, NavLink } from 'react-router-dom'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import SiteRoutes from '../Sections/SiteRoute'

const App = () => {
    return (
        <Fragment>
            <Router>
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Item>
                                    <NavLink to="home">Post list</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Row>
                        <Col>
                            <SiteRoutes />
                        </Col>
                    </Row>
                </Container>
            </Router>
        </Fragment>
    )
}

export default App
