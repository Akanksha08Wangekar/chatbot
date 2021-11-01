import React from 'react'
import './backFrame.css'
import hello from '../../images/hello.png'
import robot from '../../images/robot.png'
export default function BackFrameBody() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 shadow">
                            <h3>IRIS</h3>
                            <h4>Hello <img src={hello} alt="hello" className="img1"></img></h4>
                            <h5>I am Iris, a Virtual Assistant<br/>
                            How may I help you?</h5>
                            <div className="card shadow">
                                <img src={robot} alt="chatbot" className="img2 text-danger shadow" ></img>
                                <div className="card-body">
                                    <h6>Frequently Asked Questions ?</h6>
                                    <div className="card1 align-items-center d-flex shadow">Can I redeem my FB before the original term?</div>
                                    <div className="card1 align-items-center d-flex shadow">How do I pay my Credit card bill?</div>
                                    <div className="card1 align-items-center d-flex shadow">How can I get my Account Statement?</div>
                                    <div className="card1 align-items-center d-flex shadow">What is the tenure of fixed Deposit?</div>
                                    <div className="card1 align-items-center d-flex shadow">What is the tenure of fixed Deposit?</div>
                                    <div className="card2 justify-content-center mx-auto align-items-center text-center d-flex shadow">What is the tenure of Fixed Deposit?</div>
                                </div>
                            </div>
                </div>
            </div>
        </>
    )
}
