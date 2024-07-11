import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";
import passportSetup from "./passport.js"
dotenv.config()

const port = process.env.PORT || 8000;
const app = express();

app.use(cookieSession({
    name: "session",
    keys:["cyberwolve"],

    //NOTE - cookies option
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,PUT,POST,DELETE",
        credentials: true,
    })
)

app.get("/",(req,res)=>{
    res.send("HEllo world")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})