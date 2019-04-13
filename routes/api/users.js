const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport")

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const { User } = require("../../models");// @route POST api/users/register

// router.post("/dummy", (req, res) => {
//     console.log(req.body);
// })

router.get("/authenticate", 
    passport.authenticate('jwt', { session: false }),
    (req, res)=>res.json({success: true})
);

router.post("/register", (req, res) => {
    console.log(req.body)
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        console.log(errors)
        return res.status(400).json(errors);
    }
    User.findOne({ userEmail: req.body.userEmail }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        }
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPassword: req.body.userPassword
        });

        // console.log(newUser)
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.userPassword, salt, (err, hash) => {
                if (err) throw err;
                newUser.userPassword = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    });
});

router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;
    // Find user by email
    User.findOne({ where: {userName: username} }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.userPassword).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName
                };
                // console.log(payload)

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 86400// 1 day in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                console.log(isMatch)
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

router.post("/")

module.exports = router