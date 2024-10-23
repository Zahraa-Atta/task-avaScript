let students = require("./data.json");

//1- getAllStudents

 let getAllStudents = () => {
  return students;
};
console.log(getAllStudents());

//2-getFirstStudent

let getFirstStudent = () => {
  return students[0];
};
console.log(getFirstStudent());

//3-getLastStudent

let getLastStudent = () => {
  return students[students.length-1];
};
console.log( getLastStudent());

//4-getStudentById

let getStudentById = (id) => {
  return students.find(student => student.id === id);
};
console.log( getStudentById(5));

//5-getStudentsByStage

let getStudentsByStage = (stage) => {
  return students.find(student => student.stage === stage);
};
console.log(getStudentsByStage("Grade 10"));

//6-addStudent

let addStudent = (newStudent) => {

    students.push(newStudent);
    return  students
  
};
    console.log( addStudent( {id:21, name:'Abdullah',  stage:'Grade 11', age :13}));

//7-removeStudentById 

let removeStudentById = (id) => {
   return  students.filter(student => student.id !== id);
};
 console.log( removeStudentById(20));

//8-updateStudentById

let updateStudentById = (id, updatedData) => {
  students = students.map((el) => 
    el.id === id ? { ...el, ...updatedData } : el
  );
};

updateStudentById(7, { name: 'Ali Updated', stage: 'Grade 11', age: 16 });

console.log(students);


//9-getAverageAge

let getAverageAge = () =>
  students.reduce((sum, student) => sum + student.age, 0) / students.length;

console.log(getAverageAge());

//10- getStudentsAboveAge

let getStudentsAboveAge = (age) => {

  return students.filter(student => student.age > age);
};

console.log(getStudentsAboveAge(16)); 


//11- getStudentsBelowAge

let getStudentsBelowAge = (age) => {
    return students.filter(student => student.age < age);

}; 
  console.log(getStudentsBelowAge(15)); 

//12-getStudentByName

let getStudentByName = (name) => {
  return students.find(student => student.name === name);
};
console.log(getStudentByName("Ella Thompson"));

//13-sortStudentsByName

 let sortStudentsByName = () => {
  return students.sort((a, b) => {
    
    return a.name.localeCompare(b.name);
  });
};
console.log(sortStudentsByName());


//14-sortStudentsByAge

let sortStudentsByAge = () => {
  return students.sort((a, b) => {
    
    return a.age - b.age;
  });
};
console.log(sortStudentsByAge());
//15-filterStudentsByAge

let filterStudentsByAge = (age) => {
  return students.filter(student => student.age === age);
};
 console.log(filterStudentsByAge(17));

 //16-filterStudentsByStage

let filterStudentsByStage = (stage) => {
  return students.filter(student => student.stage === stage);
};
console.log( filterStudentsByStage("Grade 12"));

//17- countStudents

let countStudents = () => {
  return students.length;
};
 console.log(countStudents());

//18-countStudentsByStage

let countStudentsByStage = (stage) => {
  return students.filter(student => student.stage > stage.trim()).length ;
 };
    console.log(countStudentsByStage(" Grade 11"));

//19- incrementStudentAgeById

let incrementStudentAgeById = (id) => {
  let student = students.find(student => student.id === id);
  
  if (student) {
    student.age += 1; 
    console.log(`Updated age for ${student.name}: ${student.age}`);
  } else {
    console.log('Student not found');
  }
};
incrementStudentAgeById(10);
console.log(students);

//20-decrementStudentAgeById
  let decrementStudentAgeById  = (id) => {
  let student = students.find(student => student.id === id);
  
  if (student) {
    student.age -= 1; 
    console.log(`Updated age for ${student.name}: ${student.age}`);
  } else {
    console.log('Student not found');
  }
};

decrementStudentAgeById (10);
console.log(students);


//21- getStudentsWithIdGreaterThan
let getStudentsWithIdGreaterThan = (id) => {
     return students.filter(student => student.id > id);
};


console.log(getStudentsWithIdGreaterThan(10));


//22-getStudentsWithIdLessThan
let getStudentsWithIdLessThan = (id) => {
  return students.filter(student => student.id < id);
};


console.log(getStudentsWithIdLessThan(10));

//23-getStudentsInRangeOfIds
let getStudentsInRangeOfIds = (startId, endId) => {
  return students.filter(student => student.id >= startId && student.id <= endId);
};

console.log(getStudentsInRangeOfIds(11, 15));

//24- getTotalAgeOfStudents
let getTotalAgeOfStudents = () => {
  return students.reduce((totalAge, student) => totalAge + student.age, 0);

}
console.log(getTotalAgeOfStudents());
  


//25- getAverageAgeByStage
let getAverageAgeByStage = (stage) => {
  let studentsInStage = students.filter(student => student.stage === stage);

  let totalAge = studentsInStage.reduce((sum, student) => sum + student.age, 0);

  let averageAge = studentsInStage.length > 0 ? totalAge / studentsInStage.length : 0;

  return averageAge;
};

console.log(getAverageAgeByStage('Grade 12')); 

//26-getYoungestStudent
let getYoungestStudent = () => {
   return students.reduce((youngest, student) => {
    return student.age < youngest.age ? student : youngest;
  });
};

