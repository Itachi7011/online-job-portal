import React, { useState, useContext } from "react";
import { UserContext } from "../App";


export default function ForgotPassword() {

    const { state, dispatch } = useContext(UserContext);
    dispatch({ type: "USER", payload: "1" });
    let name, value;
    const [user, setUser] = useState({ email: "", phoneNo: "" , securityQuestion:"" ,  securityAnswer:""});

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    return (<>

        <div class="card" style={{ width: "65%" }}>
        <h1 className="m-4"><b> Please Fill Credentials to Retreive Your Account: </b></h1>
            <form action="/forgotPassword" method="POST">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Email </span>
                    <input type="text" autoComplete="off"
                        onChange={handleInput}
                        placeholder="Please Enter Your Email" className="form-control" name="email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Registered Phone No. </span>
                    <input type="text" autoComplete="off"
                        onChange={handleInput}
                        placeholder="Please Enter Your Password" className="form-control" name="phoneNo" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>


                <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"> Security Question  &nbsp; </span>

                        <label className="gender"> &nbsp; &nbsp; Your Pet Name &nbsp;
                            <input type="radio" onChange={handleInput} name="securityQuestion" value="Pet_Name" />&nbsp; &nbsp;&nbsp; &nbsp;
                        </label>

                        <label className="gender"> Your Favourite Person's Name &nbsp;
                            <input type="radio" onChange={handleInput} name="securityQuestion" value="Favourite_Person" /><br />
                        </label>
                        <br />

                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Answer of Security Question (Single Word in small letters only) &nbsp; </span>

                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Single Word in small letters only" className="form-control" name="securityAnswer" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />

                    </div>


                <div className="floatbtn"></div>
                <button type="submit" value="signUp" className="btn btn-primary btn-lg" style={{float:"left"}}> Submit </button><br/><br/><br/><br/>
                
                
            </form>




        </div>

        


    </>)
}