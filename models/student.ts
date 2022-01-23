export class Student { 
    constructor(id:string, firstName:string, lastName:string, fatherName:string, classEnrolled:string,
        age:string, phoneNumber:string, subject:string, year:string, semester:string, status:string ) {
           id = id;
           firstName = firstName;
            lastName = lastName;
           fatherName = fatherName;
         classEnrolled = classEnrolled;
            age = age;
            phoneNumber = phoneNumber;
            subject = subject;
            year = year;
            semester = semester;
            status = status;
    }
}

module.exports = Student;