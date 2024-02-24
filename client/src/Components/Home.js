import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image1 from "./Images/damian.jpg"

export default function Home() {

    const [Data, setData] = useState({ post: [] });




    let name, value; // Declaration only, will be used in inputHandler function later.

    useEffect(() => {
        axios.get('/compsearchresultsfinal').then((response) => {

            const data = response.data;


            setData({ post: data });
            console.log(data);

            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })
    }, [])







    return (<>
        <div className="homeMainDiv">
            <div><h2 className="homeMainH2">Welcome on ONLINE JOB PORTAL</h2></div>
            <div><h4 className="homeMainH4">Please Select options from Navigation Bar given Above For Searching Jobs , Searching Employees.
            <br/>
                But first Please Login to use this portal at its full potential and have access to all functions.</h4></div>

            <br />
           


        </div>

        







    </>)


}