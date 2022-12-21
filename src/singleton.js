let instance = null;

class Once {
    constructor() {
        if (!instance) {
            console.log("object created !");
            instance = this;
        }
        return instance;
    }
}

const one = new Once();
// console.log(one)
const two = new Once();
// console.log(two)
