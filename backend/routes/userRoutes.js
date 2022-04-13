import { Router } from "express";
import {
  registerUser,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { authUser } from "../controllers/userControllers.js";
import protect from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

export default router;
