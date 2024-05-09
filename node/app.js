import Express from "express";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/DBConnection.js";
import messageRouter from "./router/message.router.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import userRouter from './router/userRouter.js'
import appointmentRouter from './router/appointmentRouter.js'


const app = Express();
config({path: "./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}));
app.use(cookieParser());
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));


app.use("/api/v1/mesasge",messageRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/appointment",appointmentRouter);
dbConnection();

app.use(errorMiddleware);
export default app;


