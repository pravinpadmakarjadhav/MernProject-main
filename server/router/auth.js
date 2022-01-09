const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require ("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

//using promises

// router.post('/register', (req, res) => {

//     const {name,email,phone,work,password,cpassword} = req.body;
//    if(!name || !email || !phone || !work || !password || !cpassword){
//        return res.status(422).json({ error: 'filled the field'});
//    }

//    User.findOne({email:email})
//    .then((userExist)=>{
//        if (userExist){
//            return res.status(422).json({error:"Email already exist"});
//        }

//        const user =new User({name,email,phone,work,password,cpassword});

//        user.save().then(()=>{
//            res.status(201).json({message:"user registerd successfully"})
//        }).catch((err)=>res.status(500).json({ error:"failed to register"}));
//    }).catch(err=>{console.log(err);})
// });


router.post('/register', async (req, res) => {

    const {name,email,phone,work,password,cpassword} = req.body;
   if(!name || !email || !phone || !work || !password || !cpassword){
       return res.status(422).json({ error: 'filled the field properly'});
   }  
   try{
       
    const userExist = await User.findOne({email:email})

    if (userExist){
        return res.status(422).json({error:"Email already exist"});

    }else if (password !== cpassword){
        return res.status(422).json({error:" password is not matching"});
    }else{
        const user =new User({name,email,phone,work,password,cpassword});

        await user.save();
       res.status(201).json({message:"user registerd successfully"});
    }
  


   }catch(err){
       console.log(err);

   }

  
});

//login route code

router.post ('/signin', async (req, res) =>{
 
   try{
  const {email,password } = req.body;
  if (!email || !password){
  return res.status(400).json({error:"please filled the data"})
  }

const userLogin= await User.findOne({email:email});
console.log(userLogin);

if (!userLogin){
    res.status(400).json({error:"user error"});
}else{
    res.json({message:"user logged in successfully"});
}


   }catch(err){
console.log(err);

   }
})




module.exports = router;


