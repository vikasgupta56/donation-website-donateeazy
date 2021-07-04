require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcryptjs");
const validator = require('validator');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb+srv://viviana:vivi@cluster0.1prwn.mongodb.net/users?retryWrites=true&w=majority' || 'mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const port = process.env.PORT || 5000;

// signupSchema

var registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true

    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email");
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

registerSchema.pre('save', async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
});

var Register = mongoose.model('Register', registerSchema);


// CampaignRequest Schema

var campaignrequestSchema = new mongoose.Schema({
    // nameNGO,emailNGO,phoneNGO,orgNGO,webNGO,fbNGO,msgNGO
    nameNGO:{
        type:String,
    },
    emailNGO:{
        type:String,
    },
    phoneNGO:{
        type:String,
    },
    orgNGO:{
        type:String,
    },
    webNGO:{
        type:String,
    },
    fbNGO:{
        type:String,
    },
    msgNGO:{
        type:String,
    }

 
});

var CampaignReg = mongoose.model('CampaignReg',campaignrequestSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/Signup', async (req, res) => {
    try {
        const {firstName,lastName,email,password} = req.body;
        const newUser = {firstName,lastName,email,password}

        const useremail = await Register.findOne({ email: email });
        if(useremail){
            res.status(402).json({message:"User already exists"})
        }
        else{
        let activation_token = jwt.sign(newUser,"thiskeyistoactivateuseraccountsecretkey");
       

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'vika.gupta100@gmail.com',
              pass: 'aquasure'
            }
          });
      
          const mailOptions = {
            from: 'vika.gupta56@gmail.com',
            to: email,
            subject: 'Activate your account',
            text:'Activation email',
            html: `<h3>Activate your account by clicking on the button below</h3><br><a href="http://localhost:5000/auth/activate/${activation_token}"><button>Activate email</button></a><br><p>If in case the button doesn't work you can copy the given link below or click on it to activate your account</p><br><a href="http://localhost:5000/auth/activate/${activation_token}">localhost:5000/auth/activate/${activation_token}</a>`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error,"this is nodemailer error");
             
            } else {
              console.log('Email sent: ' + info.response);
            }
          });


       
        res.status(200).json({ message: "valid" });
        }

    }
    catch (error) {
        res.status(402).json({ error: "Invalid" });

    }
});


app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({ email: email });
        if (useremail) {

            const isMatch = await bcrypt.compare(password, useremail.password);


            if (isMatch) {
                res.status(200).json({ message: "login successfull" });

            }
            else {
                res.status(404).json({ error: "invalid password" });
            }
        }
        else {
            res.status(404).json({ error: "invalid eamil" })


        }
    }
    catch (error) {
        res.status(404).json({ error: "Plz fill the data" });
    }
});
app.post('/activateEmail', async(req,res)=>{
   
        try {
            const {activation_token} = req.body;
           
            const user = jwt.verify(activation_token,"thiskeyistoactivateuseraccountsecretkey");
            if(user){
                res.status(201).json({message:"saving in progress"})
                const {firstName,lastName,email,password} = user
                const newUser = new Register({
                    firstName,lastName,email,password
                })
    
                await newUser.save()
              
             
           
            }
            else{
                res.status(402).json({message:"token received in backend but doesnt match"})
            }


            // const {name, email, password} = user

            // const check = await Users.findOne({email})
            // if(check) return res.status(400).json({msg:"This email already exists."})

            // const newUser = new Users({
            //     name, email, password
            // })

            // await newUser.save()

            // res.json({msg: "Account has been activated!"})

        } 
        catch (err) {
            return res.status(402).json({msg: err.message})
        }
    

})

//IndividualCampaign

app.post('/StartCampaign', async(req,res)=>{
   
    try {
        const values = req.body;
        // console.log(values);
        const {nameNGO,emailNGO,phoneNGO,orgNGO,webNGO,fbNGO,msgNGO} =values;
        const newRequest = new CampaignReg({
            nameNGO,emailNGO,phoneNGO,orgNGO,webNGO,fbNGO,msgNGO
        })

        await newRequest.save()
        res.status(200).json({message:"reached out to backend"});

        const campaigntransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'vika.gupta56@gmail.com',
              pass: 'Aquasure@123'
            }
          });
      
          const campaignmailOptions = {
            from: 'vika.gupta56@gmail.com',
            to: 'vika.gupta56@gmail.com',
            subject: 'New user request to start a campaign',
            text:'New user request to start a campaign',
            html: `<h2>A New User request has been received to start a campaign</h2><br><h2>The details of the request are :</h2><br><p>nameNGO:${nameNGO},</p><br><p>emailNGO:${emailNGO},</p><br><p>phoneNGO:${phoneNGO},</p><br><p>orgNGO:${orgNGO},</p><br><p>webNGO:${webNGO},</p><br><p>fbNGO:${fbNGO},</p><br><p>msgNGO:${msgNGO}</p>`

          };

          transporter.sendMail(campaignmailOptions, function(error, info){
            if (error) {
              console.log(error,"this is nodemailer error");
             
            } else {
              console.log('Email sent: ' + info.response);
            }
          });


    } 
    catch (err) {
        return res.status(402).json({msg: err.message})
    }


})

app.use(express.static("Donation-master/build"));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'Donation-master','build','index.html'))
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});