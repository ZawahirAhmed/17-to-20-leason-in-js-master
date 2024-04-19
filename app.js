// Question Number One
 
let emptyArray = []

// Question Number Two

emptyArray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
    
];
console.log(emptyArray)

// Question Number Three

for(i = 1 ; i < 11 ; i++){
    document.write(i + "<br>")
}

//Question Number Four

document.write("<br>")


let num = +prompt("Enter A Table Number");
let range = +prompt("Enter Your Range")
for(i = 1 ; i <= range ; i++ ){
    let result = num * i;
    document.write(`${num} X ${i} = ${result} <br>`)
}


// Question Number 5

document.write("<br>")
let fruits = [`Apple` , `Banana `, ` Orange` , `PineApple`, `Gava` ];

for(i = 0; i < fruits.length ; i++ ){
    document.write( i + ")" + fruits[i] + "<br>")
}


document.write(`Element At Index 0 is ${fruits[0]} <br> `)
document.write(`Element At Index 1 is ${fruits[1]} <br> `)
document.write(`Element At Index 2 is ${fruits[2]} <br> `)
document.write(`Element At Index 3 is ${fruits[3]} <br> `)
document.write(`Element At Index 4 is ${fruits[4]} <br> `)



// Question Number 6

document.write("<br>")

for(i = 1; i < 16 ; i++){
    document.write(i )
}
document.write("<br>")

for(i = 10 ; i >= 1; i--){
    document.write(i )
}

document.write("<br>")


for(i = 0 ; i <= 20; i+=2){
    document.write(i)
}

document.write("<br>")


for(i = 1; i < 20 ; i+=2){
    document.write(i)
}

document.write("<br>")



for(i = 2 ; i <= 20 ; i+=2){
    document.write(i + "k")
}



// Question Number "7"
document.write("<br>")
document.write("<br>")
document.write("<br>")


let items = [`Cake` , `Applepie` , `Chips` , `Cookie` , `Patties`];
let userOrder = prompt("Welcome To zawahir Bakers What do you Want to Order");

let userOrderCorrect = userOrder.slice(0,1).toUpperCase() + userOrder.slice(1).toLowerCase() ;

let match = false;


for(i = 0; i < items.length ; i++ ){
    if(
        userOrderCorrect == items[i]
    )
    {
        document.write(userOrderCorrect + ` Is Available at  Index  ` + items.indexOf(userOrderCorrect) );
        match = true;
        break;

    }
}

if(!match){
    document.write( `We Are Sorry  ` +  userOrderCorrect + ` Is Not Available At Raffay Bakers`);
}






// Question Number 8

let numbers =   [24, 53, 78, 91, 12];
let largestNumber = [0]

for(i = 0 ; i < numbers.length ; i++){

    if( numbers[i] > largestNumber ){
        largestNumber  = numbers[i]

    }
}

console.log(numbers)

console.log(largestNumber)

// Question Number 8  For Smaller Number.....


let forSmallNumber = [24, 53, 78, 91, 12];
let smallNumber =  forSmallNumber[0];

for(i = 1 ;  i < forSmallNumber.length ; i++){
    if( forSmallNumber[i] < smallNumber ){
        smallNumber = forSmallNumber[i]
        
    }
}
console.log(forSmallNumber);
console.log(smallNumber)


// Question Number 10
document.write("<br>")
document.write("<br>")

for(i = 5 ; i <= 100 ; i+=5){
    document.write(i + " " )

}

document.write("<br>")

document.write("<br>")
document.write("Remaining Answer Are Done In Console");