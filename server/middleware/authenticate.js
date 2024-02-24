const jwt = require("jsonwebtoken");
const employeedb = require("../database/schema/employee");
const companydb = require("../database/schema/company");
const admindb = require("../database/schema/admin");
require("../app");

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jstoken;
        if (!token) {
            console.log("Sorry token can't found Please Login again.")
            // res.send("Sorry User Not Found ! Please Try Again.")
        } else {
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            if (!verifyToken) {
                console.log("Sorry token can't verified")
            } else {
                const rootUser = await employeedb.findOne({ _id: verifyToken._id, "tokens": token });
                const rootUser1 = await companydb.findOne({ _id: verifyToken._id, "tokens": token });
                const rootUser2 = await admindb.findOne({ _id: verifyToken._id, "tokens": token });

                
                if (rootUser) {
                    req.token = token;
                    req.rootUser = rootUser;
                    req._id = rootUser._id;

                }else if (rootUser1) {
                    req.token = token;
                    req.rootUser = rootUser1;
                    req._id = rootUser1._id;

                }else if (rootUser2) {
                    req.token = token;
                    req.rootUser = rootUser2;
                    req._id = rootUser2._id;

                }else if (!rootUser && !rootUser1 && !rootUser2) {
                    throw new Error("User Not Found ! Please Return to Previous Page and Try again.");
                }
            }
        }


        next();

    } catch (error) {
        console.log(error);
        res.status(401).send("UnAuthorised User")
    }
}
module.exports = authenticate;
