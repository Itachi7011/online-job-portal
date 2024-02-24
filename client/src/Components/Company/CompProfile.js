import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function CompProfile() {

    //  FETCH API and useEffect function is very importatnt for showing data dynamically from the saved data ////  of mongodb database as well as to authencticate the user using saved cookies  : ------> 

    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const callProfilePage = async () => {
        try {

            const res = await fetch("/compProfile",
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
            navigate("/Login");
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

                                <p className="fw-bold h4 mb-5" style={{border:"3px solid red", borderRadius:"2em", padding:"1em", color:"white", background:"red"}}><span className="font-big">{user.CompanyName}</span></p>

                                <p className="mb-3"><span className="font-medium">{user.state} , {user.country} .</span></p>

                                <p className=" mb-3"><span className="font-medium"> {user.compProducts} .</span></p>
                                
                                <p className=""><span className="font-medium">Since {user.startingYear}</span></p>
                                
                            </div>
                        </div>
                        <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">
                            <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                <p><span className="fas fa-globe me-2"></span><span className="font-medium">Website</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.website}</span></p>

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
                        <div className="col-12 bg-white px-3 mb-3 pb-3 ">

                            <div className="d-flex ">
                                <div className="btn btn-primary me-2" style={{ marginBottom: "1em" }}><a href="/EditCompProfiles" style={{ textAlign: "none", color: "white", padding: "0", fontWeight: "bold" }}>Edit Profile</a></div>

                            </div>


                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Email</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.email}</span></p>
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
                                <p className="py-2"><span className="font-medium">Other Branches</span></p>
                                <p className="py-2 text-muted"><span className="font-medium"> {user.otherBranches}</span></p>
                            </div>

                            <hr className="mb-4 mt-0 d-inline-block mx-auto profilePageHr" />


                            {/* About The Emplyees Needed by the Companies  */}

                            <div className="" style={{ textAlign: "center" }}>
                                <h2 className="py-2"><span className="font-medium jobSearchResultProfile2" style={{ background: "#6351ce", color: "white", padding: "0.2em", borderRadius: "5px" }}>About The Employees Needed :</span></h2>
                            </div>

                            

                            <hr className="mb-4 mt-0 d-inline-block mx-auto profilePageHr"/>

                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Field Of Work</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.field}</span></p>
                            </div>

                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">No. of Employees Needed</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.noOfEmpNeeded}</span></p>
                            </div>

                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Expected Salary (Average)</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">Rs. {user.salaryExpected}</span></p>
                            </div>

                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Minimum Qualifications Needed</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.minQualifications}</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="py-2"><span className="font-medium">Minimum Experience Needed</span></p>
                                <p className="py-2 text-muted"><span className="font-medium">{user.minExperienceNeeded} years </span></p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)
}