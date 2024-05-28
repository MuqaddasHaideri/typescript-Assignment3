//Assignment 4: Student List Organizer

//The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false). 

type studentType={
    name:string,
    seniorStudent:boolean,
    assignementCompleted:boolean
};

//An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
let students: studentType[] = [
    { name: "Muqaddas",
     seniorStudent: true,
     assignementCompleted: true },
    { name: "Aliza",
     seniorStudent: true,
      assignementCompleted: true },
    { name: "AsfaQasim",
     seniorStudent: true,
      assignementCompleted: true },
      {
        name: "fatima",
     seniorStudent: false,
      assignementCompleted: true
      },
      {
        name: "hania",
     seniorStudent: false,
      assignementCompleted: true
      },

];
//The code (not shown here) has a function that might find students who are seniors 
//and have completed their assignments. 
function findSeniorStudentWithAssignment(students: studentType[]): studentType[] {
    const result: studentType[] = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].seniorStudent && students[i].assignementCompleted) {
            result.push(students[i]);
        }
    }
    return result;

}


//Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible). 
const seniorStudentsWithAssignment = findSeniorStudentWithAssignment(students);

if (seniorStudentsWithAssignment.length > 0) {
    console.log("Students who are senior and completed their assignent are : ");
    for (let i = 0; i < seniorStudentsWithAssignment.length; i++) {
        console.log("Name: "+seniorStudentsWithAssignment[i].name);
    }
} else {
    console.log("No senior students have completed their assignments.");
}
