/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding



                // Principle 2

                // code example for Implicit Binding

let isaias = {
  age:27,
  color: 'black',
  car: 'jetta🚗',
  hobby: 'sleeep😴',
  movie: 'inception🎬',
  activity: function() {
        console.log(`I am${this.age}years old and I own a blue ${this.car}. I looove to ${this.hobby} and my fav movie is ${this.movie}`)
  }
}
//     isaias.activity();


                // Principle 3

                // code example for New Binding

function Ghost(says) {
    this.thing = says;
}

let myGhost = new Ghost('friendly fantasmita 👻');

// console.log(myGhost.thing);


/*
  1. Create a fucntion called 'Food' and pass in a parameter of (favorite)
  2.  Assign 'this.food' to = 'favorite'
  3. Create a new function 'myFavoriteFood' that passes in our favorite food 'pasta ogli olio 🍝'
*/
function food(favorite) {
  this.food = favorite; 
}

let myFavoriteFood = new food('pasta ogli olio 🍝');

// console.log(`My favorite food is, ${myFavoriteFood.food}`)



                // Principle 4

                // code example for Explicit Binding

const miFantasmita = {
    nombre: 'Ernestito',
    boo: "booooo👻",
    isaias: "ernestito!!!!"
}

function fantasmita() {
    console.log(`${this.nombre} dijo, ${this.boo} Isaias dijo ${this.isaias}`);
}

// fantasmita.call(miFantasmita);


let user = [{
    name: 'isaias',
    location: 'San Diego',
    email: 'isaias@gmail.com',
    blogs: ['paramo45 photography', 'modern JS'],
    logBlogs() {
       this.blogs
    }
}];

// user.forEach(blogInfo => {
// //     console.log(blogInfo)
// });

 


