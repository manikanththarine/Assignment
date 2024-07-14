import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import axios from 'axios'
import SideBar from './SideBar'

const Paypal = () => {
    const [name,setName]=useState('')
    const [amount,setAmount]=useState('')

    const Handilesubmit = async (e) => {
        let res = await axios.post("http://localhost:8000/payment")
        console.log(res)
        if (res && res.data) {
            let link = res.data.links[1].href
            window.location.href = link
        }

      

    }
   
    return (
        <div >
            <SideBar/>

            <center style={{ width: "80%", marginLeft: "15%", marginTop: "-45%" }}>
                <div className="main" style={{height:'200px'}}>
                    <div >
                       
                        <div>
                            <h2 style={{ color: "black" ,marginTop:"31%"}}>Payment</h2>
                            <br />
                           
                            <div >
                                <button className="login-button" style={{width:"auto"}}onClick={(e) => { Handilesubmit() }}>Pay with Paypal</button>
                            </div>

                        </div>
                    </div>


                </div>
            </center>
        </div>
    )
}

export default Paypal
