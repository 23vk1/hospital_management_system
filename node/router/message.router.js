import Express from 'express'
import { getAllMessages, sendMessage } from '../controller/messaage.controller.js';
import { isAdminAuthanticated } from '../middleware/auth.js';

const router = Express.Router();


router.post("/send", sendMessage);
router.get("/getall",isAdminAuthanticated, getAllMessages);



export default router;


