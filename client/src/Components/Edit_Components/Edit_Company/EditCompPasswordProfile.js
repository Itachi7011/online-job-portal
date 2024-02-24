import React, { useState } from "react";

export default function EditPasswordProfile() {

    let name, value;

    const [user, setUser] = useState({
        oldpassword: "",
        newpassword: "",
        confirmnewpassword:""
    });

    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user, [name]: value
        })
    }

    


    return (<>
        <div className=" card " style={{ width: "100%" }}>
            <h1 className="centered"> You must fill all of the columns to update changes, otherwise you might loose your data and have to update it again. </h1>

            <form action="/editPassword" method="POST">



                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Old Password </span>
                    <input type="password" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Password" className="form-control" name="oldpassword" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> New Password </span>
                    <input type="password" autoComplete="off" onChange={handleInput} placeholder="Please Enter Same Password Again For Confirmation" className="form-control" name="newpassword" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Confirm New Password </span>
                    <input type="password" autoComplete="off" onChange={handleInput} placeholder="Please Enter Same Password Again For Confirmation" className="form-control" name="confirmnewpassword" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>


                <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "left" }} >Register</button>

            </form>
        </div>


    </>)
}
