const mongoose = require("mongoose");
// const databaseAddr = process.env.databaseAddr;


mongoose.connect("mongodb://127.0.0.1:27017/OnlineJobPoral",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connection is successful with database")
    }).catch((err)=>{
        console.log(err)
    })
