import React, { useState, useEffect } from 'react'
import { Col, Container, Modal, FormControl, Row, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { IoIosPlay } from "react-icons/io"
import { RiPencilLine } from "react-icons/ri";
import { FaSave } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdLinkOff } from "react-icons/md";
import { FaRegClone } from "react-icons/fa6";
import { MdArrowBackIos } from "react-icons/md";
import PMultiplier from './PMultiplier';

const Search = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);

    let admindetails = JSON.parse(localStorage.getItem("details"))

    const [projects, setProjects] = useState([
        {
            ProjectName: "24015-237 WHC- Delaware Ranch, TX - 46MW",
            CreatedDate: "2024-05-31",
            Status: "Active",
        },
        {
            ProjectName: "24015-254 WHC - Green Mallard",
            CreatedDate: "2024-05-31",
            Status: "Active",
        },
        {
            ProjectName: "24015-145_WHC -Hillsboro-1",
            CreatedDate: "2024-05-31",
            Status: "Active",
        },
        {
            ProjectName: "McCarthy Demo",
            CreatedDate: "2024-05-31",
            Status: "Active",
        },
        {
            ProjectName: "24015.260 PCL-Case",
            CreatedDate: "2024-05-31",
            Status: "InActive",
        }
    ])

    const [search, setSearch] = useState("")
    const Getnavegate = () => {
        navigate('/p-multiplier')

    }
    const [circle, setCircle] = useState("false")
    const [projectdata, setprojectdata] = useState('')
    const GetCircle = () => {
        setCircle("true")
    }

    const Showmodel = (data, i) => {
        localStorage.setItem("ittercount",JSON.stringify(1))
        let num = JSON.parse(localStorage.getItem("ittercount"))        
        localStorage.setItem("itterationcount",JSON.stringify(num+1))

        setprojectdata(data)
        console.log(data, i)
        setShow1(true)

    }
    useEffect(() => {
        if (admindetails.count == 4) {
            setShow(true)
        }
    }, [])
    return (
        <div >
            <SideBar />

            <center>
                <div style={{ width: "80%", marginLeft: "20%", marginTop: "-40%" }}>

                    <div style={{ textAlign: "left" }}>
                        <b>Projects</b>
                    </div>
                    <br />
                    <Container>
                        <Row style={{ backgroundColor: 'white', width: "100%", fontSize: "19px" }}>
                            <Col xs={12} md={1}><b>Project</b>  <FormControl style={{ width: "400%", margin: "-32px 123px" }} type="text" placeholder='Search '
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                }}
                            /></Col>
                            <Col xs={12} md={9}></Col>
                            <Col style={{ textAlign: "rigth" }}>
                                <OverlayTrigger
                                    rootClose="true"
                                    trigger="click"
                                    rootCloseEvent="mousedown"
                                    placement="bottom"
                                    overlay={
                                        <Tooltip id={`tooltip-right`} style={{ cursor: 'pointer', color: 'white' }}>

                                            <Row >
                                                <Col>
                                                    <Button variant='none' style={{ color: "white" }} onClick={() => setCircle("null")} > New Project 1</Button>
                                                    {circle == "true" ? <span><div class="panel" >
                                                                    <div class="pulse-base" style={{ marginLeft: "-16.5px", marginTop: "-35px" }}></div>
                                                                </div></span> : ""} 
                                                </Col>
                                            </Row>

                                        </Tooltip>
                                    }
                                >
                                    <Button style={{ textDecoration: " none" }} onClick={() => GetCircle()}>+Create New Project</Button>
                                </OverlayTrigger>


                            </Col>

                            {circle == "false" ? <span><div class="panel" >
                                <div class="pulse-base" title="Click to Creatr new Project"  style={{ marginLeft: "85%", marginTop: "-3%", width: "100px", height: '1px' }}></div>
                            </div></span> :
                                ""}
                        </Row>


                        <div class="col-md-12">
                            <div style={{ marginTop: "1%" }} >
                                <Table responsive style={{ boxSizing: "border-box" }}>
                                    <thead style={{ textAlign: "left" }}>
                                        <tr>
                                            <th style={{ color: "darkgray" }}>
                                                Project Name
                                            </th>
                                            <th style={{ color: "darkgray" }}>
                                                Created Date
                                            </th>
                                            <th style={{ color: "darkgray" }}>
                                                Status
                                            </th>
                                            <th >

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: "left" }}>
                                        {projects && projects.filter(name => ((name.ProjectName)).toLowerCase().includes(search.toLowerCase())).map((data, i) => {
                                            return <>
                                                <tr>
                                                    <td style={{ width: "50%" }}>
                                                        {data.ProjectName}
                                                    </td>
                                                    <td>
                                                        {data.CreatedDate}
                                                    </td>
                                                    <td>
                                                        <b>{data.Status == "Active" ? <td style={{ color: "green", backgroundColor: "lightgreen", borderRadius: "9px" }}>{data.Status}</td> : <td style={{ color: "red" }}>{data.Status}</td>}</b>
                                                    </td>
                                                    <td style={{ width: "7%" }}>


                                                        <Button style={{ fontSize: "12px", height: "30px" }} onClick={() => { Showmodel(data, i) }}><IoIosPlay /> Run</Button> &nbsp;

                                                    </td>
                                                    <td >
                                                        <OverlayTrigger
                                                            rootClose="true"
                                                            trigger="click"
                                                            rootCloseEvent="mousedown"
                                                            placement="bottom"
                                                            overlay={
                                                                <Tooltip id={`tooltip-right`} style={{ cursor: 'pointer', color: 'white', width: "120px" }}>

                                                                    <Row style={{ width: "80px", marginTop: "9px" }}>
                                                                        <Col> <FaRegEdit /></Col>Edit
                                                                    </Row>
                                                                    <Row style={{ width: "80px", marginTop: "9px", marginLeft: "1px" }}>
                                                                        <Col> <RiDeleteBin5Line /> </Col>Delete
                                                                    </Row>
                                                                    <Row style={{ width: "95px", marginTop: "9px", marginLeft: "-8px" }}>
                                                                        <Col> <MdLinkOff /> </Col>Disable
                                                                    </Row>
                                                                    <Row style={{ width: "95px", marginTop: "9px", marginLeft: "-10px" }}>
                                                                        <Col> <FaRegClone /> </Col>Clone
                                                                    </Row>
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <a variant="secondary"  onClick={() => setCircle("")} style={{ background: 'none', color: 'black', border: 'none', fontSize: "20px", cursor: 'pointer' }}>
                                                                ⋮{circle == "null" ? <span><div class="panel" >
                                                                    <div class="pulse-base" style={{ marginLeft: "-16.5px", marginTop: "-35px" }}></div>
                                                                </div></span> : ""}    </a>
                                                        </OverlayTrigger>

                                                    </td>
                                                </tr>
                                            </>

                                        })}

                                    </tbody>

                                </Table>

                            </div>
                        </div>

                    </Container>
                    <div>

                    </div>

                </div>
                {/* <Button onClick={()=>Getnavegate()}>P-Multiplier</Button> */}
            </center>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    {/* closeButton */}
                    <Modal.Title>Explor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Welcome User! Do You Want to Explore ?
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>YES</Button>
                    <Button variant="secondary" >
                        Skip
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal
                show={show1}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    {/* closeButton */}
                    <Modal.Title id="contained-modal-title-vcenter"><h6><MdArrowBackIos style={{ color: "lightgrey", fontSize: "12px" }} onClick={() => handleClose1()} /> {projectdata.ProjectName} <Container>
                        <Row>
                            <Col>
                                <div className='buttons'>
                                    <div>
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
                    </Container></h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PMultiplier />
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose1}>YES</Button>
                    <Button variant="secondary" >
                        Skip
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Search
