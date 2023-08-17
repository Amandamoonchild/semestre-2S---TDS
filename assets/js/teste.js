let personSimple = "John Doe";

const personObject = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}
personObject.age = 10;
personObject.nacionality = "brasileiro"


console.log(personSimple);
console.log(personObject);

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(` Olá, meu nome é ${this.name} e tenho ${this.age} anos.
        `)
    }
}

const user1 = new User('João', 30);
user1.introduce();

class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription() {
        return `A delicius pizza with ${this.base} base, ${this.sauce}, ${this.toppings} toppings, and lots of ${this.cheese} cheese.
        `;
    }

    getTimerBase() {
        if (this.base == 'traditional') {
            return 10;
        } else if (this.base == 'integral') {
            return 15;
        } else {
            return 'this base does not exist!';
        }
    }
    getTimerSauce() {
        if (this.sauce == 'tomato') {
            return 10;
        } else if (this.sauce == 'pesto') {
            return 15;
        } else {
            return 'this sauce does not exist!';
        }
    }
    getTimerToppings() {
        if (this.toppings == 'calabresa') {
            return 10 ;
        } else if (this.toppings == 'pepperoni') {
            return 15 ;
        } else {
            return 'this topping does not exist!';
        }
    }
    getTimerCheese() {
        if (this.cheese == 'mozzarella') {
            return 10;
        } else if (this.cheese == 'cheddar') {
            return 15;
        } else {
            return 'this cheese does not exist!';
        }
    }
    getPriceBase() {
        if (this.base == 'traditional') {
            return 8;
        } else if (this.base == 'integral') {
            return 12;
        } else {
            return 'this base does not exist!';
        }
    }
    getPriceSauce() {
        if (this.sauce == 'tomato') {
            return 4;
        } else if (this.sauce == 'pesto') {
            return 7;
        } else {
            return 'this sauce does not exist!';
        }
    }
    getPriceToppings() {
        if (this.toppings == 'calabresa') {
            return 5 ;
        } else if (this.toppings == 'pepperoni') {
            return 9 ;
        } else {
            return 'this topping does not exist!';
        }
    }
    getPriceCheese() {
        if (this.cheese == 'mozzarella') {
            return 8;
        } else if (this.cheese == 'cheddar') {
            return 14;
        } else {
            return 'this cheese does not exist!';
        }
    }

}

const myPizza = new Pizza(`integral`, `tomato`, `pepperoni`, `mozzarella`);
let timeTotalPizza = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerToppings() + myPizza.getTimerCheese()
let priceTotalPizza = myPizza.getPriceBase() + myPizza.getPriceSauce() + myPizza.getPriceToppings() + myPizza.getPriceCheese()
console.log(myPizza.getDescription());
console.log('cooking time: ' + timeTotalPizza);
console.log('price: ' + priceTotalPizza);




