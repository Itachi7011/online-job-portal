const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
app.use(express.static(__dirname, +"../client/public/"));

const dotenv = require("dotenv");
dotenv.config();

const cookieParser = require("cookie-parser")
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

require("./database/connection");

const employeedb = require("./database/schema/employee");
const companydb = require("./database/schema/company");
const adminDB = require("./database/schema/admin");
const adminRequestDB = require("./database/schema/adminRequest");
const blockListEmployees = require("./database/schema/blockList(Employees)");
const blockListCompanies = require("./database/schema/blockList(Companies)");
const feedbackdb = require("./database/schema/feedback");
const authenticate = require("./middleware/authenticate");
const searchResultProfile = require("./middleware/searchResultProfile");
const { JSONCookie } = require("cookie-parser");
const { json } = require("express");
const alert = require("alert");


app.post("/employeeregister", async (req, res) => {
    try {
        const Password = req.body.password;
        const Cpassword = req.body.cpassword;
        const email = req.body.email;

        const blockList = await blockListEmployees.findOne({ email: email });

        if (blockList) {
            res.send("Sorry This Email / Phone No. is blocked before for violation of terms by Admin!")
        }
        else {

            if (Password === Cpassword) {
                if (Password.length < 7) {
                    res.send("Sorry Password must be atleast 8 digits. Please try again !");
                } else {
                    const employeedata = await new employeedb({
                        Type: req.body.type,
                        date: req.body.date,
                        name: req.body.name,
                        email: req.body.email,
                        age: req.body.age,
                        gender: req.body.gender,
                        country: req.body.country,
                        hobbies: req.body.hobbies,
                        phoneNo: req.body.phoneNo,
                        fullAddress: req.body.fullAddress,
                        state: req.body.state,
                        percentage: req.body.percentage,
                        qualification: req.body.qualification,
                        experience: req.body.experience,
                        field: req.body.field,
                        workAs: req.body.workAs,
                        twitter: req.body.twitter,
                        website: req.body.website,
                        facebook: req.body.facebook,
                        instagram: req.body.instagram,
                        github: req.body.github,
                        securityQuestion: req.body.securityQuestion,
                        securityAnswer: req.body.securityAnswer,
                        password: req.body.password,
                        cpassword: req.body.cpassword
                    });

                  
                        await employeedata.save();
                        console.log("Saved in Database Successfully");
                        alert("New Employee Registered Successfully! \n Please Login to Continue");
                        res.redirect("/Login")
                    }

                


            } else {
                res.send("Sorry Password and Confirm Password do not match ! ")
            }
        }
    } catch (err) {
        console.log(err);
    }


})



app.post("/companyregister", async (req, res) => {
    try {
        const Password = req.body.password;
        const Cpassword = req.body.cpassword;
        const email = req.body.email;

        const data = await companydb.findOne({ email: email });
        const blockList = await blockListCompanies.findOne({ email: email });

        if (blockList) {
            res.send("Sorry This Email / PhoneNo. is blocked before for violation of terms by Admin!")
        }
        else {


            if (data) {
                res.send("Sorry User with this email id already exist ! Please try again with your another official email")
            } else {

                if (Password === Cpassword) {

                    if (Password.length < 7) {
                        res.send("Sorry Password must be atleast 8 digits. Please try again !")
                    } else {
                        const Compdata = await new companydb({
                            Type: req.body.type,
                            date: req.body.date,
                            verificationStatus: req.body.verificationStatus,
                            CompanyName: req.body.CompanyName,
                            email: req.body.email,
                            phoneNo: req.body.phoneNo,
                            fullAddress: req.body.fullAddress,
                            country: req.body.country,
                            state: req.body.state,
                            isStartup: req.body.isStartup,
                            startingYear: req.body.startingYear,
                            otherBranches: req.body.otherBranches,
                            compProducts: req.body.compProducts,
                            twitter: req.body.twitter,
                            website: req.body.website,
                            facebook: req.body.facebook,
                            instagram: req.body.instagram,
                            noOfEmpNeeded: req.body.noOfEmpNeeded,
                            minQualifications: req.body.minQualifications,
                            minExperienceNeeded: req.body.minExperienceNeeded,
                            salaryExpected: req.body.salaryExpected,
                            lastDateForApply: req.body.lastDateForApply,
                            field: req.body.field,
                            workFromHome: req.body.workFromHome,
                            securityQuestion: req.body.securityQuestion,
                            securityAnswer: req.body.securityAnswer,
                            password: req.body.password,
                            cpassword: req.body.cpassword
                        });

                       
                            await Compdata.save();
                            console.log("Saved in Database Successfully");
                            alert("New Company / Employer Registered Successfully!  Please Login to Continue");
                            res.redirect("/Login")
                        }

                    
                } else {
                    res.send("Sorry Password and Confirm Password do not match ! ")
                }

            }
        }
    } catch (err) {
        console.log(err);
    }


})


