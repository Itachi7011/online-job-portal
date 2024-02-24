import React from "react";

export default function EditCompProfiles() {

    return (<>
        <div className="registration">
            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/EditCompNormalProfile"><h1><b>Change Your Profile Details</b></h1></a> </b></h1>

            <br />
            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/EditEmployeesNeeded"><h1><b>Change About Empoloyees Needed </b></h1></a></b></h1>

            <br />
            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/EditCompPasswordProfile"><h1><b>Change Your Password (Case Sensitive) </b></h1></a></b></h1>

            <br />
            <h1 className="mb-2" ><b><a className="textdecoration regisLink editlinks editprofilecss" href="/EditCompPasswordSecurityQuestionAnswer"><h1><b>Change Your Security Question / Answer </b></h1></a></b></h1>

        </div>

    </>)
}