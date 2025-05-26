import express from 'express';
import {
  registerController,loginController,testController,
  forgotPassWordController
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';


// router object : for routing in separate file
const router = express.Router();

// routing

// REGISTER || METHOD : POST
router.post('/register', registerController);

// LOGIN || METHOD : POST
router.post('/login', loginController);

//Forgot password || POST
router.post('/forgot-password',forgotPassWordController);

//test routes 
router.get('/test',requireSignIn, isAdmin, testController)

//protected user routes
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//protected Admin routes
router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
});

export default router;