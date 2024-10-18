let mongoose = require('mongoose');
//let dbURI = "mongodb://localhost:27017"
let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";

mongoose.connect(dbURI,{
    //userNewURLParser: true
});

mongoose.connection.on("connected", ()=>{
    console.log("connected to mongodb");
});

mongoose.connection.on("error", (error)=>{
    console.log("connected error: " + error);
});

mongoose.connection.on("disconnected", ()=>{
    console.log("disconnected from mongodb");
});