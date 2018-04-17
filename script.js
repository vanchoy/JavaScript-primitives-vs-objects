// Lecture: Primitives vs Objects

// We basically know that only numbers, strings, booleans, undefined, and null are primitives and everything else are objects.
// A big difference between primitives and objects is that variables containing primitives, actually hold that data inside of the variable itself.
// On objects it's very different. Variables associated with objects do not actually contain the object, but instead they contain a reference to the place in memory where the object sits, so where the object is stored.
// So, again, a variable declared as an object does not have a real copy of the object, it just points to that object.

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
// So 'a' is 46 because we changed it from 23 to 46, and 'b' is 23 because we said that 'b' should be equal to 'a'.
// What we did is simply copy the value of 'a' to 'b', and when we then changed 'a' to 46 this did not affect the value of variable 'b', which is still 23. And this means that each pf the variables actually hold their own copy of the data. They do not reference anything.


//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// Both ages are 30.
// When we said that obj1 should be equal to obj2 actually we did not create a new object. No copy was created. All that we did was to create a new reference which points to the obj1, so the obj1 and obj2 variables, both hold a reference that points to the exact same object in the memory. That's why when we change the age in obj1 this change also reflected on obj2, because in fact it's the exact same object.
// With functions it works in the same way.



// What happens when we pass a primitive and an object into a function:
//Functions
var age = 27;
var obj = {
    name: 'Ivan',
    city: 'Aarhus'
};

function change(a, b) {
    a = 23;
    b.city = 'New York';
}

change(age, obj);

console.log(age);       
console.log(obj.city);

// So 27 is the age and this object city, so the city attached to the object variable is New York. So we have the same thing here.
// We pass the age variable holding a primitive and the object variable holding a reference to an object into our function.
// This function then, as it was invoked, attempted to change the arguments that we passed into it. So when we then console.log the values we see the same thing as before, and that is that the primitive has remained unchanged, but the city in the object has changed from Aarhus to New York with this line of code "b.city = 'New York';".
// This shows us that when we pass a primitive into the function a simple copy is created, so we can change 'a' as much as we want, but it will never affect the variable on the outside because it is a primitive. 
// But when we pass the object it's not really the object that we pass, but the reference to the object.
// So, again, we do not pass an object into a function, but only the reference that points to the object. When we then change the object inside of the function it is still reflected outside of the function.
