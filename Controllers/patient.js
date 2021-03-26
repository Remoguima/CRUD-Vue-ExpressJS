//Import functions from patientData
import {getPatients, getPatientById, insertPatient, updatePatientById, deletePatientById, } from "../Patient/patientData.js";

//get ALL Patients
export const showPatients = (req,res) => {
    getPatients((err, results) => {
        if(err){
            res.send(err);
        } else{
            res.json(results);
        }
    });
}

//get SINGLE Patient
export const showPatientById = (req, res) => {
    getPatientById(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Create NEW Patient
export const createPatient = (req,res) => {
    const data = req.body;
    insertPatient(data, (err, results) => {
        if(err){
            res.send(err);
        } else{
            res.json(results);
        }
    });
}

//UPDATE Patient
export const updatePatient = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updatePatientById(data, id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//DELETE patient
export const deletePatient = (req,res) => {
    const id = req.params.id;
    deletePatientById(id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}