import React, { useState } from 'react'
import { Navbar, Container, Table } from 'react-bootstrap';
import { GiOpenBook } from "react-icons/gi";
import SideBar from './SideBar';
import ele from '../access/login.png'
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineEngineering } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

const Dachboard = () => {
    let itterationcount = JSON.parse(localStorage.getItem("itterationcount"))
    const [num, setNum] = useState(0)
    const Countnum = (e) => {
        let count = +e
        setNum(count + itterationcount)
        console.log(count + itterationcount)
    }
    return (
        <div>

            <SideBar />

            <br />


            <div class="row" style={{ width: "80%", marginLeft: "18%", marginTop: "-44%", cursor: 'pointer' }}>
                <h5 style={{ textAlign: "Left" }}>Dashboard</h5>

                <div class="col-xl-3 col-md-6">
                    <div class="card card-animate">
                        <div class="card-body" style={{ backgroundColor: "#f8faf6", border: "#73edd6 1px solid" }}>

                            <div class="d-flex justify-content-between mt-4" >

                                <div>

                                    <AiOutlineProject style={{ fontSize: "59px", color: "#73edd6" }} />


                                </div>
                                <div >
                                    <h4>96</h4>
                                    <p style={{ fontSize: "16px" }}>Total Projects<br /></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card card-animate">
                        <div class="card-body" style={{ backgroundColor: "#f8faf6", border: "#73edd6 1px solid" }}>
                            <div class="d-flex justify-content-between mt-4" >

                                <div>
                                    <MdOutlineEngineering style={{ fontSize: "59px", color: "#73edd6" }} />

                                </div>
                                <div >
                                    <h4>3</h4>
                                    <p style={{ fontSize: "16px" }}>Total Engineers<br /></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card card-animate">
                        <div class="card-body" style={{ backgroundColor: "#f8faf6", border: "#73edd6 1px solid" }}>
                            <div class="d-flex justify-content-between mt-4" >

                                <div>
                                    <FaUsers style={{ fontSize: "59px", color: "#73edd6" }} />
                                </div>
                                <div >
                                    <h4>4</h4>
                                    <p style={{ fontSize: "16px" }}>Total Sales Users<br /></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card card-animate">
                        <div class="card-body" style={{ backgroundColor: "#f8faf6", border: "#73edd6 1px solid" }}>
                            <div class="d-flex justify-content-between mt-4" >

                                <div>
                                    <GiNetworkBars style={{ fontSize: "59px", color: "#73edd6" }} />
                                </div>
                                <div >
                                    <h4>{num == 0 ? itterationcount + 340 : num + 340}/480</h4>
                                    <p style={{ fontSize: "16px" }}>Iteration<br /></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Sr. No.
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Iteration Count
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Manikanth
                                </td>
                                <td>
                                    manikanth@gmail.com
                                </td>
                                <td>
                                    120
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    tarine
                                </td>
                                <td>
                                    tarine@gmail.com
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                {/* onChange={(e)=>{Countnum(e.target.value)}} type='number' */}
            </div>
        </div>
    )
}

export default Dachboard
