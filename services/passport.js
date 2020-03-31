const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model("users")

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
      done(null, user)
  })
})

passport.use(
    new GoogleStrategy({
        clientID : keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {

        User.findOne({
            googleId : profile.id
        })
        .then((exisitngUser) => {
            if(exisitngUser){
                done(null, exisitngUser)
            } else {
                new User({
                    googleId : profile.id,
                    fullName: profile.displayName,
                    givenName: profile.name.givenName,
                    photo: profile.photos[0].value,
                    email: profile.emails[0].value
                })
                .save()
                .then(user => done(null, user))
            }
        })

        
    })
)
