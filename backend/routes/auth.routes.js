import passport from "passport";
import express from "express";

const router = express.Router()

router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        message: "Login Failure"
    })
})

router.get("/success",(req,res)=>{
    if(req.user){
        res.status(200).json({
            message: "Successfull Loged In!",
            user: req.user,
        })
    }else{
        res.status(403).json({
            message: "Not Authorized"
        })
    }
   
})


router.get("/google",passport.authenticate("google",["profile","email"]));

router.get("/google/callback",
    passport.authenticate("google",{
        successRedirect: process.env.GOOGLE_CLIENT_URL ,
        failureRedirect: "/login/failed",
    })
)


router.get("/logout",(req,res)=>{
    res.logout();
    res.redirect(process.env.GOOGLE_CLIENT_URL);
})


export default router;