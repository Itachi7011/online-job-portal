const mongoose = require("mongoose");


const adminRequestSchema = new mongoose.Schema({
    Type: {
        type: String,
        default: "New Admin Request"
    }, Date: {
        type: Date,
        default: Date.now
    }, name: {
        type: String,
        require: true
    }, email: {
        type: String,
        require: true
    }, phoneNo: {
        type: String,
        require: true
    }, statusOfRequest: {
        type: String,
        default: "Waiting For Approval"
    }
})


const adminRequestModel = new mongoose.model("adminRequests", adminRequestSchema);
module.exports = adminRequestModel;