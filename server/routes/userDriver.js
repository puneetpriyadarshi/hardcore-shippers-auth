import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/userDriver.js";

router.post("/signin", signin);
router.post("/signup", signup);
export default router;
