import { Router } from 'express';
import PromptController from '../controllers/prompt.controller.js';

const router = Router();

router.post('/prompt', PromptController.sendText);

export default router;