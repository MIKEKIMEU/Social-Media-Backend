import express from 'express';
import { getAllUsers } from '../controllers/user-controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post("/signup", (req, res, next) =>{

})

export default router;
