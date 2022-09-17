import {Cpp as C++} from "./subjects/Cpp";
import {Java as Java} from "./subjects/Java";
import {React as React} from "./subjects/React";
import {Subject as Subject} from "./subjects/subject";
import {TeacherInterface} from "./subjects/Teacher";

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
	firstName: "Guillaume",
	lastName: "Salva",
	experienceTeachingC: 10,
	    };

console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements(), cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements(), java.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements(), react.getAvailableTeacher());
