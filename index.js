//Exercise 1


let numbers = [1, 2, 3, 4, 5, 6, 7];
 let fromatob= numbers.filter(between => between >=3 && between<=5 )
//  this for filtring the even and the odd numbers using filter method
//  let evenNums = numbers.filter(isEven => isEven % 2===0) ;
//  let oddNums = numbers.filter(isOdd => isOdd % 2 !== 0);
  console.log(fromatob);
 //console.log(evenNums);//if you want to print the even numbers
//  console.log(oddNums); //if you want to print the odd numbers



//Exercise 2

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 }; 
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

console.log(names); 


//Exercise 3

function getAverageAge(users) {
    
    if (users.length === 0) {
      return 0;
    }
  
    let ageSum = users.reduce((sum, user) => sum + user.age, 0);
  
    let averageAge = ageSum / users.length;
  
    return averageAge;
  }
  
 
  let islam = { name: "islam", age: 25 };
  let same = { name: "same", age: 30 };
  let aboud = { name: "aboud", age: 29 };
  
  let arr = [islam, same, aboud];
  
  console.log(getAverageAge(arr)); 
  

