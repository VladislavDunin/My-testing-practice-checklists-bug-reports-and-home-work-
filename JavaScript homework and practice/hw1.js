let item_1;
item_1=5;
console.log(item_1);

let item_2;
item_2=3;
console.log(item_2);

let item_3;
item_3=item_1 + item_2;
console.log(item_3);

let item_4;
item_4 = "Yolochka";
    console.log(item_4);

    console.log(item_3 + item_4); 

    console.log( item_3 * item_4 );

let item_5;
item_5 = item_3;

let item_6;
item_6 =15; 

let item_6_type ;
item_6_type = Number(item_6);


console.log(typeof item_6 + "--item_6 ==" + item_6);
console.log(typeof item_6_type +"--item_6_type ==" + item_6_type);

let item_7;
item_6 = String(15);
item_7 = String (item_6);
console.log (typeof item_6);

let item_7_type;
item_7_type = String(item_7);
console.log(typeof item_7);

console.log(typeof item_7 +"--item_7==" + item_7); 
console.log(typeof item_7_type +"--item_7_type==" + item_7_type);

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;


if (age_1 < age_2) {
    console.log("You don`t have access cause your age is "  + age_1 + " it's less then");
}
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log ("Welcome!");
}
else if (age_1 > age_3) {
    console.log ("Keep calm and look Culture channel");
}else{
    console.log("Technical work");
}

hw*

1.

const checkAge_1 = function (age) {

if ( age < age_2) {
    console.log("You don`t have access cause your age is "  + age + " it's less then " + age_2);
}
    else if (age >= age_2 && age < age_3) {
    console.log ("Welcome!");
}
    else if (age > age_3) {
    console.log ("Keep calm and look Culture channel");
}else{
    console.log("Technical work");
}
}
checkAge_1(17);


const checkAge_2 = function (age) {

    if(typeof age == "number"){

    if ( age < age_2) {
        console.log("You don`t have access cause your age is "  + age + " it's less then " + age_2);
        }
        else if (age >= age_2 && age < age_3) {
        console.log ("Welcome!");
         }
        else if (age > age_3) {
        console.log ("Keep calm and look Culture channel");
        }else{
        console.log("Technical work");
        }
    }else{console.log("Not integer value")}
}
    checkAge_1(17);
    checkAge_2('asd');
   

const checkAge_3 = function (age) {

    age = Number(age)
    console.log(age)

    if(typeof age == "number"){

    if ( age < age_2) {
        console.log("You don`t have access cause your age is "  + age + " it's less then " + age_2);
        }
        else if (age >= age_2 && age < age_3) {
        console.log ("Welcome!");
         }
        else if (age > age_3) {
        console.log ("Keep calm and look Culture channel");
        }else{
        console.log("Technical work");
        }
    }else{console.log("Not integer value")}
}
    checkAge_1(17);
    checkAge_3('22');

    let agePrompt=prompt('enter age');
    chekAge(agePrompt);

let i = 1;
let result = 1;
while (i < 11){
    result = result *2;
    i++;
}
console.log(result);

const power = function(num){
    let result = 1;
    for (let i = 1 ; i<= num;i++){
        result = result *2;
    }
    return result;
}
console.log(power(10));

let word = ':)';
let result2 = '';
for (let i=1;i<=4;i++){
    result2=word;
    console.log(result2);
}

function printSmile (stroka,numberOfRows){
    let result = '';
    for(let i=1 ;i<=numberOfRows;i++){
        result +=stroka
        console.log(result);
    }
}
printSmile(':(',5);




