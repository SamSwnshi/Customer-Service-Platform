import passport from "passport";
import express from "express";

const router = express.Router();

router.get("/google", passport.authenticate("google", ["profile", "email"]));


// NOTE - old google call back from google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login",
  })
);

// router.get("/google/callback", passport.authenticate("google", {
//   failureRedirect: "http://localhost:3000/login",
// }), (req, res) => {
//   const userData = {
//     id: req.user.id,
//     name: req.user.name,
//     email: req.user.email,
//     createdAt: req.user.createdAt,
//   };
//   res.redirect(`http://localhost:3000/dashboard?user=${encodeURIComponent(JSON.stringify(userData))}`);
// });

router.get("/login/sucess", async (req, res) => {

  if (req.user) {
    res.status(200).json({
      message: "user has successfully authenticated",
      user: req.user,
    });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});


router.get("/logout",async(req,res,next)=>{
  req.logout(function(error){
    if(error){
      return next(error);
    }

    res.redirect("http://localhost:3000/login")
  });
})
export default router;