app.post("/newAdminRequest", async (req, res) => {
    try {

        const email = req.body.email;

        const data = await adminRequestDB.findOne({ email: email });

        if (data) {
            res.send("Sorry User with this email id already exist ! Please try again with your another official email")
        } else {

            const NewAdminRequestData = await new adminRequestDB({
                Type: req.body.type,
                date: req.body.date,
                email: req.body.email,
                name: req.body.name,
                phoneNo: req.body.phoneNo,
                statusOfRequest: req.body.statusOfRequest,


            });

            if (!req.body.name || !req.body.email) {

                res.send("Please fill all credentials marked with  *  before proceed");

            } else {
                await NewAdminRequestData.save();
                console.log("New Admin Request Saved Successfully");
                alert("Your request for becoming an admin registered successfully.  Please wait for around 48 hours to get response on your request. ");
                res.redirect("/")
            }




        }
    } catch (err) {
        console.log(err);
    }


})

app.post("/adminRegister", async (req, res) => {
    try {
        const Password = req.body.password;
        const Cpassword = req.body.cpassword;
        const Email = req.body.email;

        const AlreadyAdmin = await adminDB.findOne({ email: Email });

        if (AlreadyAdmin) {
            res.send("Sorry but You are already an admin! Please Login .")
        } else {

            if (Password === Cpassword) {
                if (Password.length < 7) {
                    res.send("Sorry Password must be atleast 8 digits. Please try again !")
                } else {
                    const adminData = await new adminDB({
                        Type: req.body.type,
                        date: req.body.date,
                        adminName: req.body.adminName,
                        email: req.body.email,
                        age: req.body.age,
                        gender: req.body.gender,
                        country: req.body.country,
                        hobbies: req.body.hobbies,
                        phoneNo: req.body.phoneNo,
                        fullAddress: req.body.fullAddress,
                        state: req.body.state,
                        percentage: req.body.percentage,
                        qualification: req.body.qualification,
                        experience: req.body.experience,
                        field: req.body.field,
                        workAs: req.body.workAs,
                        twitter: req.body.twitter,
                        website: req.body.website,
                        facebook: req.body.facebook,
                        instagram: req.body.instagram,
                        github: req.body.github,
                        securityQuestion: req.body.securityQuestion,
                        securityAnswer: req.body.securityAnswer,
                        password: req.body.password,
                        cpassword: req.body.cpassword
                    });

                    if (
                        !req.body.age || !req.body.gender || !req.body.country || !req.body.fullAddress || !req.body.state) {

                        res.send("Please fill all credentials marked with  *  before proceed");

                    } else {
                        await adminData.save();
                        console.log("Saved in Database Successfully");
                        alert("New Admin Registered Successfully! \n Please Login to Continue");

                        // delete from admin requests database bcz request already fulfilled and registeration successfull,
                        await adminRequestDB.deleteOne({ email: req.body.email });

                        res.redirect("/Login")
                    }

                }


            } else {
                res.send("Sorry Password and Confirm Password do not match ! ")
            }
        }
    } catch (err) {
        console.log(err);
    }


})




//          LOGIN Code for both Employee and Employers Here ---->

