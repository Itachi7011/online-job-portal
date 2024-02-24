const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");


const EmpBlockListSchema = new mongoose.Schema({
	Type: {
		type: String
		
	},AddedDate: {
		type: Date,
		default: Date.now
		
	}, OriginalDate: {
		type: Date
		

	}, name: {
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
	}, country: {
		type: String,
		require: true
	}, state: {
		type: String,
		require: true
	}


});





const EmpBlockList = new mongoose.model("Block List Employees", EmpBlockListSchema);
module.exports = EmpBlockList;
