import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';


function EmployeeSearchResultProfile() {
    const location = useLocation();


    const [Data, setData] = useState({ post: [] });

    const previousData = location.state.id;


    useEffect(() => {
        axios.get('/empsearchresultsfinal').then((response) => {

            const data = response.data;
            console.log(previousData);

            setData({ post: data });


            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })


    }, [])




    return (<>
        

        <div className="m-5 searching ">




            {Data.post.filter((field) => {
                if (field._id.includes(previousData)
                ) {
                    return field;
                }
            })
                .map(({ name, facebook, workAs, hobbies , experience,qualification , age, github, country,  website, twitter, instagram, field, email, phoneNo, fullAddress, state,  }) => {



                    return <div className="container" style={{ width: "100%" }}>
                        <div className="row">

                            <div className="col-xl-5">
                                <div className="row">
                                    <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                                        <div className="d-flex flex-column align-items-center">

                                            <p className="fw-bold h4 mt-3 mb-5"><span className="font-big" style={{ border: "3px solid red", borderRadius: "2em", padding: "0.7em", color: "white", background: "red" }}>{name}</span></p>
                                            <p className="mb-3"><span className="font-medium"> {workAs} </span></p>
                                            <p className="mb-3"><span className="font-medium">{state} , {country}</span></p>

                                        </div>
                                    </div>
                                    <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">
                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium">Website</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{website}</span></p>

                                        </div>
                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-github-alt me-2"></span><span className="font-medium">Github</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{github}</span></p>

                                        </div>
                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-twitter me-2"></span><span className="font-medium">Twitter</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{twitter}</span></p>

                                        </div>
                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-instagram me-2"></span><span className="font-medium">Instagram</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{instagram}</span></p>

                                        </div>
                                        <div className="d-flex justify-content-between py-2 px-3">
                                            <p><span className="fab fa-facebook-f me-2"></span><span className="font-medium">facebook</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{facebook}</span></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 ps-md-4">
                                <div className="row">
                                    <div className="col-12 bg-white px-3 mb-3 pb-3">
                                        

                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Email</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{email}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Age</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{age}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Phone</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{phoneNo}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Country</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium"> {country}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">State</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium"> {state}</span></p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Address</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{fullAddress}</span></p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Field Of Work</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{field}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Work As </span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{workAs}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Qualifications</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{qualification}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Experience</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{experience} years </span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Hobbies</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{hobbies}  </span></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                 })}
              </div>



    </>)
}

export default EmployeeSearchResultProfile;