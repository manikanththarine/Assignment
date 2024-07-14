import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { CiMail } from "react-icons/ci";
import { SiTheboringcompany } from "react-icons/si";
import { PiPassword } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";


const Signup = () => {
    const navigate = useNavigate()

    const [details, setDetails] = useState({
        "name": "",
        "email":'',
        "password": "",
        "Companyname": "",
        "count":0
    })
    let det = localStorage.setItem("details", JSON.stringify(details))
    console.log(det)

    const Sendto = () => {
        navigate("/")

    }
    return (
        <div className='mainbody' >
            <center>
                <div className="main">

                    <div>
                        <br />
                        <h2 style={{ color: "black" }}>Sign Up</h2>
                        <br />
                        <Form style={{ width: "150%", marginLeft: "-38px" }}>
                        <Form.Group as={Col} controlId="formGridZip">
                                <Form.Control type='text' placeholder='Name' onChange={(e) => {
                                    let ele = { ...details }
                                    ele.name = e.target.value
                                    setDetails(ele)
                                }
                                } /><FaRegUser style={{ marginTop: "-63px", marginRight: "-250px" }}/>
 

                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Control type='email' placeholder='Email id ' onChange={(e) => {
                                    let ele = { ...details }
                                    ele.email = e.target.value
                                    setDetails(ele)
                                }
                                } /><CiMail style={{ marginTop: "-63px", marginRight: "-250px" }} />

                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Control type="password" placeholder='Password' onChange={(e) => {
                                    let ele = { ...details }
                                    ele.password = e.target.value
                                    setDetails(ele)
                                }} /><PiPassword style={{ marginTop: "-63px", marginRight: "-250px" }} />

                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Control type='text' placeholder='Company Name'  onChange={(e) => {
                                    let ele = { ...details }
                                    ele.companyname = e.target.value
                                    setDetails(ele)
                                }} /><SiTheboringcompany style={{ marginTop: "-63px", marginRight: "-250px" }} />

                            </Form.Group>
                        </Form>
                        <div>
                            <button className="login-button" onClick={() => { Sendto() }}>Sign Up</button>
                        </div>




                    </div>


                </div>
            </center>
        </div>
    )
}

export default Signup
