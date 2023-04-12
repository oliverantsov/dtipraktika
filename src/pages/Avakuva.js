import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import './styles.css';
var randomize = require("randomatic");


function Homepage() {

    /* const generateNewCode = (e) => {
        e.preventDefault();
        let code = randomize("aA0", 8);
    } */
    const [code, setCode] = useState(undefined);


    return(
        <div id="formContainer">
            {/* <Col id="leftCol">
                <Button disabled>Eesmärk</Button><br />
                <Button>Uurimisküsimus</Button><br />
            </Col> */}
            <Col className="d-flex align-items-center justify-content-center">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <h3>Avakuva</h3>
                        <br />
                        
                        <div id="rowContainer">
                            <p>Teie sessioonikood:</p>
                            <h5><b>{code}</b></h5>
                            <Button variant="outline-warning" id="generateBtn" onClick={() => setCode(randomize("A0", 8))} >Genereeri kood</Button>{' '}
                            <Button variant="outline-success" id="forwardBtn" href="/personaalandmed">Edasi →</Button>{' '}
                        </div>
                        <br />
                    </Form.Group>
                </Form>
            </Col>
            
        </div>
        
    );
}

export default Homepage;