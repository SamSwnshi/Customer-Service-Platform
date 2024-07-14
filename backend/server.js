import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import authRoute from "./routes/auth.routes.js"
import config from "./mongodb/config.js";
import configPassport from "./passport.js";
import session from "express-session";


dotenv.config()


const __dirname = path.resolve();

const port = process.env.PORT || 8000;
const app = express();


app.use(express.json())

configPassport()

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
}))


app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,PUT,POST,DELETE",
        credentials: true,
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth",authRoute)

app.use(express.static(path.join(__dirname,"frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

app.listen(port,()=>{
    config()
    console.log(`Server is running on port ${port}`)
})