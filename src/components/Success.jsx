import React from 'react'
import img from '../access/succ.png'
const Success = () => {
    return (
        <div>
            <center>
                <div className='main'>
                    <div>
                        <img src={img} alt="profile" className="profile" style={{ marginTop: "20px" }} />
                        <h4>                        <br /> <br /> <br />
                            Your Transaction is Success.
                        </h4>
                        <p> Thank You For paying</p>
                        <a href='/Dashboard'>Back To Home</a>

                    </div>
                </div>
            </center>
        </div>
    )
}

export default Success
