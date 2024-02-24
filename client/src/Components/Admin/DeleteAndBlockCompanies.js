import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export default function JobSearch() {
    const [User, setUser] = useState({ searchinput: "" });
    const [Data, setData] = useState({ post: [] });

    const navigate = useNavigate();



    let name, value; // Declaration only, will be used in inputHandler function later.

    useEffect(() => {
        axios.get('/compsearchresultsfinal').then((response) => {

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


        <h1 className="searchtext">Search New IT Jobs For You :</h1>

        <div className="m-5 searching ">

            <h2 className="searchtext1">Search Jobs by type of jobs, address or company : </h2>

            <input type="text" className="searchinput"
                name="searchinput" autoComplete="off" onChange={inputHandler} placeholder="Please type for search Jobs" />

            <br />

            {Data.post.filter((field) => {
                if (User.searchinput === "") {
                    return 0;
                } else if (field.field.toLocaleLowerCase().includes(User.searchinput.toLocaleLowerCase()) ||
                    field.CompanyName.toLocaleLowerCase().includes(User.searchinput.toLocaleLowerCase()) ||
                    field.fullAddress.toLocaleLowerCase().includes(User.searchinput.toLocaleLowerCase()) ||
                    field.state.toLocaleLowerCase().includes(User.searchinput.toLocaleLowerCase())) {
                    return field;
                }
            })
                .map(({ CompanyName, _id, field, email, phoneNo, fullAddress, noOfEmpNeeded }) => {
                    return <div className="card jobSearchCard" key={CompanyName}>
                        <div className="card-body jobSearchCard-body">
                            <h5 className="mb-3 card-title centercard"><span className="cardspan">Company</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{CompanyName}</span></h5>


                            <h5 className="card-title centercard mb-3"><span className="cardspan leftcard"> Total Vaccancies : </span> <span className="centercard" style={{ color: "yellow", fontWeight: "bolder" }}>{noOfEmpNeeded}</span></h5>

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

                                    Show Profile </button>
                            </div>



                            <div className="mb-5" style={{
                                textAlign: "center", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <form action="/deleteAndBlockCompanies" method="POST">
                                    <input type="hidden" value={email} name="email" ></input>
                                    <input type="hidden" value={_id} name="id" ></input>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ float: "left" }}>

                                        Delete + Block Company </button>
                                </form>
                            </div>


                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard">Field Of Work Available : </span>
                                <span className="rightcard">{field}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Email : </span> <span className="rightcard">{email}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Phone Number : </span> <span className="rightcard">{phoneNo}</span></h5>

                            <h5 className="mb-3 card-subtitle"><span className="cardspan leftcard"> Address : </span> <span className="rightcard">{fullAddress}</span></h5>


                        </div>

                    </div>
                })}
        </div>



    </>)
}