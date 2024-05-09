import Express from 'express';
import { deleteAppointment, getAllAppointment, postAppointment, updateAppointmentStatus } from '../controller/appointmentController.js';
import { isAdminAuthanticated, isPatientAuthanticated } from '../middleware/auth.js';


const router = Express.Router();


router.post("/appointmentPost", isPatientAuthanticated, postAppointment);
router.get("/getall", isAdminAuthanticated, getAllAppointment);
router.post("/update/:id", isAdminAuthanticated, updateAppointmentStatus);
router.post("/delete/:id", isAdminAuthanticated, deleteAppointment);









export default router;