app.post("/login", async (req, res) => {
    try {
        const Email = req.body.email;
        const Password = req.body.password;

        if (!Email || !Password) {
            res.send("Please Enter Both Username And Password");

        }

        const data = await employeedb.findOne({ email: Email });
        const data1 = await companydb.findOne({ email: Email });
        const data2 = await adminDB.findOne({ email: Email });
        let token;
        if (data) {
            const isMatch = await bcrypt.compare(Password, data.password);

            if (isMatch == true) {
                token = await data.generateAuthToken();

                res.cookie('jstoken', token, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                });
                res.redirect("/EmpProfile");

            }
            else if (!Email || !Password) {
                res.send("Either Username or Password don't match");

            } else {
                res.send("Sorry Either Username or Password don't match");
            }
        }
        else if (data1) {

            const isMatch = await bcrypt.compare(Password, data1.password);

            if (isMatch == true) {
                token = await data1.generateAuthToken();

                res.cookie('jstoken', token, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                });
                res.redirect("/CompProfile");

            }
            else if (!Email || !Password) {
                res.send("Either Username or Password don't match");

            } else {
                res.send("Sorry Either Username or Password don't match");
            }
        } else if (data2) {
            const isMatch = await bcrypt.compare(Password, data2.password);

            if (isMatch == true) {
                token = await data2.generateAuthToken();

                res.cookie('jstoken', token, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                });
                res.redirect("/AdminMainMenu");

            }
            else if (!Email || !Password) {
                res.send("Either Username or Password don't match");

            } else {
                res.send("Sorry Either Username or Password don't match");
            }

        }
        else {
            res.send("Sorry Either Username or Password don't match");
        }


    } catch (err) {
        console.log(err);
    }
})

app.get("/showNewAdminRequests", async (req, res) => {

    try {
        const data = await adminRequestDB.find();

        res.send(data);


    } catch (err) {

        console.log(err)
    }

})

app.post("/confirmNewAdminRequest", async (req, res) => {

    try {
        const id = req.body.id;
        await adminRequestDB.findOneAndUpdate({ _id: id }, {
            statusOfRequest: "Confirmed"
        });


        alert("New Admin Request Confirmed.")
        res.redirect("/ShowNewAdminRequests")




    } catch (err) {

        console.log(err)
    }

})

app.post("/rejectNewAdminRequest", async (req, res) => {

    try {
        const id = req.body.id;

        await adminRequestDB.deleteOne({ _id: id })
        alert("Admin Request deleted Successfully");
        res.redirect("/ShowNewAdminRequests");


    } catch (err) {

        console.log(err)
    }

})

app.post("/deleteAndBlockEmployees", async (req, res) => {

    try {
        const id = req.body.id;


        const emp = await employeedb.findOne({ _id: id });

        var Name = emp.name;
        var Type = emp.Type;
        var date = emp.Date;
        var Email = emp.email;
        var PhoneNo = emp.phoneNo;
        var FullAddress = emp.fullAddress;
        var Country = emp.country;
        var State = emp.state;

        await blockListEmployees.insertMany({
            name: Name,
            Type: Type,
            OriginalDate: date,
            email: Email,
            phoneNo: PhoneNo,
            fullAddress: FullAddress,
            country: Country,
            state: State
        })


        await employeedb.deleteOne({ _id: id })
        alert("Employee deleted Successfully")







    } catch (err) {

        console.log(err)
    }

})

app.post("/deleteAndBlockCompanies", async (req, res) => {

    try {
        const email = req.body.email;
        const id = req.body.id;


        const comp = await companydb.findOne({ email: email });

        var Name = comp.CompanyName;
        var type = comp.Type;
        var date = comp.Date;
        var Email = comp.email;
        var PhoneNo = comp.phoneNo;
        var FullAddress = comp.fullAddress;
        var Country = comp.country;
        var State = comp.state;


        await blockListCompanies.insertMany({
            CompanyName: Name,
            Type: type,
            OriginalDate: date,
            email: Email,
            phoneNo: PhoneNo,
            fullAddress: FullAddress,
            country: Country,
            state: State
        })




        await companydb.deleteOne({ _id: id })
        alert("Company deleted Successfully")







    } catch (err) {

        console.log(err)
    }

})

