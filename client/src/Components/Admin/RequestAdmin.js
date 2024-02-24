import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function RequestAdmin() {

    const [Input, setInput] = useState({ searchinput: "" });
    const navigate = useNavigate();

    const [Data, setData] = useState({ post: [] })

    useEffect(() => {
        axios.get('/checkNewAdminRequest').then((response) => {

            const data = response.data;


            setData({ post: data });
            console.log(data);

            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })
    }, [])

    let name, value;

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNo: "",
        statusOfRequest: ""

    })

    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user, [name]: value
        })
    }


    let inputHandler = (e) => {

        name = e.target.name;
        value = e.target.value;
        setInput({ ...Input, [name]: value });

    };


    return (<>
        <div style={{ textAlign: "center" }}>
            <h1 className="mb-5"><b>  If Already Send a Request Then Please  </b></h1>
            <h1 className="mb-5"><b>  Enter Your Registered Email Address  : </b></h1>
            <input type="text" id="nextPageButton" className="searchinput"
                name="searchinput" autoComplete="off" onChange={inputHandler} placeholder="Please type for search Jobs" />

            <br />
            <br />

            {Data.post.filter((field) => {
                if (Input.searchinput === "") {
                    return 0;
                } else if (field.name.toLocaleLowerCase().includes(Input.searchinput.toLocaleLowerCase()) || field.email.toLocaleLowerCase().includes(Input.searchinput.toLocaleLowerCase())
                ) {
                    return field;
                }
            })
                .map(({ name, email, Type, phoneNo, _id, statusOfRequest }) => {
                    return <div className="card jobSearchCard" key={name}>
                        <div className="card-body jobSearchCard-body">
                            <h5 className="mb-3 card-title centercard"><span className="cardspan">Name</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{name}</span></h5>

                            <h5 className="card-title centercard mb-3"><span className="cardspan leftcard">Email : </span> <span className="centercard" style={{ color: "yellow", fontWeight: "bolder" }}>{email}</span></h5>

                            <h5 className="card-title centercard mb-3"><span className="cardspan leftcard">Request Status : </span> <span className="centercard" style={{ color: "yellow", fontWeight: "bolder" }}>{statusOfRequest}</span></h5>

                            <div className="mb-5" style={{
                                textAlign: "center", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <button onClick={function () {
                                    if (statusOfRequest == "Confirmed") {
                                        navigate("/AdminRegistration",
                                            {
                                                state: {
                                                    id: _id,
                                                    Type: Type,
                                                    name: name,
                                                    email: email,
                                                    phoneNo: phoneNo
                                                }
                                            })
                                    }
                                    else if (statusOfRequest == "Waiting For Approval") {
                                        return (<h1>Sorry Your Request is still waiting for approval ! </h1>)
                                    } else {
                                        return (<h1>Sorry Your Request is Rejected ! </h1>)
                                    }

                                }}


                                    className="btn btn-primary btn-lg" style={{ float: "left" }}>

                                    Next Step </button></div>

                        </div>
                    </div>
                })}



        </div>

        <div className=" card ">
            <h1 className="mb-5 regisFormH1" style={{ textAlign: "center" }}><b>Form To Request To Become An Admin  :</b></h1>
            <form action="newAdminRequest" method="POST">
                <div className="m-5">

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Name *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Name" className="form-control regisInput" name="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default">Email *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Email" className="form-control regisInput" name="email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Phone No *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Full Address, It will never shown Publicly" className="form-control regisInput" name="phoneNo" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "left" }}>Register</button>
                </div>

            </form>
        </div>
    </>)
}