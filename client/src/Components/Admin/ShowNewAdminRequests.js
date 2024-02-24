import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export default function ShowNewAdminRequests() {

    const [Data, setData] = useState({ post: [] });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/showNewAdminRequests').then((response) => {

            const data = response.data;


            setData({ post: data });
            console.log(data);

            console.log("data fetch successfully");
        }).catch((err) => { console.log(err) })
    }, [])


    return (<>

        <h1 className="searchtext">List of New Admin Requests Pending :</h1>
        {Data.post.filter((field) => {
            
            if (field.statusOfRequest == "Waiting For Approval") {
                return field;
            }
        })
            .map(({ _id, name, email }) => {
                return <div className="card jobSearchCard" key={email}>

                    <div className="card-body jobSearchCard-body">
                        <h5 className="mb-3 card-title centercard"><span className="cardspan">Name</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{name}</span></h5>
                    </div>

                    <div className="mb-5" style={{
                        textAlign: "center", display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <form action="/confirmNewAdminRequest" method="POST">
                            <input type="hidden" value={_id} name="id" ></input>
                            <button type="submit" className="btn btn-primary btn-lg" style={{ float: "left" }}>

                                Confirm Request </button>
                        </form>
                    </div>

                    
                    <div className="mb-5" style={{
                        textAlign: "center", display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <form action="/rejectNewAdminRequest" method="POST">
                            <input type="hidden" value={_id} name="id" ></input>
                            <button type="submit" className="btn btn-primary btn-lg" style={{ float: "left" }}>

                                Reject Request </button>
                        </form>
                    </div>

                    <div className="card-body jobSearchCard-body">
                        <h5 className="mb-3 card-title centercard"><span className="cardspan">Email</span> : <span style={{ color: "yellow", fontWeight: "bolder" }}>{email}</span></h5>
                    </div>
                </div>
            })}

    </>)
}
