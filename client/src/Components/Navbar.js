import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

function Navbar() {


    const [user, setUser] = useState("")
    const callNavBarPage = async () => {
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
        callNavBarPage();
    },
        []
    )



    const { state, dispatch } = useContext(UserContext);
    const name = user.name;
    const companyName = user.CompanyName;
    const admin = user.adminName;
    const Menubar = () => {
        if (!state) {
            

            if (name) {
                return(
                <>
                    <NavLink className="navlink" to="/EmpProfile">Profile</NavLink>
                    <NavLink className="navlink" to="/Logout">Logout</NavLink>

                </>)

            } else if (companyName) {
                return (<>
                    <NavLink className="navlink" to="/CompProfile">Profile</NavLink>
                    <NavLink className="navlink" to="/Logout">Logout</NavLink>

                </>)
            } else{
                return(
                <>
                    <NavLink className="navlink" to="/AdminMainMenu">Admin</NavLink>
                    <NavLink className="navlink" to="/Logout">Logout</NavLink>

                </>)
            }


        } else {


            
            return (<>
                <NavLink className="navlink" to="/Login">Login</NavLink>
                <NavLink className="navlink" to="/Registration">Register</NavLink>

            </>
            )
        }
    }

    return (<>
        <div className="logo">
            <NavLink className="LOGOtextdecoration navlink" to="/">
                <span className="logospan"></span>
                <span className="logospan"></span>
                <span className="logospan"></span>
                <span className="logospan"></span>
                <b>Online Job Portal</b>
            </NavLink>

        </div>
        <div class="navbar">
            <nav >
                <input type="checkbox" id="nav-check" />
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                {/* <!-- Navbar items --> */}
                <div class="nav-links">
                    <NavLink className="navlink" to="/">Home</NavLink>


                    {/* <!-- Dropdown menu --> */}
                    <div class="dropdown">
                        <NavLink className="navlink dropBtn" to="/JobSearch">Job Search
                            <i class="fas fa-angle-down"></i>
                        </NavLink>
                        <div class="drop-content">

                            <NavLink className="navlink" to="/ByJobsTypes">By Jobs Types</NavLink>
                            <NavLink className="navlink" to="/ByLocation">By Location</NavLink>
                            <NavLink className="navlink" to="/ByCompanyName">By Company Name</NavLink>
                            <NavLink className="navlink" to="/ByStartup">By StartUps </NavLink>
                            <NavLink className="navlink" to="/ByOnlyWokFromHome">By Work From Home</NavLink>



                        </div>
                    </div>
                    <NavLink className="navlink" to="/EmployeeSearch">Search Employees </NavLink>
                    <NavLink className="navlink" to="/CareerTips">Career Tips</NavLink>
                    <Menubar />
                </div>


            </nav>


        </div>

        <br />
        <br />
    </>)
}

export default Navbar;
