import { connectDB } from './config/db.js';
import express from "express";
import bodyParser from 'body-parser';
import  {Router as authRouter } from './routes/authRoutes.js';
import { Router as taskRouter } from "./routes/taskRoutes.js";
import cors from 'cors';
import "dotenv/config";
import cookieParser from "cookie-parser";
const app = express();


// Middleware to parse JSON request bodies

app.use(cors(
    {
        origin:"http://localhost:5173", 
    credentials: true
    }
));

app.use (cookieParser())
app.use(express.json());

connectDB();
app.use(bodyParser.json());
app.use("/api/auth", authRouter)
app.use('/api/task', taskRouter)



app.listen(
    process.env.PORT,
    () => console.log(`Server is running on ${ process.env.PORT}`)
 );

