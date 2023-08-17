// // const companies = ["Apple", "Google", "Facebook", "ZApZap"];

// // companies.forEach(company =>{
// //     console.log(`Hey,${company}!`);
// // });

// const names = ["Whinds", "Freeway", "Teste", "Maria", ];

// names.forEach((name)=>{
// //     console.log(`Hi, ${name}!`);
// // });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((number, index) => {
//     if (number % 2 == 0) {
//         console.log(`O ${number} está na posição ${index}`)
//     }
// });
class Car {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class CarList {
    constructor() {
        this.cars = [];
    }
    addCar(car) {
        this.cars.push(car)
    }
}

const carList = new CarList()
function wish() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo1").value;
    
    const car = new Car(marca, modelo);
    
    carList.addCar(car);

    carList.cars.forEach((car) => {
        console.log(`Marca: ${car.marca} - Modelo  ${car.modelo}`)
    })
}




