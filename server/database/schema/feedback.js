const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    email: {
        type: String,


    }, feedback: {
        type: String
    }
})



const FeedbackModel = new mongoose.model("Feedback", FeedbackSchema);

module.exports = FeedbackModel;
