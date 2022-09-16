import {Cpp as C++} from "./subjects/Cpp";
import {Java as Java} from "./subjects/Java";
import {React as React} from "./subjects/React";
import {Subject as Subject} from "./subjects/subject";

const cpp: Subjects.Cpp = new Subjects.Cpp();
const java: Subjects.Java = new Subjects.Java();
const react: Subjects.React = new Subjects.React();

Subjects.TeacherInterface = {
  'firstName': 'Guillaume',
  'lastName': 'Salva',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

