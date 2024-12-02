import express from 'express';
import { login, logout, resetPassword, resetPasswordToken, signup ,verifyEmail,checkAuth} from '../Controllers/Controllers.mjs';  // Import functions from Controllers
import { verifyToken } from '../Middleware/verifyToken.mjs';

const router = express.Router();

// Define routes for authentication
router.get("/check-auth",verifyToken,checkAuth);
router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);
router.post("/verifyEmail", verifyEmail);
router.post("/resetPassword", resetPassword);
router.post("/resetPassword/:token", resetPasswordToken );
export default router;  // Export the router
