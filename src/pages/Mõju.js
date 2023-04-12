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
    const now = 99.9;
    return(
        <div id="formContainer">
            {/* <Col id="leftCol">
                <Button disabled>Eesmärk</Button><br />
                <Button>Uurimisküsimus</Button><br />
            </Col> */}
            <Col className="d-flex align-items-center justify-content-center">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <h3>Mõju</h3>
                        <p id="descriptionText">Mis on toote oodatav mõju?</p>
                        <br />
                        <Breadcrumb>
                                <Breadcrumb.Item href="/personaalandmed">Personaalandmed</Breadcrumb.Item>
                                <Breadcrumb.Item href="/eesmark">Eesmärk</Breadcrumb.Item>
                                <Breadcrumb.Item href="/uurimiskysimus">Uurimisküsimus</Breadcrumb.Item>
                                <Breadcrumb.Item href="/uurimismeetod">Uurimismeetod</Breadcrumb.Item>
                                <Breadcrumb.Item href="/sisend">Sisend</Breadcrumb.Item>
                                <Breadcrumb.Item href="/tegevused">Tegevused</Breadcrumb.Item>
                                <Breadcrumb.Item href="/valjundid">Väljundid</Breadcrumb.Item>
                                <Breadcrumb.Item active>Mõju</Breadcrumb.Item>
                        </Breadcrumb>
                        <Col id="progressBar">
                            <ProgressBar now={now} />
                            <p id="descriptionText">{now}%</p>
                        </Col>
                        <div id="rowContainer">
                                <Button variant="outline-danger" id="backBtn" href="/valjundid">← Tagasi</Button>{' '}
                                <Button variant="outline-success" id="forwardBtn" href="/finish">Lõpeta ankeet →</Button>{' '}
                        </div>
                        <br />
                        
                        <Form.Control as="textarea" rows={10} cols={70} id="textArea" />
                        <br />
                        <p>Omandatud oskused, strateegiad</p>
                        <p>Testi tulemused</p>
                        <p>Muutused uskumustes, mõtteviisis</p>
                    </Form.Group>
                </Form>
            </Col>
            
        </div>
        
    );
}

export default Homepage;