app.post("/nextStepConfirmNewAdminRequest", async (req, res) => {

    try {
        const id = req.body.id;
        const RequestStatusConfirmed = await adminRequestDB.findOne({
            _id: id,
            statusOfRequest: "Confirmed"
        });

        const RequestStatusRejected = await adminRequestDB.findOne({
            _id: id,
            statusOfRequest: "Rejected"
        });

        const RequestStatusWaiting = await adminRequestDB.findOne({
            _id: id,
            statusOfRequest: "Waiting For Approval"
        });

        if (RequestStatusConfirmed) {
            res.redirect("/AdminRegistration");
        } else if (RequestStatusRejected) {
            res.send("Sorry Your Request for becoming Admin is rejected! It can not be proceed further.Please Contact Present Admins if needed .")
        } else if (RequestStatusWaiting) {
            res.send("Sorry Your Request for becoming Admin is not Confirmed Yet, Please have patience !")
        } else {
            res.send("Sorry Your Request for becoming Admin is not Found!")
        }





    } catch (err) {

        console.log(err)
    }

})


app.get("/rejectNewAdminRequest", async (req, res) => {

    try {

        const id = req.body.id;
        await adminRequestDB.findOneAndUpdate({ _id: id }, {
            statusOfRequest: "Rejected"
        });
        alert("New Admin Request Rejected.")
        res.redirect("ShowNewAdminRequests")



    } catch (err) {

        console.log(err)
    }

})

app.get("/checkNewAdminRequest", async (req, res) => {

    try {
        const data = await adminRequestDB.find();

        res.send(data);


    } catch (err) {

        console.log(err)
    }

})


app.get("/empsearchresultsfinal", async (req, res) => {

    try {
        const data = await employeedb.find();

        res.send(data);


    } catch (err) {

        console.log(err)
    }

})

app.get("/compsearchresultsfinal", async (req, res) => {

    try {
        const data = await companydb.find();


        res.send(data);


    } catch (err) {

        console.log(err)
    }

})


app.get("/compsearchresultsWorkFromHome", async (req, res) => {

    try {
        const data = await companydb.find();


        res.send(data);


    } catch (err) {

        console.log(err)
    }

})




app.get("/showFeedback", async (req, res) => {

    try {
        const data = await feedbackdb.find();


        res.send(data);


    } catch (err) {

        console.log(err)
    }

})






//          AUTHENTICATE MIDDLEWARE FUNCTION HERE -------->

app.get("/empProfile", authenticate, (req, res) => {
    res.send(req.rootUser);
})

app.get("/adminProfile", authenticate, (req, res) => {
    res.send(req.rootUser);
})

app.get("/homeData1", authenticate, (req, res) => {
    res.send(req.rootUser);
})

app.get("/homeData2", (req, res) => {

})


app.get("/compProfile", authenticate, (req, res) => {
    res.send(req.rootUser);
})




// Edit Profile Details ---------------->

app.post("/editEmpUser", authenticate, async (req, res) => {
    try {
        const id = req._id;
        const employee = await employeedb.findOneAndUpdate({ _id: id },
            {


                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                gender: req.body.gender,
                country: req.body.country,
                hobbies: req.body.hobbies,
                phoneNo: req.body.phoneNo,
                fullAddress: req.body.fullAddress,
                state: req.body.state,
                percentage: req.body.percentage,
                qualification: req.body.qualification,
                experience: req.body.experience,
                field: req.body.field,
                workAs: req.body.workAs,
                twitter: req.body.twitter,
                website: req.body.website,
                facebook: req.body.facebook,
                instagram: req.body.instagram,
                github: req.body.github,

            })
        await employee.save();
        console.log("Congratulations profile updated.");
        res.redirect("/EmpProfile");

    } catch (err) {
        console.log("Sorry profile can't updated !");
        console.log(err);
    }


})

//  Feedback code is here

