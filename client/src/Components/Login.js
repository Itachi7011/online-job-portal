import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { useEffect } from "react";
import axios from "axios";

export default function Login() {

    const { state, dispatch } = useContext(UserContext);


    const [Data, setData] = useState({ post: [] });


    useEffect(() => {
        axios.get('/compsearchresultsfinal').then((response) => {

            const data = response.data;


            setData({ post: data });

            if (data.status === 4000) {
                console.log("Sorry wrong credentials!")
            } else {

                console.log("Login Successful.")
                dispatch({ type: "USER", payload: "false" });
            }


            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })


    }, [])



    let name, value;
    const [user, setUser] = useState({ email: "", password: "" });

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    return (<>

        <div className="card loginCard">
            <h1 className="m-4"><b> Please Login (Employees / Job Seekers): </b></h1>
            <form action="/login" method="POST">
                <div className="input-group mb-3">
                    <span className="input-group-text loginSpan" id="inputGroup-sizing-default"> Email </span>
                    <input type="text" autoComplete="off"
                        onChange={handleInput}
                        placeholder="Please Enter Your Email" className="form-control" name="email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Password </span>
                    <input type="password" autoComplete="off"
                        onChange={handleInput}
                        placeholder="Please Enter Your Password" className="form-control" name="password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="floatbtn"></div>
                <button type="submit" value="signUp" className="btn btn-primary btn-lg" style={{ float: "left" }}> Login </button><br /><br /><br /><br />




            </form>

            <div className="m-1">
                <button type="submit" value="ForgotPassword" className="btn btn-primary"  > <a href="/ForgotPassword" style={{ color: "white", padding: "0.3rem", textDecoration: "none", float: "left" }}>Forgot Password</a>  </button>
            </div>

        </div>

    </>)
}
