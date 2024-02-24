import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Feedback() {


    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const callProfilePage = async () => {
        try {

            const res = await fetch("/feedback",
                {
                    method: "GET",
                    header: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }, credentials: "include"
                })

            const data = await res.json();

            setUser(data);  // This setUser() function simply use data coming from fetch api from backend 

            if (!data) {
                throw new Error(res.error);
            }

        } catch (error) {
            console.log(error);
            navigate("/Login");
        }
    }
    useEffect(() => {
        callProfilePage();
    },
        []
    )


    let name, value;

    const [feedback, setfeedback] = useState({
        feedback: "",
        email: ""


    })

    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;

        setfeedback({
            ...user, [name]: value
        })



    }

    return (<>


        <div style={{ textAlign: "center" }}>
            <h1 className="mb-2 feedbackDivH1h1"><b> Please Provide Your Valuable Feedback in the box below : </b></h1>

        </div>


        <form className="feedbackForm" action="feedbackPost" method="POST">
            <div className="form-group feedbackmargin" style={{ textAlign: "center" }}>
                
                <div className="input-group ">

                    <input type="hidden" autoComplete="off" value={user.email} onChange={handleInput} placeholder="Please Enter Your Name" className="form-control regisInput" name="email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <textarea className="form-control feedbackTextArea" id="exampleFormControlTextarea1" rows="10" name="feedback"
                    onChange={handleInput}
                ></textarea>
                <button type="submit" onChange="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "right" }}>Submit</button>

            </div>

        </form>



    </>)

}