app.get("/feedback", authenticate, async (req, res) => {
    try {
        res.send(req.rootUser);

    } catch (err) {
        console.log(err);
    }
})

app.post("/feedbackPost", authenticate, async (req, res) => {
    const Email = req.body.email;
    const Feedback = req.body.feedback;
    try {
        if (Email === "" || Feedback === "" || Email === " " || Feedback === " ") {
            res.send("Plese fill both email and feedback section !")
        } else {
            const feedbackdata = await new feedbackdb({

                email: Email,
                feedback: Feedback

            });
            await feedbackdata.save();
            console.log("Saved Feedback Successfully");
            alert("Your valuable feedback will be monitered carefully.");
            res.redirect("/")
        }

    } catch (err) {
        console.log(err);
    }
})


app.post("/editCompUser", authenticate, async (req, res) => {
    try {
        const id = req._id;
        const employee = await companydb.findOneAndUpdate({ _id: id },
            {
                CompanyName: req.body.CompanyName,
                email: req.body.email,
                phoneNo: req.body.phoneNo,
                fullAddress: req.body.fullAddress,
                country: req.body.country,
                state: req.body.state,
                isStartup: req.body.isStartup,
                startingYear: req.body.startingYear,
                website: req.body.website,
                twitter: req.body.twitter,
                instagram: req.body.instagram,
                facebook: req.body.facebook,
                otherBranches: req.body.otherBranches,
                compProducts: req.body.compProducts

            })
        await employee.save();
        alert("Congratulations profile updated.");
        console.log("Congratulations profile updated.");
        res.redirect("/CompProfile");

    } catch (err) {
        console.log("Sorry profile can't updated !");
        console.log(err);
    }


})

app.post("/editEmployeedNeeded", authenticate, async (req, res) => {
    try {
        const id = req._id;
        const employee = await companydb.findOneAndUpdate({ _id: id },
            {
                noOfEmpNeeded: req.body.noOfEmpNeeded,
                salaryExpected: req.body.salaryExpected,
                minQualifications: req.body.minQualifications,
                minExperience: req.body.minExperience,
                field: req.body.field
            })
        await employee.save();
        alert("Congratulations Employees Needed details updated.")
        console.log("Congratulations profile updated.");
        res.redirect("/CompProfile");

    } catch (err) {
        console.log("Sorry profile can't updated !");
        console.log(err);
    }


})

app.post("/editCompSecurityQuestionAnswer", authenticate, async (req, res) => {
    try {
        const id = req._id;
        const employee = await companydb.findOneAndUpdate({ _id: id },
            {
                securityQuestion: req.body.securityQuestion,
                securityAnswer: req.body.securityAnswer

            })
        await employee.save();
        console.log("Congratulations profile updated.");
        res.redirect("/CompProfile");

    } catch (err) {
        console.log("Sorry profile can't updated !");
        console.log(err);
    }


})

app.post("/editEmpSecurityQuestionAnswer", authenticate, async (req, res) => {
    try {
        const id = req._id;
        const employee = await employeedb.findOneAndUpdate({ _id: id },
            {
                securityQuestion: req.body.securityQuestion,
                securityAnswer: req.body.securityAnswer

            })
        await employee.save();
        console.log("Congratulations profile updated.");
        res.redirect("/CompProfile");

    } catch (err) {
        console.log("Sorry profile can't updated !");
        console.log(err);
    }


})

// This function is for both Emp and Comp  --------------> 

