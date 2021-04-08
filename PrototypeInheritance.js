var inherit = function(C,P){
	var F = function(){};
	F.prototype = P.prototype;
    const temp = C.prototype;
	C.prototype = new F();
	C.prototype.constructor = C;
    Object.keys(temp).map(prop => C.prototype[prop] = temp[prop])
};

var Animal = function(){
	this.name = "Animal";
};

Animal.prototype.say = function(){
	console.log(this.name);
};

var Person = function(){
	this.name = "person";
};

Person.prototype.noSay = function() {
    console.log(this.name)
}

inherit(Person, Animal);

var person = new Person();
console.log(person);