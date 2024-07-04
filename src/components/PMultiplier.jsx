import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { RiPencilLine } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { IoIosPlay } from "react-icons/io"
import { FaSave } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PMultiplier = () => {
    const navigate = useNavigate()

    const [page, setPage] = useState("Input")
    const [value, setValue] = useState("Corrosion")
    const [solidlayer, setSolidlayer] = useState([{
        "data": ""

    }])
    const [file, setFile] = useState()

    const GetData = (e) => {
        setPage(e)
    }
    const Getpage = (e) => {
        setValue(e)
    }
    const handleInputChange = (e, i) => {
        const { name, value } = e.target;
        const list = [...solidlayer];
        list[i][name] = value;
        setSolidlayer(list)
    }
    const GetSoilLayer = (e) => {
        setSolidlayer((solidlayer) => [
            ...solidlayer,
            {
                "data": ""
            }
        ]);
    }

    const GetFile = () => {

        if (file == undefined) {
            window.confirm("Please uploaded Your File")
        }
        else {
            window.confirm("File has been successfully uploaded")
        }

    }
    const Getnavigate = () => {
        navigate('/')
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='buttons'>
                            <div>
                                <div>  <MdArrowBackIos style={{ color: "lightgrey", fontSize: "20px" }} onClick={() => Getnavigate()} /> <b> 24015-254 WHC - Green Mallard</b>   <RiPencilLine /> </div>
                                <ul >
                                    <li>
                                        <Button variant="outline-primary" style={{ fontSize: "11px" }}> <FaSave />   <b>Draft</b></Button>
                                    </li>
                                    <li>
                                        <Button variant="outline-primary" style={{ fontSize: "11px" }}><FaSave />  <b>Save</b></Button></li>
                                    <li>   <Button variant="primary" style={{ fontSize: "11px" }}><IoIosPlay /> <b>Run</b></Button></li>

                                </ul>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div className='details'>
                    <ul style={{ textAlign: "left", cursor: "pointer" }}>
                        <li onClick={() => { GetData("Details") }} style={{ borderBottom: page == "Details" ? " 2px solid blue" : "none", color: page == "Details" ? " black" : "#00000082" }}> Details</li>
                        <li onClick={() => { GetData("Settings") }} style={{ borderBottom: page == "Settings" ? " 2px solid blue" : "none", color: page == "Settings" ? " black" : "#00000082" }}> Settings</li>
                        <li onClick={() => { GetData("Input") }} style={{ borderBottom: page == "Input" ? " 2px solid blue" : "none", color: page == "Input" ? " black" : "#00000082" }}> Input</li>
                    </ul>
                </div>

                {page == "Details" ? "" : page == "Settings" ? "" :
                    <div style={{ textAlign: 'left', color: "#00000082" }}>
                        All fields are Required
                        <br />
                        <br />

                        <div>
                            <Button variant="outline-primary" onClick={() => { Getpage("Corrosion") }} style={{ fontSize: "13px", color: value == "Corrosion" ? "green" : "", borderColor: value == "Corrosion" ? "green" : "" }}><b>Corrosion</b> </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="outline-primary" onClick={() => { Getpage("P-Multiplier") }} style={{ fontSize: "13px", color: value == "P-Multiplier" ? "green" : "", borderColor: value == "P-Multiplier" ? "green" : "" }}><b>P Multiplier</b></Button>
                        </div>
                        <br />

                        {value == "Corrosion" ?

                            <Container>
                                <div style={{ color: "black" }}>                                Corrosion Details
                                </div>
                                <br />
                                <Row className="mb-5">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Consider Method</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Aggressive Romanoff Method</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Resistivity (ohm-cm)</Form.Label>
                                        <Form.Control />
                                    </Form.Group>


                                </Row>
                                <Row className="mb-5">
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Design Life (Year)</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zinc Coating (mils)</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>

                            </Container> :
                            <Container>
                                <Row>
                                    {solidlayer && solidlayer.map((data, i) => {
                                        return <>
                                            <Col sm={5} style={{ height: '50px' }} className="mb-3" controlId="exampleForm.ControlInput1">
                                                <input type="number" name="data" value={data.value}
                                                    onChange={(e) => handleInputChange(e, i)} />
                                            </Col>
                                        </>
                                    })}
                                </Row>
                                <Button variant='primary' onClick={(e) => { GetSoilLayer(e) }}>+Add Soil Layer</Button>
                            </Container>
                        }
                        <div>
                            <input type="file" className="mb-3" names="files[]" onChange={(e) => setFile(e.target.files[0])} controlId="exampleForm.ControlInput1" />
                            <Button variant='primary' type="submit" onClick={() => { GetFile() }}>Upload</Button>
                            <iframe src={file}>   </iframe>
                        </div>
                    </div>
                }

            </Container>

        </div>
    )
}

export default PMultiplier
