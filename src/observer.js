// function* gen() {
//     console.log("started!");
//     console.log(`1. ${yield}`);
//     console.log(`2. ${yield}`);
//     console.log(`3. ${yield}`);
// }

// const genObj = gen();
// genObj.next();
// genObj.next(1);
// genObj.next(2);

class Store {
    count = 1;
    subscribers = [];

    changeCount(value) {
        this.count = value;
        this.subscribers.forEach((each) => each(value));
    }
    increment() {
        this.changeCount(this.count + 1);
    }
    subscribe(callback) {
        this.subscribers.push(callback);
    }
}

export const store = new Store()
