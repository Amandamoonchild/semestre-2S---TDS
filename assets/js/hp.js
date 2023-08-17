class Witch {
    constructor(name, patron, house, colorEyes) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName() {
        return `O nome do bruxo (a/e) é ${this.name}
        `
    }
    getHouse() {
        return `Ele (a/e) está na casa ${this.house}
        `
    }
    getPatron() {
        return `Seu patrono é ${this.patron}
        `
    }
}

const witch1 = new Witch('Harry Potter', 'Deer', 'Gryffindor', 'Green');
console.log(witch1.getName())

class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, TypeWitch) {
        super(name, patron, house, colorEyes);
        this.TypeWitch = TypeWitch;
    }

    getTypewitch() {
        if (this.TypeWitch == 'P') {
            return "Este bruxo é sangue puro"
        } else if (this.TypeWitch == 'M') {
            return "Este bruxo é mestiço"
        } else {
            return "Este bruxo é trouxa!"
        }
    }
}

const harry = new TypeWitch('Harry Potter', 'Deer', 'Gryffindor', 'Verde/azul?', 'M');
console.log(harry.getTypewitch());

class CamaraSecreta {
    constructor(name, pwd) {
        this.name = name;
        let _pwd = pwd; //atributo privado

        //MÉTODO PRIVADO, SE TEM "_" ANTES E ESTÁ DENTRO DO CONSTRUCTOR
        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd; // retorna true ou false
        };

        //MÉTODO PRIVADO, MAS NÃO NO JS
        this.accesstoChamber = () => {
            let pwdInput = prompt("Type your password:")

            if (this.verifyPwd(pwdInput)) {
                console.log(`Bem vindo a camara secreta ${this.name}`)
            } else {
                console.log(`Acesso negado trouxa!`)
            }
        };
    }

    showName(){
        console.log(`Nome do bruxo: ${this.name}`);
    }

}

const myAccess1 = new CamaraSecreta('Harry Potter', 'senha123')

//MÉTODO PÚBLICO
myAccess1.showName(); // top

myAccess1.name = 'amanda' // funciona pq o atributo é público
myAccess1.pwd = '123' // não funciona, atributo privado

//Método privado
myAccess1.accesstoChamber(); // na toria não era pra funcionar, mas no js funciona
