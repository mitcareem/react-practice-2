const animalFun = {
    walk: () => console.log("walking..."),
    sleep: () => console.log("sleeping..."),
};

const dogFn = {
    bark: () => console.log("barking..."),
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Lion {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(dogFn, animalFun);
Object.assign(Dog.prototype, dogFn);
Object.assign(Lion.prototype, animalFun);

const tuffy = new Dog("Tuffy");

tuffy.bark()
