import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function AdminMainMenu() {

    const navigate = useNavigate();

    const callAdminPage = async () => {
        try {

            const res = await fetch("/feedback",
                {
                    method: "GET",
                    header: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }, credentials: "include"
                })

            const data = await res.json();



            if (!data) {
                throw new Error(res.error);
            }

        } catch (error) {
            console.log(error);

            navigate("/Login");
            alert("Please Login First as Admin!")
        }
    }
    useEffect(() => {
        callAdminPage();
    },
        []
    )

    return (<>
        <div className="registration">
            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/AdminProfile"><h1><b>Admin Profile</b></h1></a> </b></h1>

            <br />

            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/ShowNewAdminRequests"><h1><b>Show / Verify New Admin Requests </b></h1></a></b></h1>

            <br />

            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/DeleteAndBlockEmployees"><h1><b> Delete + Block Employees  </b></h1></a></b></h1>

            <br />

            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/DeleteAndBlockCompanies"><h1><b> Delete + Block Companies  </b></h1></a></b></h1>

            <br />

            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/ShowFeedbacks"><h1><b> Show Feedbacks  </b></h1></a></b></h1>

        </div>
        <br />



    </>)
}