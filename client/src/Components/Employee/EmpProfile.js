import React, { useState, useEffect } from "react";


export default function EmpProfile() {

      
    const [user, setUser] = useState("")
    const callProfilePage = async () => {
        try {

            const res = await fetch("/empProfile",
                {
                    method: "GET",
                    header: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }, credentials: "include"
                })

            const data = await res.json();

            setUser(data);  // This setUser() function simply use data coming from fetch api from backend 

            if (!data) {
                throw new Error(res.error);
            }

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        callProfilePage();
    },
        []
    )

    //    Normal Return function starts with here

    return (<>

        <div className="container" style={{ width: "100%" }}>
            <div className="row">

                <div className="col-xl-5">
                    <div className="row">
                        <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                            <div className="d-flex flex-column align-items-center">

                                <p className="fw-bold h4 mt-3 mb-5"><span className="font-big" style={{border:"3px solid red", borderRadius:"2em", padding:"0.7em", color:"white", background:"red"}}>{user.name}</span></p>
                                <p className="mb-3"><span className="font-medium"> {user.workAs} </span></p>
                                <p className="mb-3"><span className="font-medium">{user.state} , {user.country}</span></p>

                            </div>
                        </div>
                        <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">
                            <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                <p><span className="fas fa-globe me-2"></span><span className="font-medium">Website</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.website}</span></p>

                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                <p><span className="fab fa-github-alt me-2"></span><span className="font-medium">Github</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.github}</span></p>

                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                <p><span className="fab fa-twitter me-2"></span><span className="font-medium">Twitter</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.twitter}</span></p>

                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                <p><span className="fab fa-instagram me-2"></span><span className="font-medium">Instagram</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.instagram}</span></p>

                            </div>
                            <div className="d-flex justify-content-between py-2 px-3">
                                <p><span className="fab fa-facebook-f me-2"></span><span className="font-medium">facebook</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.facebook}</span></p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 ps-md-4">
                    <div className="row">
                        <div className="col-12 bg-white px-3 mb-3 pb-3">
                            <div className="d-flex ">
                                <div className="btn btn-primary me-2" style={{ marginBottom: "1em" }}><a href="/EditEmpProfiles" style={{ textAlign: "none", color: "white", padding: "0", fontWeight: "bold" }}>Edit Profile</a></div>

                            </div>

                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Email</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.email}</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Age</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.age}</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Phone</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.phoneNo}</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Country</span></p>
                                <p className="py-2 text-muted"><span className="font-medium"> {user.country}</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">State</span></p>
                                <p className="py-2 text-muted"><span className="font-medium"> {user.state}</span></p>
                            </div>

                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Address</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.fullAddress}</span></p>
                            </div>

                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Field Of Work</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.field}</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Work As </span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.workAs}</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Qualifications</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.qualification}</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Experience</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.experience} years </span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Hobbies</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.hobbies}  </span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)
}