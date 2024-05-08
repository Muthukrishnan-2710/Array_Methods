// Writing a class person.

class person{
    constructor (firstName , lastName , age, phoneNumber){
        this.firstName =firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber =phoneNumber;
    }

    getfullname(){
        return `${this.firstName} ${this.lastName}`
    }
    getage(){
        return `${this.age}`
    }
    getphoneNumber(){
        return `${this.phoneNumber}`
    }

    displaydetails(){
        console.log(`Name: ${this.getfullname()}`)
        console.log(`Age: ${this.getage()}`);
        console.log(`PhoneNumber: ${this.getphoneNumber()}`)
    }
}

const details = new person ("Muthu" , "Krishnan",26, 9710490771);

details.displaydetails()

// Writing a class with car;

class car{
    constructor(model , fueltype, lanchingyear ){
        this.model = model;
        this.fueltype =fueltype;
        this.lanchingyear = lanchingyear;
    }

    getcarmodel(){
        return `${this.model}`
    }
    getfueltype(){
        return `${this.fueltype}`
    }
    getlanchingyear(){
        return `${this.lanchingyear}`
    }
    combinedata(){
        console.log(`Name of the Car: ${this.model}`);
        console.log(`FuelType: ${this.fueltype}`);
        console.log(`Lanuching year: ${this.lanchingyear}`);
    }
}

const data = new car ("Honda", "Disel", 2018);
data.combinedata();
