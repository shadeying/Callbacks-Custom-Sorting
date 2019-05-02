var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(objectA ,objectB){
  if(objectA.name > objectB.name){
    return 1;
  }

  if(objectA.name < objectB.name){
    return -1;
  }

  return 0;
});

students.sort(function(objectA, objectB){
  if(objectA.name === objectB.name){
    if(objectA.age > objectB.age){
      return -1;
    }

    if(objectA.age < objectB.age){
      return 1;
    }

    return 0;
  }
});

console.log(students);