import React, { useState } from "react";

export default function EditNormalProfile() {

    let name, value;

    const [user, setUser] = useState({
        CompanyName: "",
        email: "",
        phoneNo: "",
        fullAddress: "",
        country: "",
        state: "",
        isStartup: "",
        startingYear: "",
        website: "",
        twitter: "",
        instagram: "",
        facebook: "",
        otherBranches: "",
        compProducts: "",

    })

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

            <form action="/editCompUser" method="POST">

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Company Name *</span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Name" className="form-control" name="CompanyName" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email *</span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Email" className="form-control" name="email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Country (Headquaters / Main Office/ Country of Origin) *</span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Only Your State (Not Full Address), It will be  Visible Only To the Employee/Company" className="form-control" name="country" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> State *</span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Only Your State (Not Full Address), It will be  Visible Only To the Employee/Company" className="form-control" name="state" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Address *</span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Full Address, It will never shown Publicly" className="form-control" name="fullAddress" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Phone No *</span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Full Address, It will never shown Publicly" className="form-control" name="phoneNo" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>


                <div className="input-group mb-3">
                    <span className="input-group-text isStartup" id="inputGroup-sizing-default"> Is Your Company a New Startup or not a Startup *</span>
                    <label className="isStartup"> &nbsp; &nbsp; Yes  &nbsp;
                        <input type="radio" onChange={handleInput} name="isStartup" value="Yes" />&nbsp; &nbsp;&nbsp; &nbsp;
                    </label>

                    <label className="isStartup"> No  &nbsp;
                        <input type="radio" onChange={handleInput} name="isStartup" value="No" />
                    </label>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> In Which Year Your Compnay Started Officially * </span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Percentage, You get in the Maximum Qualification Mentioned Above" className="form-control" name="startingYear" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Do Your Company have other Branches too, if yes then Please Enter their respective States  *</span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control" name="otherBranches" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Products Developed/Offered by Our Company  *</span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control" name="compProducts" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Your Personal Website  &nbsp; </span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Personal website's full address" className="form-control" name="website" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                </div>


                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Your Twitter Id  &nbsp; </span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="" className="form-control" name="twitter" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Your Facebook Id  &nbsp; </span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="" className="form-control" name="facebook" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Your Instagram Id  &nbsp; </span>
                    <input type="text" autoComplete="off" onChange={handleInput} placeholder="" className="form-control" name="instagram" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                </div>

                <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "left" }}>Register</button>

            </form>
        </div>
    </>)
}
