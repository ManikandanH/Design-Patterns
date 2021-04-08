function Subject() {
    this.observers = []
}

Subject.prototype.addObserver = function (...observer) {
    observer.forEach(obs => this.observers.push(obs))
}

Subject.prototype.removeObserver = function (observer) {
    const index = this.observers.indexOf(observer)
    if (index === -1) {
        throw 'No such observer'
    }
    this.observers.splice(index, 1)
}

Subject.prototype.notifyObserver = function (observer) {
    const index = this.observers.indexOf(observer)
    if (index === -1) {
        throw 'No such observer'
    }
    this.observers[index].notify(observer)
}

Subject.prototype.notifyAllObservers = function () {
    this.observers.forEach(obs => obs.notify())
}


function Observer() {
    let counter = 0;
    return {
        notify: () => {
            counter++;
        },
        render: () => {
            console.log(counter)
        }
    }
}

const s1 = new Subject();

const ob1 = Observer()
const ob2 = Observer()
const ob3 = Observer()
const ob4 = Observer()

s1.addObserver(ob1, ob2, ob3, ob4);
ob1.render()
ob2.render()
ob3.render()
ob4.render()

// s1.notifyObserver(ob1);
s1.notifyAllObservers()
ob1.render()
ob2.render()
ob3.render()
ob4.render()