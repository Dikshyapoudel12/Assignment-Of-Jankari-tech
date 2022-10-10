             //Random Seat pLanning
             
             const students=['Dikshya','Rita','Samikshya','salipa','sushmita'];
const newStudents=[];
while(students.length !=0)
{
    let randomSeatNumber= Math.floor(Math.random()* students.length);
    console.log(randomSeatNumber);
    const studentName = students[randomSeatNumber];
    newStudents.push(studentName);
    students.splice(randomSeatNumber, 1);
}
//console.log(newStudents)
console.log("After Seat planning:")
for(i=0;i<students.length;i++){
    console.log("Seat No" +(i+1) +'' + students[i]);
}
