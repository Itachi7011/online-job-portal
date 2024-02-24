const mongoose = require("mongoose");
 const databaseAddr = process.env.databaseAddr;


mongoose.connect(databaseAddr,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connection is successful with database")
    }).catch((err)=>{
        console.log(err)
    })
