import userModel from "../models/userModel.js";
import { comparePassword,hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try{
        const { name, email, password, phone, address ,answer} = req.body;

    // validations
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no. is required" });
    }
    if (!address) {
      return res.send({ message: "Address is required" });
    }
     if (!answer) {
      return res.send({ message: "Answer is required" });
    }
    // check user
    const existingUser = await userModel.findOne({ email });
    // check if user already exists
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already registered, please login",
      });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    // save user
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });


    } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
   }
};

// POST LOGIN

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validations
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    // check user
    const user = await userModel.findOne({ email });
    // check if user exists
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    // check password
    const isMatch = await comparePassword(password, user.password);
    // check if password is correct
    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }

    // create token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//forgotPassWordController
export const forgotPassWordController = async(req,res) => {
   try {
      const { email, answer, newPassword } = req.body;
      // validations
      if(!email){
        return res.status(400).send({ message: "Email is required" });
      }
      if(!answer){
        return res.status(400).send({ message: "Answer is required" });
      }
      if(!newPassword){
        return res.status(400).send({ message: "New password is required" });
      }
      // check user
      const user = await userModel.findOne({ email, answer });
      // validation
      if(!user){
        return res.status(404).send({
          success: false,
          message: "Wrong Email or Answer",
        });
      }
      // hash new password
      const hashed = await hashPassword(newPassword);
      // update password
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset successfully",
      });
  }
  catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
// test controller
export const testController = (req, res) => {
  res.send("Protected Route");
};


