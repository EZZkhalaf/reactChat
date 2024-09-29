import express from 'express'; // we can doit here bec in the package.json "type" : "module"
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from './routes/authRoute.js';
import mongoConnect from './db/mongoConnect.js';
import messageRout from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import {app, server} from './socket/socket.js';
import path, { join } from "path";


const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();//for deployment/which give us the path tp the root folder 


dotenv.config();


app.use(express.json());//to parse the upcoming requests  from the user (req.body)
app.use(cookieParser());//to access the cookies for the user 


//this is a way to make the code simpler and easier to read when access tthis specific  rout it go to this file authRoutes
app.use('/api/auth' , authRoute);

app.use('/api/messages', messageRout);

app.use('/api/users', userRoutes);


app.use(express.static(path.join(__dirname,"/charFront/dist")));//for the static file in the project html/css/js
app.get("*" , (req,res)=>{
    res.sendFile(path.join(__dirname,"charFront" , "dist" , "index.html")); 
})

server.listen(PORT , ()=>{
    mongoConnect();
    console.log(`running in ${PORT}`);
})