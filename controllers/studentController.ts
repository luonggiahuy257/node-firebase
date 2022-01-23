// import { doc, getDoc } from "firebase/firestore";
import { db } from "../db";

export const firebase = require('../db');
export const Student = require('../models/student');
export const Models = require('../models/requestModel');
export const firestore = firebase.firestore();



// export const addStudent = async (req:any, res:any ) => {
//     try {
//         const data = req.body;
//         await firestore.collection('students').doc().set(data);
//         const datas = new Models ();
//          datas.status= true;
//          datas.description= 'thành công';
//         res.send(datas);
//     } catch (error:any) {
//         res.status(400).send(error.message);
//     }
// }

// export const getAllStudents = async (req:any, res:any   ) => {
//     try {
//         const id = req.params.id;
//         console.log(id);
        
//         const students = await firestore.collection('students');
//         const data = await students.get();
        
//         const docRef = doc(db, "students");
//         const docSnap = await getDoc(docRef);
        
//         const studentsArray:any= [];
//         if(docSnap.exists()) {
//             res.status(404).send('No student record found');
//         }else {
          
//                     // const student = new Student();
                   
//                     const datass = new Models (docSnap.data);
//                     datass.id,
//                     datass.firstName,
//                     // datass.lastName =  docSnap.data().lastName,
//                     // datass.fatherName =  doc.data().fatherName,
//                     // datass.class =  doc.data().class,
//                     // datass.age =   doc.data().age,
//                     // datass.phoneNumber =  doc.data().phoneNumber,
//                     // datass.subject =  doc.data().subject,
//                     // datass.year =  doc.data().year,
//                     // datass.semester =  doc.data().semester,
//                     // datass.status =  doc.data().status
//                     // studentsArray.push(datass);
//                     // console.log(studentsArray);
                    
              

            
//             res.send(studentsArray);
//         }
//     } catch (error:any) {
//         res.status(400).send(error.message);
//     }
// }
export const getAllStudents = async (req:any, res:any   ) => {
    try {
        const id = req.params.id;
        console.log(id);
        
        const students = await firestore.collection('students');
        const data = await students.get();
        const studentsArray:any= [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach( (doc:any) => {
                    // const student = new Student();
                   
                    const datass = new Models ();
                    datass.id=doc.id,
                    datass.firstName=doc.data().firstName,
                    datass.lastName =  doc.data().lastName,
                    datass.fatherName =  doc.data().fatherName,
                    datass.class =  doc.data().class,
                    datass.age =   doc.data().age,
                    datass.phoneNumber =  doc.data().phoneNumber,
                    datass.subject =  doc.data().subject,
                    datass.year =  doc.data().year,
                    datass.semester =  doc.data().semester,
                    datass.status =  doc.data().status
                    studentsArray.push(datass);
                    console.log(studentsArray);
                    studentsArray.push(datass);
                    console.log(studentsArray);
                    
                });

            
            res.send(studentsArray);
        }
    } catch (error:any) {
        res.status(400).send(error.message);
    }
}
// export const getStudent = async (req:any, res:any   ) => {
//     try {
//         const id = req.params.id;
//         const student = await firestore.collection('students').doc(id);
//         const data = await student.get();
//         if(!data.exists) {
//             res.status(404).send('Student with the given ID not found');
//         }else {
//             res.send(data.data());
//         }
//     } catch (error:any) {
//         res.status(400).send(error.message);
//     }
// }

// export const updateStudent = async (req:any, res:any  ) => {
//     try {
//         const id = req.params.id;
//         const data = req.body;
//         const student =  await firestore.collection('students').doc(id);
//         await student.update(data);
//         res.send('Student record updated successfuly');        
//     } catch (error:any ) {
//         res.status(400).send(error.message);
//     }
// }

// export const deleteStudent = async (req:any, res:any ) => {
//     try {
//         const id = req.params.id;
//         await firestore.collection('students').doc(id).delete();
//         res.send('Record deleted successfuly');
//     } catch (error:any) {
//         res.status(400).send(error.message);
//     }
// }

module.exports = {
    // addStudent,
     getAllStudents,
    // getStudent,
    // updateStudent,
    // deleteStudent
}