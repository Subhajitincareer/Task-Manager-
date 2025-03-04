import express from 'express';
import { signUp, Loging , Logout , profile } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const Router= express.Router();

Router.post("/signUp", signUp)

Router.post("/login", Loging)

Router.post("/logout", Logout)

Router.get("/profile", authenticate, profile)

export {Router} ;