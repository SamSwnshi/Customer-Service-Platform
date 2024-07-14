import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import authRoute from "./routes/auth.routes.js"
import config from "./mongodb/config.js";
import configPassport from "./passport.js";
import session from "express-session";


dotenv.config()


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

app.listen(port,()=>{
    config()
    console.log(`Server is running on port ${port}`)
})