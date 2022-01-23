const express = require('express');
export const {
    // addStudent, 
    getAllStudents, 
    //    getStudent,
    //    updateStudent,
    //    deleteStudent
      } = require('../controllers/studentController');

export const router = express.Router();

// router.post('/student', addStudent);
 router.get('/students', getAllStudents);
// router.get('/student/:id', getStudent);
// router.put('/student/:id', updateStudent);
// router.delete('/student/:id', deleteStudent);


module.exports = {
    routes: router
}