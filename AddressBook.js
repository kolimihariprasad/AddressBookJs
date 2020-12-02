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
        return "Name: "+this.firstName+" "+ this.lastName+"\n"+"Mobile NO: "+this.phoneNum+"\n"
                       +"Address: "+ this.city+" "+ this.state+" "+this.zip+"\n"+
                        "Email: "+this.email
    }
}
try {
    let firstAddrss = new AddressBook("Hari", "Prasad", 6301712467, "Mahabubnagar",
                         "Telangana", 509001, "kolimi.hariprasad@gmail.com")
    console.log(firstAddrss.toString())
} catch (e) {
    console.error(e)
}
