//first task

const hello = 'hello',
    world = 'world!',
    helloWorld = `${hello} ${world}`;

console.log(helloWorld);

//second task

const multiply = (x, y = 1) => x * y;

console.log(multiply(10, 5));
console.log(multiply(2));

//third task 

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//forth task 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//fifth task 

const array1 = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, , lastName] = array1;

console.log(firstName);
console.log(lastName);