import React,{useState} from "react";

export default function MustChangePasswordAfterForget(){
    
    let name, value;
    const [user, setUser] = useState({ email: "", password: "" , confirmPassword:"" });

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    return(<>
        

        <div className="card" style={{ width: "65%" }}>
            <h1 className="m-4"><b> Please Change Your Password: </b></h1>

            <form action="/mustChangePasswordAfterForget" method="POST">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"> Email </span>
                    <input type="text" autoComplete="off"
                        onChange={handleInput}
                        placeholder="Please Enter Your Email" className="form-control" name="email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">New Password </span>
                    <input type="password" autoComplete="off"
                        onChange={handleInput}
                        placeholder="Please Enter Your Password" className="form-control" name="password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Confirm New Password </span>
                    <input type="password" autoComplete="off"
                        onChange={handleInput}
                        placeholder="Please Enter Your Password" className="form-control" name="confirmPassword" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>


                <div className="floatbtn"></div>
                <button type="submit" value="signUp" className="btn btn-primary btn-lg" style={{ float: "left" }}> Submit </button><br /><br /><br /><br />




            </form>

        </div>

        
    </>)
}