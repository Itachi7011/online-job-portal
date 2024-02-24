import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export default function AdminRegistration() {

    const [Data, setData] = useState({ post: [] });

	const location = useLocation();
    const previousId = location.state.id;
    const previousName = location.state.name;
    const previousEmail = location.state.email;
    const previousType = location.state.Type;
    const PreviousPhoneNo = location.state.phoneNo;


	useEffect(() => {
        axios.get('/compsearchresultsfinal').then((response) => {

            const data = response.data;


            setData({ post: data });
            console.log(data);

            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })
    }, [])

	let name, value;

	const [user, setUser] = useState({
		Type: previousType,
		adminName: previousName,
		age: "",
		gender: "",
		email: previousEmail,
		phoneNo: PreviousPhoneNo,
		fullAddress: "",
		state: "",
		hobbies: "",
		workAs: "",
		country: "",
		website: "",
		twitter: "",
		github: "",
		instagram: "",
		facebook: "",
		qualification: "",
		percentage: "",
		experience: "",
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
	<h2> {previousEmail} </h2>
		<div style={{ textAlign: "center" }}>
			<h1 className="mb-5"><b>Registration Form for New Employees / Job-Seekers :</b></h1>

			<h1 className="mb-5"><b>  If Already A Member Then Please Click <a className="textdecoration link" href="/Login">Login</a> To Continue : </b></h1>

			<h1 className="mb-5"><b>Otherwise Please Register First then Login : </b></h1>
		</div>

		{/* Form Starts From Here  */}

		<div className=" card " style={{ width: "100%" }}>

			<form action="/adminRegister" method="POST">

			
					
					<input type="hidden" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Name" className="form-control" name="adminName" value={previousName} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				

				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Gender *  &nbsp; </span>
					<label className="gender"> &nbsp; &nbsp; Male &nbsp;
						<input type="radio" onChange={handleInput} name="gender" value="Male" />&nbsp; &nbsp;&nbsp; &nbsp;
					</label>
					<label className="gender"> Female &nbsp;
						<input type="radio" onChange={handleInput} name="gender" value="Female" />
					</label>
				</div>

				
					<input type="hidden" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Email" className="form-control" name="email" value={previousEmail} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				
				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Country * </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Only Your State (Not Full Address), It will be  Visible Only To the Employee/Company" className="form-control" name="country" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> State * </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Only Your State (Not Full Address), It will be  Visible Only To the Employee/Company" className="form-control" name="state" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Address  *</span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder=" It will never shown Publicly,so Please Enter Your Full Address" className="form-control" name="fullAddress" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>
				
					<input type="hidden" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Full Address, It will never shown Publicly" className="form-control" name="phoneNo" value={ PreviousPhoneNo } aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				
				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Age *</span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Full Address, It will never shown Publicly" className="form-control" name="age" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Maximum Qualifications *  </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Maximum Qualifications till today" className="form-control" name="qualification" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Final Percentage in the Maximum Qualification  * </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Percentage, You get in the Maximum Qualification Mentioned Above" className="form-control" name="percentage" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Experience (In Years) </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Experience, If Fresher then Enter - 0" className="form-control" name="experience" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Type of Your IT Field  * &nbsp; </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Percentage, You get in the Maximum Qualification Mentioned Above" className="form-control" name="field" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> You worked As (Or Name of Your Previous Post)  &nbsp; </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Leave it empty, If you are Fresher" className="form-control" name="workAs" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default">  Hobbies &nbsp; </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Enter Your Hobbies" className="form-control" name="hobbies" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Your Personal Website  &nbsp; </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Personal website's full address" className="form-control" name="website" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
				</div>

				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default">Your Github Id  &nbsp; </span>
					<input type="text" autoComplete="off" onChange={handleInput} placeholder="" className="form-control" name="github" aria-label="Sizing example input" pria-describedby="inputGroup-sizing-default" />
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
					<span className="input-group-text" id="inputGroup-sizing-default"> Password *</span>
					<input type="password" autoComplete="off" onChange={handleInput} placeholder="Please Enter Your Password" className="form-control" name="password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="inputGroup-sizing-default"> Confirm Password *</span>
					<input type="password" autoComplete="off" onChange={handleInput} placeholder="Please Enter Same Password Again For Confirmation" className="form-control" name="cpassword" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>
				<button type="submit" value="signUp" className="btn btn-primary btn-lg m-3" style={{ float: "left" }}>Register</button>




			</form>
		</div>

	</>)
}
