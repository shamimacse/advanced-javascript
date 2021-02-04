const student =[
    {id: 32, name: 'shema'},
    {id: 40, name: 'tumpa'},
    {id: 50, name: 'rumpa'},
    {id: 61, name: 'shamima'},

]
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 39);
const biggerOne = student.find(s => s.id > 39);


console.log(biggerOne);