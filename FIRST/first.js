/*let marks = prompt("Enter your Marks: ");
let grade;

if (marks>=80 && marks<=100) {
    grade= "A";
} else if (marks>=70 && marks<=79) {
    grade = "B";
} else if (marks>=60 && marks<=69) {
    grade = "C";
} else if (marks>=50 && marks<=59) {
    grade = "D";
} else if (marks>=0 && marks<=49) {
    grade = "F";
}

console.log("Your Grade is: ", grade);



let sentence = "Physics Wallah rocks, Apna College Sucks";
let i;
for (i=1; i<=5; i++) {
    console.log(sentence);
}

let n= prompt("Enter n: ");
let sum=0;
for(let i=1;i<=n;i++) {
    sum=sum+i;
}
console.log(sum);


let str= "Durimon";
for(let i of str) {
    console.log(i);
}



 let afaan = {
    age : 20,
    recidency : "Kolkata",
    isTopper : true
 };

 for(i in afaan){
    console.log("key is:", i ," ", "Value is:", afaan[i]);
 }


for(let i=0;i<=100;i++) {
    if(i%2==0) {
        console.log(i);
    }
}


// Number guessing game
let num = 69;
let userInput = prompt("Guess the number-->");

while(userInput != num) {
    userInput = prompt("Incorrect Guess :/  Try again");
}
console.log("Correct Guess!!");



str = "Physics Wallah";
for(let i=0;i<str.length;i++) {
    console.log(str[i]);
}


let obj = {
    Name : "Joydeep",
    price : 60,
};

let kimat = `The price of ${obj.Name} is ${obj.price}₹`;
console.log(kimat);


let sachai = "Tu mujhse\tdur reh";
console.log(sachai);


let str = "Md Afaan";
for(let i=0;i<str.length;i++) {
    if(str.charAt(i)==" ") {
        let gotcha = str[i+1];
        console.log("First letter after space is: ",gotcha);
    }
}




let naam = prompt("Enter your name and get a cool suggested Username");
let usernaam = naam.concat(naam.length);
console.log(`Sorry ${naam} is already taken, please try: @${usernaam}`);



let x = ["Annebelle","Conjuring","Nun"];
for(i in x) {
    console.log(x[i]);
}




let arr = [85,97,44,37,76,60];
let sum = 0;
let avg;
for(i in arr) {
    sum+=arr[i]; 
}
avg = sum/6;
console.log("The average is : ", avg);



let arr = [250,645,300,900,50];
for(let i=0;i<arr.length;i++) {
    let discount = arr[i]/10;
    arr[i]-=discount;
    console.log(`discounted prices are ${arr[i]}`);
}




let arr = ["Animal","Bird","Mammal","Joydeep","Alapan"];
arr.splice(2,0,"Abhirup");




//Microsoft,Ola,Google,IBM,Netflix,Amazon
let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//arr.shift();
arr.splice(2,1,"Ola");
//arr.push("Amazon");




function main(x,y) {
    console.log(`Sum is ${x+y}`);
    console.log(`Difference is ${x-y}`);
    console.log(`Product is ${x*y}`);
}
main(6,3);


const Sum = (x,y) =>{
    console.log(x+y);
}





const countVowel = (word) =>{
    let count=0;
    for(const i of word) {
        let k = i;
        if(k==="A"||k==="E"||k==="I"||k==="O"||k==="U"||k==="a"||k==="e"||k==="i"||k==="o"||k==="u") {
            count++;
        }
    }
    return count;
}




arr = [1,2,3,4,5];

arr.forEach((val) => {
    console.log(val);
});




arr = [1,2,3,4,5];
arr.forEach((val) =>{
    console.log(val**2);
});



arr = [1,2,3,4,5];
arr.map((val) => {
    console.log(val**3);
});



arr = [1,2,3,4,5];
let newArray = arr.map((val) => {
    return val;
});
console.log(arr);
console.log(newArray);



arr = [1,2,3,4,5,6,7,8,9,10];
let newArr = arr.filter((val) => {
   return val%3==0;
});



arr = [1,2,3,4];
let newArr = arr.reduce((prev,curr) => {
   return prev+curr;
});




marks = [30,60,90,120,180,240,0];
let arr = marks.filter((val) => {
    return val>90;
});*/




let num = prompt("For array that starts from 1, enter an end point : ");
let arr= [];
for(let i=1;i<=num;i++) {
     arr[i-1] = i;
}
console.log(`Array is : ${arr}`);

let newArr = arr.reduce((prev,curr) => {
    return prev+curr;
});
console.log(`Sum of array elements is : ${newArr}`);

let NewKaNewArr = arr.reduce((prev,curr) => {
    return prev*curr;
});
console.log(`Product of array elements is : ${NewKaNewArr}`);