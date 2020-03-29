const passport = require("passport")

module.exports = (app) => {
    app.get("/auth/google", passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    // mongodb+srv://greatrr-prod:<password>@cluster0-jrdez.mongodb.net/test?retryWrites=true&w=majority
    // 403064708681-i5cmsoh6dd3pmpdugi3kr190tots2sbg.apps.googleusercontent.com
    // EmwmdAjOu3NYMNayKzClaS0I
    
    app.get('/auth/google/callback', passport.authenticate('google'))

    app.get('/api/logout', (req, res) => {
        req.logout()
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
    
}