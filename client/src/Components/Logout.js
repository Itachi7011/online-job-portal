import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";


function EmpLogout() {

    const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate();

       
    useEffect(
        function(){
        try {

             fetch("/logout",
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }, credentials: "include"
                   
                }).then((res)=>{

                    dispatch({type:"USER" , payload: "true"});

                    navigate("/Login");
                    if(res !== 200){
                        throw new Error(res.error);
                    }
                })
                
        } catch (error) {
            console.log("Logout Unsuccessfull !");
            console.log(error);
            
        }
    }
    
    )

    return (<>

    <h1>You Logged Out Successfully.</h1>

    </>)
}

export default EmpLogout;