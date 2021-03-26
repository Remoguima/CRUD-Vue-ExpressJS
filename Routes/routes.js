//import express
import express from "express";

//import function from controller
import {showPatients, showPatientById, createPatient, updatePatient, deletePatient} from "../Controllers/patient.js";

//init express router
const router = express.Router();

//get ALL Patients
router.get('/patients', showPatients);

//Get SINGLE Patient
router.get('/products/:id', showPatientById)

//Create NEW patient
router.post('/products', createPatient);

//UPDATE Patient
router.put('/products/:id', updatePatient);

//DELETE Patient
router.delete('/products/:id', deletePatient);

//export default router
export default router;