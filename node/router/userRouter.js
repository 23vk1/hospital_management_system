import Express from 'express';
import { patientRegister, login, addNewAdmin,getAllDoctors,getUserDetails,logoutAdmin,logoutPatient, addNewDoctor } from '../controller/user.Controller.js';
import { isAdminAuthanticated, isPatientAuthanticated } from '../middleware/auth.js';

const router = Express.Router();

router.post("/patient/register",patientRegister);
router.post("/login",login);
router.post("/admin/addnew", isAdminAuthanticated, addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthanticated, getUserDetails);
router.get("/patient/me", isPatientAuthanticated, getUserDetails);
router.get("/admin/logout", isAdminAuthanticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthanticated, logoutPatient);
router.post("/doctor/addnew", isAdminAuthanticated, addNewDoctor);



export default router;






