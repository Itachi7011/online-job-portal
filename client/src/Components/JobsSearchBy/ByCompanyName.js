import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function ByCompanyName() {

    const [User, setUser] = useState({ searchinput: "" });
    const [Data, setData] = useState({ post: [] });

    const navigate = useNavigate();


    let name, value; // Declaration only, will be used in inputHandler function later.

    useEffect(() => {
        axios.get('/compsearchresultsfinal').then((response) => {

            const data = response.data;


            setData({ post: data });
            console.log(data);
            console.log(data[0].CompanyName);
            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })
    }, [])


    let inputHandler = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUser({ ...User, [name]: value });

    };

    return (<>



        <h1 className="searchtext">Search New IT Jobs For You :</h1>

        <div className="m-5 searching ">
        
            <h2 className="searchtext1">Search Jobs by Company's Name Only : </h2>

            <input type="text" className="searchinput"
                name="searchinput" autoComplete="off" onChange={inputHandler} placeholder="Please type for search Jobs" />

            <br />

            {Data.post.filter((field) => {
                if (User.searchinput === "") {
                    return 0;
                } else if (field.CompanyName.toLocaleLowerCase().includes(User.searchinput.toLocaleLowerCase())) {
                    return field;
                }
            })
                .map(({ CompanyName, field, _id, email, salaryExpected, phoneNo, fullAddress, state, startingYear, minQualifications, minExperienceNeeded, noOfEmpNeeded }) => {
                    return (
                    <div className="card jobSearchCard" key={CompanyName}>
                        <div className="card-body jobSearchCard-body">
                            <h5 className="card-title centercard"><span className="cardspan leftcard">Company</span> :<span style={{color: "yellow" , fontWeight:"bolder"}}> {CompanyName} </span> </h5>

                            <h5 className="card-title centercard mb-3"><span className="cardspan leftcard"> Total Vaccancies : </span> <span className="centercard" style={{color: "yellow" , fontWeight:"bolder"}}>{noOfEmpNeeded}</span></h5>

                            <div className="mb-5" style={{
                                textAlign: "center", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <button onClick={function () {
                                    navigate("/JobSearchResultProfile",
                                        { state: { id: _id } })
                                }}

                                    className="btn btn-primary btn-lg" style={{ float: "left" }}>

                                    Show Profile </button></div>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard">Field Of Work Available : </span> <span className="rightcard">{field}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Email : </span> <span className="rightcard">{email}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Phone Number : </span> <span className="rightcard">{phoneNo}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Address : </span> <span className="rightcard">{fullAddress}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> State : </span> <span className="rightcard">{state}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Company's Starting Year : </span> <span className="rightcard">{startingYear}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Qualifications Expected : </span> <span className="rightcard">{minQualifications}</span></h5>
                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Experience Expected : </span> <span className="rightcard">{minExperienceNeeded} years</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard">Salary Offered (Average) : </span> <span className="rightcard">INR - {salaryExpected} /-</span></h5>

                           
                            <br />

                        </div>

                    </div>
                    )
                })}
        </div>
    </>)
}

export default ByCompanyName;