import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"Hospital_management_system"
    }).then(()=>{
        console.log("connected to database");
    }).catch((e)=>{
        console.log("connection failed :",e);
    });
}

