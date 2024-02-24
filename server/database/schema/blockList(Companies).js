const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");


const CompBlockListSchema = new mongoose.Schema({
	Type: {
		type: String
		
	},addedDate:{
        type: Date,
        defualt: Date.now
    }
    ,
     OriginalDate: {
		type: Date,
		

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
	}, country: {
		type: String,
		require: true
	}, state: {
		type: String,
		require: true
	}


});





const CompBlockList = new mongoose.model("Block List Companies", CompBlockListSchema);
module.exports = CompBlockList;
