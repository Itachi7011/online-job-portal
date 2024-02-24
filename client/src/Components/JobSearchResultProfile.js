import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';


function JobSearchResultProfile() {
    const location = useLocation();


    const [Data, setData] = useState({ post: [] });

    const previousData = location.state.id;


    useEffect(() => {
        axios.get('/compsearchresultsfinal').then((response) => {

            const data = response.data;


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
                .map(({ CompanyName, salaryExpected, facebook, otherBranches, country, compProducts, website, twitter, instagram, field, email, phoneNo, fullAddress, state, startingYear, minQualifications, minExperienceNeeded, noOfEmpNeeded }) => {



                    return <div className="container" style={{ width: "100%" }}>
                        <div className="row">
                            <p className="fw-bold h4 mb-5" style={{ borderRadius: "1rem", padding: "0.2em", color: "white", background: "blue" }}><span className="font-big"> Profile Found: </span></p>
                            <div className="col-xl-5">
                                <div className="row">
                                    <div className="col-12 bg-white p-0 px-3 py-3 mb-3">



                                        <div className="d-flex flex-column align-items-center">



                                            <p className="fw-bold h4 mb-5" style={{ border: "3px solid red", borderRadius: "2rem", padding: "1em", color: "white", background: "red" }}><span className="font-big">{CompanyName}</span></p>

                                            <p className="mb-3"><span className="font-medium">{state} , {country} .</span></p>

                                            <p className=" mb-3"><span className="font-medium"> {compProducts} .</span></p>

                                            <p className=""><span className="font-medium">Since {startingYear}</span></p>

                                        </div>
                                    </div>
                                    <div className="col-12 bg-white p-0 px-2 pb-3 mb-3 align-items-center">
                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fas fa-globe me-2"></span><span className="font-medium">Website</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{website}</span></p>

                                        </div>

                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-twitter me-2 py-2"></span><span className="font-medium">Twitter</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{twitter}</span></p>

                                        </div>
                                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                                            <p><span className="fab fa-instagram me-2 py-2"></span><span className="font-medium">Instagram</span></p>
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
                                    <div className="col-12 bg-white px-3 mb-3 pb-3 align-items-center" >




                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Email</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{email}</span></p>
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
                                            <p className="py-2"><span className="font-medium">Other Branches</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium"> {otherBranches}</span></p>
                                        </div>



                                        <hr className="mb-4 mt-0 d-inline-block mx-auto profilePageHr" />

                                        {/* About The Emplyees Needed by the Companies  */}

                                        <div className="" style={{ textAlign: "center" }}>
                                            <h2 className="py-2"><span className="font-medium jobSearchResultProfile2">About The Employees Needed:</span></h2>
                                        </div>

                                        <hr className="mb-4 mt-0 d-inline-block mx-auto profilePageHr" style={{ textAlign: "center" }} />



                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Field Of Work</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{field}</span></p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">No. of Employees Needed</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{noOfEmpNeeded}</span></p>
                                        </div>


                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Expected Salary</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{salaryExpected}</span></p>
                                        </div>




                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Minimum Qualifications Needed</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{minQualifications}</span></p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2"><span className="font-medium">Minimum Experience Needed</span></p>
                                            <p className="py-2 text-muted"><span className="font-medium">{minExperienceNeeded} years </span></p>
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

export default JobSearchResultProfile;
