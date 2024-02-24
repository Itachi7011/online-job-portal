const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");


const CompSchema = new mongoose.Schema({
    Type: {
        type: String,
        default: "Company / Employer"
    }, Date: {
        type: Date,
        default: Date.now
    }, CompVerificationStatus:{
        type: String,
        default: "Waiting For Verification"
        
    }, CompanyName: {
        type: String,
        require: true
    }, email: {
        type: String,
        require: true
    }, phoneNo: {
        type: String,
        require: true
    }, fullAddress: {
        type: String,
        require: true
    },country:{
        type:String,
        require: true
    }, state: {
        type: String,
        require: true
    }, isStartup: {
        type: String,
        require: true
    }
    , startingYear: {
        type: String,
        require: true
    }, otherBranches: {
        type: String,
        default: "No Other Branches"
        
    }, compProducts: {
        type: String,
        require: true
    }, github: {
        type: String,

    }, twitter: {
        type: String,

    }, instagram: {
        type: String,

    }, facebook: {
        type: String,

    }, website: {
        type: String,

    }, field: {
        type: String,
        require: true
    }, minQualifications: {
        type: String,
        require: true
    }, minExperienceNeeded: {
        type: String,
        require: true
    }, noOfEmpNeeded: {    // No Of Employeed Needed for 
						   // that particular job
        type: String,
        require: true
    },lastDateForApply:{
        type: String,
        require: true
    }
    , salaryExpected: {
        type: String,
        require: true
    }, workFromHome: {
        type: String,
        require: true
    }, securityQuestion: {
		type: String,
		require: true
	}, securityAnswer: {
		type: String,
		require: true
	}, password: {
        type: String,
        require: true
    }, cpassword: {
        type: String,
        require: true
    }
    , tokens: {
        type: String
    }
})



CompSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        this.cpassword = undefined;
    }
    next();
})

CompSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY,{expiresIn:"2592000000"});

        this.tokens = token;

        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}





const CompModel = new mongoose.model("CompanyDetails", CompSchema);
module.exports = CompModel;
