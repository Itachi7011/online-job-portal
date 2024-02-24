import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export default function ShowFeedbacks() {

    const [Data, setData] = useState({ post: [] });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/showFeedback').then((response) => {

            const data = response.data;


            setData({ post: data });
            console.log(data);

            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })
    }, [])


    return (<>

        <h1 className="searchtext">List of Feedbacks :</h1>
        {Data.post.filter((field) => {
            
            if (field) {
                return field;
            }
        })
            .map(({ email, feedback }) => {
                return <div className="card jobSearchCard"key={email}>

                
                    <div className="card-body jobSearchCard-body">
                        <h5 className="mb-3 card-title centercard"><span className="cardspan">Email </span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{email}</span></h5>
                    </div>
                    
                    <div className="card-body jobSearchCard-body">
                        <h5 className="mb-3 card-title centercard"><span className="cardspan">Feedback </span> : <span style={{ color: "yellow" }}>{feedback}</span></h5>
                    </div>
                    <br/>
                </div> 
                
            })}
    </>)
}
