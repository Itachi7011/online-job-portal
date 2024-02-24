const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");


const EmpSchema = new mongoose.Schema({
	Type: {
		type: String,
		default: "Job Seeker / Employee"
	}, date: {
		type: Date,
		default: Date.now

	}, name: {
		type: String,
		require: true

	}, gender: {
		type: String,
		require: true
	}, email: {
		type: String,
		require: true
	}, age: {
		type: String,
		require: true
	}, phoneNo: {
		type: String,
		require: true
	}, fullAddress: {
		type: String,
		require: true
	}, country: {
		type: String,
		require: true
	}, state: {
		type: String,
		require: true
	}
	, qualification: {
		type: String,
		require: true
	}, percentage: {
		type: String,
		require: true
	}, experience: {
		type: String,
		default: 0,
		require: true
	}, field: {
		type: String,
		require: true
	}, workAs: {
		type: String,

	}, hobbies: {
		type: String,

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

	}, securityQuestion: {
		type: String,
		require: true

	}, securityAnswer: {
		type: String,
		require: true
	}
	, password: {
		type: String,
		require: true
	}, cpassword: {
		type: String,
		require: true
	}, tokens: {
		type: String
	}

});

EmpSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
		this.cpassword = undefined;
	}
	next();
})






EmpSchema.methods.generateAuthToken = async function () {
	try {
		let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "2592000000" });

		this.tokens = token;

		await this.save();
		return token;
	} catch (err) {
		console.log(err);
	}
}




const EmpModel = new mongoose.model("EmployeeDetails", EmpSchema);
module.exports = EmpModel;
