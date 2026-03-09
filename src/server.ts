import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./config/db";
const PORT = process.env.PORT || 5000;
app.listen(PORT, async()=>{
    console.log(`Server running on port ${PORT}`); 
    await connectDB().then(()=>console.log("Database is connected successfully")).catch(()=>console.log("db error"));

});

