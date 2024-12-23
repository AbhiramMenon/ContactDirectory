const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv=require("dotenv").config();
const app=express()
const port=process.env.PORT||5000
app.use(express.json())
app.use(errorHandler)
app.use("/api/contacts",require("./routes/contactRoutes"));
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})