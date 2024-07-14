import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import userDb from "./models/user.models.js";

const configPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        // console.log("profile",profile) checking for day from profile
        try {
          let user = await userDb.findOne({ googleId: profile.id });

          if(!user){
            user = new userDb({
              googleId: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
            });

            await user.save();
          }
          return done(null,user)
        } catch (error) {
          done(error, null);
        }
      },

      function (accessToken, refreshToken, profile, callback) {
        callback(null, { profile: profile, accessToken: accessToken });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

export default configPassport;