console.log(getYoungestStudent()); 


//27-getOldestStudent
let getOldestStudent = () => {
 return students.reduce((oldest, student) => {
    return student.age > oldest.age ? student :oldest;
  });
};
console.log(getOldestStudent()); 


//28-hasStudentWithName
 
let hasStudentWithName = (name) => {
  return students.some(student => student.name === name);
};

console.log(hasStudentWithName('Charlie Wilson')); 
 
//29-getNamesOfAllStudents
let getNamesOfAllStudents = () => {
  return students.map(student => student.name);
};

console.log(getNamesOfAllStudents());


//30- getAllStudentIds
let  getAllStudentIds = () => {
  return students.map(student => student.id);
};

console.log( getAllStudentIds());


//31- getAllStudentStages
let getAllStudentStages = () => {
    return students.map(student => student.stage);

};
console.log( getAllStudentStages());



//32-getStudentsWithNamesStartingWith
let getStudentsWithNamesStartingWith = (letter) => {
  return students.filter(student => student.name.startsWith(letter));
};

console.log(getStudentsWithNamesStartingWith('J'));


//33-getStudentsWithNamesEndingWith
  let getStudentsWithNamesEndingWith = (letter) => {
  return students.filter(student => student.name.endsWith(letter));
};

console.log(getStudentsWithNamesEndingWith('s'));


//34-getStudentsWithNameLengthGreaterThan

let getStudentsWithNameLengthGreaterThan = (length) => {
   return students.filter((student) =>  student.name.length> length)
};

console.log(getStudentsWithNameLengthGreaterThan(12));


//35-getStudentsWithNameLengthLessThan
let getStudentsWithNameLengthLessThan = (length) => {
     return students.filter((student) =>  student.name.length< length)
};
 console.log(getStudentsWithNameLengthLessThan(10));


//36- getAllStudentsSortedById
 let getAllStudentsSortedById = () => {
  return students.sort((a, b) => a.id - b.id);
};

console.log(getAllStudentsSortedById());


//37-reverseStudentList 
let reverseStudentList = () => {
  return students.reverse();         
};

console.log(reverseStudentList());

//38-getRandomStudent
let getRandomStudent = () => {
  let randomIndex = Math.floor(Math.random() * students.length); 
  return students[randomIndex]; 
};

console.log(getRandomStudent());


//39-removeStudentsAboveAge
let removeStudentsAboveAge = (age) => {
  return students.filter(student => student.age <= age);
};
console.log(removeStudentsAboveAge(16));

//40-removeStudentsBelowAge

let removeStudentsBelowAge = (age) => {
  return students.filter(student => student.age >= age);
};

console.log(removeStudentsBelowAge (16));


//41-getStudentsBetweenAges
let getStudentsBetweenAges = (minAge, maxAge) => {
  return students.filter(student => student.age >= minAge && student.age <= maxAge);
};

console.log(getStudentsBetweenAges(15, 16));


//42-countStudentsAboveAge


let countStudentsAboveAge = (age) => {
  return students.filter(student => student.age > age).length;
};

console.log(countStudentsAboveAge(16));


//43-countStudentsBelowAge

let countStudentsBelowAge = (age) => {
  return students.reduce((count, student) => {
    return student.age < age ? count + 1 : count;
  }, 0);
};

console.log(countStudentsBelowAge(17));


//44-addMultipleStudents
let addMultipleStudents = (newStudents) => {
  newStudents.forEach(student => {
    students.push(student);
  });
};

addMultipleStudents([
  { id: 21, name: 'Mir',stge:'Grade 11', age: 23 },
  { id: 22, name: 'Lina',stge:'Grade 11' ,age: 19 }
]);

console.log(students);


//45-removeMultipleStudentsById
let removeMultipleStudentsById = (ids) => {
  return students.filter(student => !ids.includes(student.id));
};

let removedIds = [4, 7];

console.log( removeMultipleStudentsById(removedIds));

//46-updateMultipleStudentsById

let updateMultipleStudentsById = (ids, updatedData) => {
  return students.map(student => {
    if (ids.includes(student.id)) {
      return { ...student, ...updatedData };
    }
    return student; 
  });
};

let updatedIds = [1, 2]; 
let updatedInfo = { age: 16 ,stage:'Grade 11'}; 


console.log(updateMultipleStudentsById(updatedIds, updatedInfo));


//47- isAllStudentsAboveAge

let isAllStudentsAboveAge = (age) => {
  return students.every(student => student.age > age);
};

console.log(isAllStudentsAboveAge(20));


//48- isAllStudentsBelowAge
let isAllStudentsBelowAge = (age) => {
    return students.every(student => student.age < age);
};
console.log(isAllStudentsBelowAge(20));


//49- hasStudentsInStage
let hasStudentsInStage = (stage) => {
  return students.some(student => student.stage === stage);
};
console.log(hasStudentsInStage('Grade 11'));


//50- getStudentNamesWithIds

let getStudentNamesWithIds = (ids) => {
  return students
    .filter(student => ids.includes(student.id))      
    .map(student => student.name);   
};


console.log(getStudentNamesWithIds([6,9]));




