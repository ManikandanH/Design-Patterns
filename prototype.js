var personPrototype = {
    sayHi: function () {
        console.log("Hello, my name is " + this.name + ", and I am " + this.age);
    },
    sayBye: function () {
        console.log("Bye Bye!");
    }
};

function Person(name, age) {
    name = name || "John Doe";
    age = age || 26;

    function constructorFunction(name, age) {
        this.name = name;
        this.age = age;
    };

    constructorFunction.prototype = personPrototype;

    var instance = new constructorFunction(name, age);
    return instance;
}

var person1 = Person();
var person2 = Person("Bob", 38);

// prints out Hello, my name is John Doe, and I am 26
person1.sayHi();
// prints out Hello, my name is Bob, and I am 38
person2.sayHi();


// const obn = Object.create(null)
// obn.prototype = {}
// obn.prototype.toString = Object.toString
// console.log(obn)

function create(proto, ...args) {
    const F = function () {
        for (let i = 0; i < args.length; i++) {
            Object.keys(args[i]).map(prop => this[prop] = args[i][prop])
        }
    }
    F.prototype = proto
    return new F()
}

const obj = {
    name: 'mani',
    age: 12
}

const details = {
    college: 'velammal',
    school: 'pallavaram'
}

const obj1 = create(obj, { ...details })
console.log(obj1)