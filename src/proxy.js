let isAdmin = false;

const person = {
    id: 1,
    name: "Jane",
    age: 22,
    balance: 100,
};

const personProxy = new Proxy(person, {
    set: (obj, prop, value) => {
        if (prop === "name") {
            obj[prop] = value;
        } else {
            throw new Error("You can only change name property");
        }
    },
    get: (obj, prop) => {
        if (prop === "balance") {
            if (isAdmin) return obj[prop];
            return null;
        }
        return obj[prop];
    },
});

console.log(personProxy.balance)
