import express from "express";
const router = express.Router();

import { signinClient, signupClient } from "../controllers/userClient.js";

router.post("/signin", signinClient);
router.post("/signup", signupClient);
export default router;
