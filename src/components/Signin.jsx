import React from 'react'
import { Form } from 'react-bootstrap'
import log from "../access/login.png"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [password, setPassword] = useState('')
    let admindetails = JSON.parse(localStorage.getItem("details"))

    const getUser = () => {
        if (name == "" || password == "") {
            const conform = window.confirm("Please Enter all Fields")
        }else if(admindetails==null){
            toast("Details not found")

        }
        else {
            if (admindetails.name == name && admindetails.password == password) {
               
                let ele = { ...admindetails }
                ele.count=ele.count+1
                console.log(ele)
                localStorage.setItem("details", JSON.stringify(ele))
                    navigate('/Project')

            } else if (admindetails.name != name || admindetails.password != password) {

                toast("Please Enter Correct Details")

            }

        }
    }
    const [circle, setCircle] = useState("true")


    const CreateUser = () => {
        navigate('/Signup')

    }

    return (
        <>

            <center>
                <div className="main">
                    {circle == "true" ? <span style={{ marginTop: '42.5%' }}><div class="panel" title="Enter User Name" style={{}}>
                        <div class="pulse-base" ></div>
                    </div></span> : ""}
                    {circle == "false" ? <span style={{ marginTop: '55.5%' }}><div class="panel" title="Enter Password" style={{}}>
                        <div class="pulse-base" ></div>
                    </div></span> : ""}

                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={log} alt="profile" className="profile" />

                            </div>


                        </div>
                        <div>
                            <h2 style={{ color: "black" }}>Sign in</h2>
                            <br />
                            <div >
                                <Form.Group>
                                    <Form.Control type="text" placeholder='Email id' onChange={(e) => { setName(e.target.value); setCircle("false") }} />
                                </Form.Group>
                            </div><br />
                            <div ><Form.Group>
                                <Form.Control type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value); setCircle('') }} />
                            </Form.Group>
                            </div>
                            <div>
                                <button className="login-button" onClick={(e) => { getUser() }}>Login</button>
                            </div>

                            <p className="link">
                                <a >Forgot password</a>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <a onClick={(e) => { CreateUser() }}> Sign Up</a>
                            </p>


                        </div>
                    </div>


                </div>
            </center>
            <br /><br /><br /><br /><br /><br />




        </>
    )
}

export default Signin