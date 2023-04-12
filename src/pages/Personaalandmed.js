import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import './styles.css';
import { Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
    const now = 12.5;
    return(
        <div id="formContainer">
            {/* <Col id="leftCol">
                <Button disabled>Eesmärk</Button><br />
                <Button>Uurimisküsimus</Button><br />
            </Col> */}
            <Col className="d-flex align-items-center justify-content-center">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <h3>Personaalandmed</h3>
                        <br />
                        <Breadcrumb>
                                <Breadcrumb.Item active>Personaalandmed</Breadcrumb.Item>
                                <Breadcrumb.Item href="/eesmark">Eesmärk</Breadcrumb.Item>
                                <Breadcrumb.Item href="/uurimiskysimus">Uurimisküsimus</Breadcrumb.Item>
                                <Breadcrumb.Item href="/uurimismeetod">Uurimismeetod</Breadcrumb.Item>
                                <Breadcrumb.Item href="/sisend">Sisend</Breadcrumb.Item>
                                <Breadcrumb.Item href="/tegevused">Tegevused</Breadcrumb.Item>
                                <Breadcrumb.Item href="/valjundid">Väljundid</Breadcrumb.Item>
                                <Breadcrumb.Item href="/moju">Mõju</Breadcrumb.Item>
                        </Breadcrumb>
                        <Col id="progressBar">
                            <ProgressBar now={now} />
                            <p id="descriptionText">{now}%</p>
                        </Col>
                        <div id="rowContainer">
                                <Button variant="outline-success" id="forwardBtn" href="/eesmark">Edasi →</Button>{' '}
                        </div>
                        <br />
                        <Form.Label>E-maili aadress</Form.Label>
                        <Form.Control className="w-80" type="email" placeholder="Sisesta e-mail..." />
                        <br />
                        <Form.Label>Toote nimi</Form.Label>
                        <Form.Control className="w-80" type="email" placeholder="Sisesta toote nimi..." />
                        <br />
                        <Form.Label>Toote lühikirjeldus</Form.Label>
                        <Form.Control className="w-80" as="textarea" rows={4} cols={20} placeholder="Sisesta toote nimi..." />
                    </Form.Group>
                </Form>
            </Col>
            
        </div>
        
    );
}

export default Homepage;