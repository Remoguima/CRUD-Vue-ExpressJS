//import connection
import db from "../Config/database.js";

//Get all Patients
export const getPatients = (result) => {
    db.query("SELECT NAME, AGE, DIAGNOSIS FROM PATIENTS", (err, results) => {
        if(err) {
            console.log(err);
            result(err,null);
            }   else {
                result(null,results);
            }
    });
}

//Get single patient
export const getPatientById = (id, result) => {
    db.query("SELECT NAME, AGE, DIAGNOSIS FROM PATIENTS WHERE id = ?", [id], (err,results) => {
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results[0]);
        }
    });
}

//Insert patient to Database
export const insertPatient = (data, result) => {
    db.query("INSERT INTO PATIENTS SET ?" , [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update product to Database
export const updatePatientById = (data, id, result) => {
    db.query("UPDATE PATIENT SET NAME = ?, AGE = ? DIAGNOSIS = ? WHERE ID = ?", [data.name, data.age, data.diagnosis], (err, results) =>{
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results);
        }
    });
}

//Delete patient to Database
export const deletePatientById = (id, result) => {
    db.query("DELETE FROM PATIENTS WHERE ID = ?" , [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}