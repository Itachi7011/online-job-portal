import React, { useState } from "react";

export default function EditCompPasswordSecurityQuestionAnswer() {
    let name, value;

    const [user, setUser] = useState({

        securityQuestion: "",
        securityAnswer: "",

    })

    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user, [name]: value
        })
    }

    return (
        <>
            <div className=" card " style={{ width: "100%" }}>
                <h1 className="centered"> Edit Security Question / Answer :</h1>
                <form action="/editCompSecurityQuestionAnswer" method="POST">


                    <div className="input-group m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"> Security Question  &nbsp; </span>

                        <label className="gender"> &nbsp; &nbsp; Your Pet Name &nbsp;
                            <input type="radio" onChange={handleInput} name="securityQuestion" value="Pet_Name" />&nbsp; &nbsp;&nbsp; &nbsp;
                        </label>

                        <label className="gender"> Your Favourite Person's Name &nbsp;
                            <input type="radio" onChange={handleInput} name="securityQuestion" value="Favourite_Person" /><br />
                        </label>
                        <br />
                    </div >


                    <div className="input-group m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Answer of Security Question (Single Word in small letters only) &nbsp; </span>

                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Single Word in small letters only" className="form-control" name="securityAnswer" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />


                    </div>
                    <div className="m-1" style={{ marginBottom: "1rem" }}>
                        <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3"  style={{float:"left"}}>Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}