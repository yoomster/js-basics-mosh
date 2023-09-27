function createCircle (radius) {
    return { 
    radius,
    draw () {
        console.log("Im drawing");
    }
};
}

const circle = createCircle(15);

console.log(circle);

function MakeCircle (radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("look, m draawing");
    }
}

const rondje = new MakeCircle(2);
console.log(rondje);

rondje.color = "red";
rondje.innerColor= "Yellow";


let a = 10;
let b = a;

a = 40;

const circle1 = {
    radius: 1,
    draw() {
        console.log("mjeeew");
    }
};

for (const key in circle1) {
    console.log(key, circle1[key]); 
}

// const anotherCircle = Object.assign({}, circle1);

const anotherCircle = {color : "red", ...circle1};
console.log(anotherCircle);

//---------------------------------------

function address (street, city, zipCode) {
    return {
       street: street,
       city: city,
       zipCode: zipCode,
    };
    }
   
    function showAddress(address) { 
       for (const key in address) 
           console.log(key, address[key]);
       }
   
   
    let street = "frits";
    let city = "Ehv";
    let zipCode = 5616;
   
    const myAddress = address(street, city, zipCode);
   
    showAddress(myAddress);
   //--------------------------------------

   //factory function
   function address (s, c, z) {
    return { 
    s,
    c,
    z
    };
 }
 
 let miAddress = address("a", "b", "z");
 
 console.log(miAddress);
 
 
//-----------------------------------------
//create blog post object with properties:
//use the object literal syntax for create and initialize
// use fake values

const blogpost = {
    title : "InstaBook",
    body: `BLOG POST:
    Hey all, I'm happy you're here to read about nothing.
    miauw miauw miauw maw...
    have a good one =)!`,
    author: "me",
    vieuws: 5,
    comments : [{
       author: "Jo",
       body:`bla, bla`
    }],
    isLive: true
 }
 
 console.log(blogpost);

 //-------------------------------------
 function Post (title, body, author){
    this.title = title;
    this.body =body;
    this.author = author;
    this.views = 0;
    this.comments = [];
 }
 
 let post = new Post('Hello World', `blabla: miauw`, 'me' );
 
 console.log(post);



//------------------------------
function showStars (rows){

    for (let row = 1; row <= rows; row++) {
       let pattern = '';
       for(let i = 0; i < row; i++)
       pattern += '*';
        console.log(pattern);
       };
        
    };

showStars(10);
//------------------------------