app.post("/editPassword", authenticate, async (req, res) => {
    try {
        const id = req._id;
        const Password = req.body.oldpassword;
        const newPassword = req.body.newpassword;
        const confirmnewPassword = req.body.confirmnewpassword;


        if (!Password || !newPassword || !confirmnewPassword) {
            res.send("Please go back and fill all fields correctly!");
        }

        if (newPassword === confirmnewPassword) {

            const data = await employeedb.findOne({ _id: id });
            const data1 = await companydb.findOne({ _id: id });


            if (data) {

                const NewPassword = await bcrypt.hash(newPassword, 10);

                const data1 = await employeedb.findOneAndUpdate({ _id: id },
                    { password: NewPassword });

                await data1.save();

                alert("Congratulations, Your Password changed successfully!")
                res.redirect("/EmpProfile");


            } else if (data1) {

                const NewPassword = await bcrypt.hash(newPassword, 10);

                const data1 = await companydb.findOneAndUpdate({ _id: id },
                    { password: NewPassword });

                await data1.save();

                alert("Congratulations, Your Password changed successfully!")
                res.redirect("/CompProfile");


            } else {
                alert("Sorry Old Password not matched!");
                res.redirect("EditPasswordProfile");
            }
        } else if (newPassword !== confirmnewPassword) {
            res.send("Sorry New Password and Confirm Password do not match! Please go back and try again.")
        }

    } catch (err) {
        // console.log(""); 
        console.log(err);
    }

})


//          Forgot Password

app.post("/forgotPassword", async (req, res) => {
    try {
        const Email = req.body.email;
        const PhoneNo = req.body.phoneNo;
        const SecurityQuestion = req.body.securityQuestion;
        const SecurityAnswer = req.body.securityAnswer;


        const data = await employeedb.findOne({ email: Email });
        const data1 = await companydb.findOne({ email: Email });

        if (data) {
            if (PhoneNo == data.phoneNo) {
                if (SecurityQuestion === data.securityQuestion && SecurityAnswer === data.securityAnswer) {
                    alert("Congratulations All credentials matched. /n Please Change Your Password for Continue !")
                    res.redirect("/MustChangePasswordAfterForget");
                } else {
                    res.send("Sorry Security Quetion/Answer don't Match! Please Try Again !")
                }
            } else {
                res.send("Sorry Email and Phone No don't match!")
            }
        }
        else if (data1) {
            if (PhoneNo == data1.phoneNo) {
                if (SecurityQuestion === data1.securityQuestion && SecurityAnswer === data1.securityAnswer) {
                    alert("Congratulations All credentials matched. /n Please Change Your Password for Continue !")
                    res.redirect("/MustChangePasswordAfterForget");
                } else {
                    res.send("Sorry Security Quetion/Answer don't Match! Please Try Again !")
                }
            } else {
                res.send("Sorry Email and Phone No don't match!")
            }
        } else {
            res.send("Sorry No User with this Email Found!")
        }

    } catch (err) {
        console.log(err);
    }
})

app.post("/mustChangePasswordAfterForget", async (req, res) => {
    try {

        const Email = req.body.email;

        const Password = req.body.password;

        const ConfirmPassword = req.body.confirmPassword;


        if (!Password || !Email || !ConfirmPassword) {
            res.send("Please fill all fields correctly!");
        }

        if (Password === ConfirmPassword) {

            const data = await employeedb.findOne({ email: Email });
            const data1 = await companydb.findOne({ email: Email });


            if (data) {
                const HashedPassword = await bcrypt.hash(Password, 10);
                const data2 = await employeedb.findOneAndUpdate({ email: Email },
                    { password: HashedPassword });

                await data2.save();

                alert("Congratulations, Your Password changed successfully!")
                res.redirect("/EmpProfile");


            } else if (data1) {
                const HashedPassword = await bcrypt.hash(Password, 10);
                const data2 = await companydb.findOneAndUpdate({ email: Email },
                    { password: HashedPassword });

                await data2.save();

                alert("Congratulations, Your Password changed successfully!")
                res.redirect("/CompProfile");


            } else {
                alert("Sorry Old Password not matched!");
                res.redirect("EditPasswordProfile");
            }
        } else if (Password !== ConfirmPassword) {
            res.send("Sorry New Password and Confirm Password do not match! Please go back and try again.")
        }

    } catch (err) {
        // console.log(""); 
        console.log(err);
    }

})



//          LOGOUT  FUNCTION HERE  ---------------->

app.get("/logout", authenticate, async (req, res) => {
    try {

        res.clearCookie("jstoken", { path: "/" });
        res.send("Cookies deleted");

    } catch (err) {
        console.log(err);
    }
})



app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
