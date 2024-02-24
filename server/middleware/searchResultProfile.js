const jwt = require("jsonwebtoken");
const companydb = require("../database/schema/company");
require("../app");



const searchResultProfile = async (req, res, next) => {
    try {
        const id = req.body.id;
        const data = await companydb.findOne({ _id: id });
        if (data) {
            req.data = data;

        } else (
            console.log("sorry problem occured!")
        )


        next();

    } catch (error) {
        console.log(error);
        res.status(401).send("Sorry problematic!")
    }
}


module.exports = searchResultProfile;