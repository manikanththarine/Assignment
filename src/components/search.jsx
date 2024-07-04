import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { IoIosPlay } from "react-icons/io"
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate()

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
  const Getnavegate=()=>{
    navigate('/p-multiplier')

  }

    return (
        <div style={{ backgroundColor: "rgb(206 224 230 / 62%)"}}>

            <center>
                <div style={{ width: "95%" }}>

                    <div style={{ textAlign: "left" }}>
                        <b>Projects</b>
                    </div>
                    <br />
                    <Container>
                    <Row style={{ backgroundColor: 'white', width: "100%", fontSize: "19px" }}>
                        <Col xs={12} md={1}><b>Project</b></Col>
                        <Col xs={12} md={9}></Col>
                        <Col style={{ textAlign: "rigth" }}>
                            <a href="" style={{ textDecoration:" none"}}>+Create New</a>
                        </Col>
                    </Row>
                    <div style={{ marginTop: "2%", marginRight: "5%" }}>
                        <b>Search:</b> <input type="text" placeholder=' Project Name '
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-12">
                    <div style={{ marginTop: "1%"}} >
                        <Table responsive style={{boxSizing: "border-box"}}>
                            <thead style={{ textAlign: "left" }}>
                                <tr>
                                    <th style={{color:"darkgray"}}>
                                        Project Name
                                    </th>
                                    <th style={{color:"darkgray"}}>
                                        Created Date
                                    </th>
                                    <th style={{color:"darkgray"}}>
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
                                            <td style={{ width: "15%" }}>
                                                <Button style={{fontSize:"12px",height:"30px"}}><IoIosPlay/> Run</Button> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                </svg>
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
                <Button onClick={()=>Getnavegate()}>P-Multiplier</Button>
            </center>

        </div>
    )
}

export default Search
