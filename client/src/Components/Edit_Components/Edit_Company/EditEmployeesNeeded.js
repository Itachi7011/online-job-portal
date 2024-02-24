import React, { useState } from "react";

export default function EditEmployeesNedded(){
    let name, value;

    const [user, setUser] = useState({
        noOfEmpNeeded: "",
        salaryExpected: "",
        minQualifications: "",
        minExperience: "",
        field: ""

    })

    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user, [name]: value
        })
    }
    return(<>
    <div className=" card " style={{ width: "100%" }}>
            <h1 className="centered"> You must fill all of the columns to update changes, otherwise you might loose your data and have to update it again. </h1>

            <form action="editEmployeedNeeded" method="POST">
        <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"> No of Employees Required  * </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control" name="noOfEmpNeeded" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"> Salary Expected (May be changed in some conditions)   *: </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control" name="salaryExpected" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"> Experience  *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control" name="minExperience" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>


                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"> Minimum Qualifications Expected From Job Candidate * </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Maximum Qualifications till today" className="form-control" name="minQualifications" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>


                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"> Type of IT field Employee Should have Expertise in  :  * &nbsp; &nbsp; &nbsp; </span>

                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter the type of Field/Work of Job" className="form-control" name="field" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />


                    </div>
                    <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "left" }}>Register</button>
                    </form>

                </div>
    </>)
}