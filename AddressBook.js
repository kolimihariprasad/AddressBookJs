const prompt = require('prompt-sync')();

class AddressBook {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.phoneNum = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.email = params[6];
    }

    get firstName() { return this._firstName }
    set firstName(firstName) { 
        let fnRegex = RegExp('^[A-Z]{1}[a-z]{2,}$') 
        if(fnRegex.test(firstName)){
            this._firstName = firstName 
        } else throw 'Invalid First Name'
    }

    get lastName() { return this._lastName }
    set lastName(lastName) {  
        let lnRegex = RegExp('^[A-Z]{1}[a-z]{2,}$') 
        if(lnRegex.test(lastName)){
            this._lastName = lastName 
        } else throw 'Invalid Last Name'
    }

    get phoneNum() { return this._phoneNum }
    set phoneNum(phoneNum) { 
        let pnRegex = RegExp('^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$')
        if(pnRegex.test(phoneNum)){
            this._phoneNum = phoneNum
        } else throw 'Invalid Mobile number'
     }

    get city() { return this._city }
    set city(city) { 
        let cRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(cRegex.test(city)){
            this._city = city 
        } else throw 'Invalid City Name'
    }

    get state() { return this._state }
    set state(state) { 
        let sRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(sRegex.test(state)){
            this._state = state
        } else throw 'Invalid State Name' 
    }

    get zip() { return this._zip }
    set zip(zip) { 
        let zRegex = RegExp('^[1-9]{1}[0-9]{2}(\s)?[0-9]{3}$')
        if(zRegex.test(zip)){
            this._zip = zip
        } else throw 'Invalid Zip Code' 
    }

    get email() { return this._email }
    set email(email) { 
        let eRegex =  RegExp('^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{2,3}){1,2}$')
        if(eRegex.test(email)){
            this._email = email 
        } else throw 'Invalid Email Address' 
    }

    toString() {
        return "----------------------------------------------\n"
                +"Name: "+this.firstName+" "+ this.lastName+"\n"+"Mobile NO: "+this.phoneNum+"\n"
                       +"Address: "+ this.city+" "+ this.state+" "+this.zip+"\n"+
                        "Email: "+this.email+
                        "\n----------------------------------------------\n"
    }
}

let addressBook = new Array()

try {
    addressBook.push(new AddressBook("Hari", "Prasad", 6301712467, "Mahabubnagar",
                         "Telangana", 509001, "kolimi.hariprasad@gmail.com"))
    addressBook.push(new AddressBook("Hari", "Prasad", 6301712467, "Mahabubnagar",
                         "Telangana", 509001, "kolimi.hariprasad@gmail.com"))
    addressBook.push(new AddressBook("Deeksha", "Ramesh", 7036114363, "Bangalore",
                         "Karnataka", 560037, "Deeksha.ramesh@gmail.com"))
    addressBook.push(new AddressBook("Deeksha", "Ramesh", 7036114363, "Bangalore",
                         "Karnataka", 560037, "Deeksha.ramesh@gmail.com"))
    while(true) {
        console.log("Enter Your choice")
        console.log("1. Display Address")
        console.log("2. Edit")
        console.log("3. Delete")
        console.log("4. Add New Address")
        console.log("5. Search")
        console.log("9. Exit")
        let choice = prompt('Enter: ')
        switch(choice) {
            case '1':
                console.log("Total Address in List: "+addressBook.length)
                addressBook.forEach(address => console.log(address.toString()));
                break;
            case '2':
                findAddress()
                break;
            case '3':
                deleteAddress()
                break;
            case '4':
                addAddress()
                break;
            case '5':
                searchAddress()
                break;
            default:
                break;
        }
        if(choice == 9){
            break;
        }
    }
} catch (e) {
    console.error(e)
}
function findAddress(){
    let name = prompt("enter the first name to edit: ")
    let index = addressBook.findIndex((address) => address.firstName === name)
    while(true){
        console.log("Enter Your choice to edit")
        console.log("1. First Name")
        console.log("2. Last Name")
        console.log("3. Mobile Number")
        console.log("4. City")
        console.log("5. state")
        console.log("6. Zip Code")
        console.log("7. Email")
        console.log("9. Exit")
        let choice = prompt('Enter: ')
        switch(choice){
            case '1':
                let fvalue = prompt('Enter New Value ')
                addressBook[index].firstName = fvalue;
                break;
            case '2':
                let lvalue = prompt('Enter New Value ')
                addressBook[index].lastName = lvalue;
                break;
            case '3':
                let pvalue = prompt('Enter New Value ')
                addressBook[index].phoneNum = pvalue;
                break;
            case '4':
                let cvalue = prompt('Enter New Value ')
                addressBook[index].city = cvalue;
                break;
            case '5':
                let svalue = prompt('Enter New Value ')
                addressBook[index].state = svalue;
                break;
            case '6':
                let zvalue = prompt('Enter New Value ')
                addressBook[index].zip = zvalue;
                break;
            case '7':
                let evalue = prompt('Enter New Value ')
                addressBook[index].email = evalue;
                break;
            default:    
                break;
        }
        if(choice == 9){
            break;
        }
    }
}
function deleteAddress(){
    let name = prompt("enter the first name to delete: ")
    let index = addressBook.findIndex((address) => address.firstName === name)
    delete addressBook[index]
}

function addAddress(){
    let index = 0
    let name = prompt("enter the first name: ")
    index = addressBook.find((address) => address.firstName === name)
    console.log(index)
    if(index != undefined){
        console.log("Address Aleady Exist")
    } else {
        let lname = prompt("enter the last name: ")
        let mbl = prompt("enter the phone number: ")
        let city = prompt("enter the city: ")
        let state = prompt("enter the state: ")
        let zip = prompt("enter the Zip: ")
        let email = prompt("enter the email: ")
        addressBook.push(new AddressBook(name, lname, mbl, city, state, zip, email))
    }
}
function searchAddress(){
    console.log("1. Search By City")
    console.log("2. Search By State")
    let choice = prompt("enter choice: ")
    if(choice == 1) {
        let city = prompt("enter city: ")
        let persons = addressBook.filter(address => address.city == city)
        persons.forEach(person => console.log(person.toString()))
    }else if (choice == 2) {
        let state = prompt("enter state: ")
        let persons = addressBook.filter(address => address.state == state)
        persons.forEach(person => console.log(person.toString()))
    } else console.log("Wrong Choice")
}