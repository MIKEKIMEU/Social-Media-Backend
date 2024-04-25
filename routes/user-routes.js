import express from 'express';
import { getAllUsers, signup } from '../controllers/user-controller.js';

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.get('/', getAllUsers);
router.post('/signup', signup);
export default router;
