import React, { useState } from "react";


export default function EmployerLogin() {


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
        noOfEmpNeeded: "",
        lastDateForApply: "",
        workFromHome: "",
        salaryExpected: "",
        minQualifications: "",
        minExperienceNeeded: "",
        field: "",
        securityQuestion: "",
        securityAnswer: "",
        password: "",
        cpassword: ""

    })

    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user, [name]: value
        })
    }


    return (<>


        <div style={{ textAlign: "center" }}>
            <h1 className="mb-5"><b>  If Already A Member Then Please Click <a className="textdecoration link" href="/Login">Login</a> To Continue : </b></h1>
            <h1 className="mb-5"><b>Otherwise Please Register First then Login : </b></h1>

        </div>

        <div className=" card ">
            <h1 className="mb-5 regisFormH1" style={{ textAlign: "center" }}><b>Registration Form for New Employers / Companies / Organisations :</b></h1>
            <form action="companyregister" method="POST">
                <div className="m-5">

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default">Company Name *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Name" className="form-control regisInput" name="CompanyName" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default">Email *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Email" className="form-control regisInput" name="email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Country (Headquaters / Main Office/ Country of Origin) *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Only Your State (Not Full Address), It will be  Visible Only To the Employee/Company" className="form-control regisInput" name="country" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> State *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Only Your State (Not Full Address), It will be  Visible Only To the Employee/Company" className="form-control regisInput" name="state" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Address *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Full Address, It will never shown Publicly" className="form-control regisInput" name="fullAddress" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Phone No *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Full Address, It will never shown Publicly" className="form-control regisInput" name="phoneNo" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>


                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan isStartup" id="inputGroup-sizing-default"> Is Your Company a New Startup or not a Startup *</span>
                        <label className="isStartup"> &nbsp; &nbsp; Yes  &nbsp;
                            <input type="radio" onChange={handleInput} name="isStartup" value="Yes" />&nbsp; &nbsp;&nbsp; &nbsp;
                        </label>

                        <label className="isStartup"> No  &nbsp;
                            <input type="radio" onChange={handleInput} name="isStartup" value="No" />
                        </label>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> In Which Year Your Compnay Started Officially * </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Percentage, You get in the Maximum Qualification Mentioned Above" className="form-control regisInput" name="startingYear" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Do Your Company have other Branches too, if yes then Please Enter their respective States  *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Branches" className="form-control regisInput" name="otherBranches" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Products Developed/Offered by Our Company  *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control regisInput" name="compProducts" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Your Personal Website  &nbsp; </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Personal website's full address" className="form-control regisInput" name="website" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                    </div>


                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Your Twitter Id  &nbsp; </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="" className="form-control regisInput" name="twitter" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Your Facebook Id  &nbsp; </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="" className="form-control regisInput" name="facebook" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Your Instagram Id  &nbsp; </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="" className="form-control regisInput" name="instagram" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
                    </div>


                    {/* About Employees Needed  */}

                    <h3 className="mt-5"><b> Now About The Empoyee You Needed </b></h3>

                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: "660px", backgroundColor: "#7c4dff", height: "2px" }}
                    />
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> No of Employees Required  * </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control regisInput" name="noOfEmpNeeded" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Salary Expected (May be changed in some conditions)   *: </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control regisInput" name="salaryExpected" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Experience  *</span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control regisInput" name="minExperienceNeeded" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>


                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Minimum Qualifications Expected From Job Candidate * </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Maximum Qualifications till today" className="form-control regisInput" name="minQualifications" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Last Date To apply For Job (Format- Date,month,year) * </span>
                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Maximum Qualifications till today" className="form-control regisInput" name="lastDateForApply" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>


                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Type of IT field Employee Should have Expertise in  :  * &nbsp; &nbsp; &nbsp; </span>

                        <input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter the type of Field/Work of Job" className="form-control regisInput" name="field" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />


                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan isStartup" id="inputGroup-sizing-default"> Is Work From Available in this job *</span>
                        <label className="isStartup"> &nbsp; &nbsp; Yes  &nbsp;
                            <input type="radio" onChange={handleInput} name="workFromHome" value="Yes" />&nbsp; &nbsp;&nbsp; &nbsp;
                        </label>

                        <label className="isStartup"> No  &nbsp;
                            <input type="radio" onChange={handleInput} name="workFromHome" value="No" />
                        </label>
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



                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Password * </span>
                        <input type="password" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Password" className="form-control regisInput" name="password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text regisSpan" id="inputGroup-sizing-default"> Confirm Password *</span>
                        <input type="password" autoComplete="off" onChange={handleInput} placeholder="Please Enter Same Password Again For Confirmation" className="form-control regisInput" name="cpassword" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "left" }}>Register</button>
                </div>




            </form>
        </div>


    </>)
}