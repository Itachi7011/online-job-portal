import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


function EmployeeSearch() {
    const [User, setUser] = useState({ searchinput: "" });
    const [Data, setData] = useState({ post: [] });

    const navigate = useNavigate();

    let name, value; // Declaration only, will be used in inputHandler function later.

    useEffect(() => {
        axios.get('/empsearchresultsfinal').then((response) => {

            const data = response.data;


            setData({ post: data });
            console.log(data);

            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })
    }, [])

    let inputHandler = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUser({ ...User, [name]: value });

    };

    return (<>

        <h1 className="searchtext">Search Employees For Your Company :</h1>

        <div className="m-5 searching ">

            <h2 className="searchtext1">Search Employees By Type Of Field/Work/Department : </h2>

            <input type="text" className="searchinput"
                name="searchinput" autoComplete="off" onChange={inputHandler} placeholder="Please type for search Jobs" />

            <br />

            {Data.post.filter((field) => {
                if (User.searchinput === "") {
                    return 0;
                } else if (field.field.toLocaleLowerCase().includes(User.searchinput.toLocaleLowerCase())) {
                    return field;
                }
            })
                .map(({ name, field, email, workAs, age, phoneNo, _id, state, qualifications, experience }) => {
                    return <div className="card jobSearchCard" key={name}>
                        <div className="card-body jobSearchCard-body">

                            <h5 className="card-title centercard"><span className="cardspan leftcard">Name</span> : {name}</h5>


                            <div className="mb-5" style={{
                                textAlign: "center", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <button onClick={function () {
                                    navigate("/EmployeeSearchResultProfile",
                                        { state: { id: _id } })
                                }}

                                    className="btn btn-primary btn-lg" style={{ float: "left" }}>

                                    Show Profile </button></div>


                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard">Field Of Work/Expertise : </span> <span className="rightcard">{field}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard">Work As : </span> <span className="rightcard">{workAs}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Age : </span> <span className="rightcard">{age}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Email : </span> <span className="rightcard">{email}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Phone Number : </span> <span className="rightcard">{phoneNo}</span></h5>


                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> State : </span> <span className="rightcard">{state}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Qualifications : </span> <span className="rightcard">{qualifications}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Experience : </span> <span className="rightcard">{experience}</span></h5>



                            <br />

                        </div>

                    </div>
                })}
        </div>



    </>)
}

export default EmployeeSearch;
