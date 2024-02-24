import React from "react";


export default function EditProfiles() {


    return (<>
        <div className="registration">
            <h1 className="mb-2"><b><a className="textdecoration regisLink editprofilecss editlinks" href="/EditEmpNormalProfile"><h1><b>Change Your Profile Details</b></h1></a> </b></h1>

            <br />
            <h1 className="mb-2"><b><a className="textdecoration regisLink editprofilecss editlinks" href="/EditEmpPasswordProfile"><h1><b>Change Your Password (Case Sensitive) </b></h1></a></b></h1>

            <br />
            <h1 className="mb-2" ><b><a className="textdecoration editprofilecss regisLink editlinks" href="/EditEmpPasswordSecurityQuestionAnswer"><h1><b>Change Your Security Question / Answer </b></h1></a></b></h1>

        </div>
    </>)

}