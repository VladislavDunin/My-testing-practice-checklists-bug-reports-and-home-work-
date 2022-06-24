for (let i = 10 ; i <= 20 ; i++){
    if (i % 2== 0)
        continue;
    console.log(i);
}

function test1() {
    const x = 5 ;
    const y = 10;
    console.log(x + y);
}

function hello() {
    test1();
    console.log('hello');
}


function testfunction (){
    function test2(){
        console.log("test2");
    }
    test2();
    console.log("testfunction")
}

testfunction();

function unixTime(){
    let time = Math.floor(new Date().getTime());
    console.log(time);
}
unixTime();

function randomInt(){
    const min = 100;
    const max = 200;
    let rand = Math.floor (min + Math.random()* (max + 1 - min ));
    console.log(rand);

}

randomInt();
randomInt();
randomInt();

function randomInt(){
    console.log('random int 555');
}
randomInt();    
randomInt();   

let max = 300;
let min = 350;
function rand(){
    
    let rand = Math.floor (min + Math.random()* (max + 1 - min ));
    console.log(rand);
}
rand();

min = 5;
max = 15;
rand();

let c = 9;
function count (){
    
    c ++;
    console.log(c);
}
count ();
count ();
count ();
count ();
count ();

document.querySelector('.out-1').addEventListener('mousemove', count);

function name1(){
    let name = "andrey";
    let name2 = "leha";
    if (name == name2){
        console.log('Ok');
    }else{
        console.log(name2);
    }
}

name1();


function x1 (){
        let x = 18;
        let y = 17;
        let x1 = 21;
        let y1 = 55;

        if (y < x){
            console.log("Sorry");
        }
        else if (y >= x){
            console.log("hello");
        }
        else if (x1 < x){
            console.log("not");
        }
        else if (y1 > x){
            console.log("Wtf my grandpa");
        }else{
            console.log("ok");
        }

    console.log("Hello friends");
}

 x1();


 
