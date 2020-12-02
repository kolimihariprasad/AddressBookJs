class AddressBook {
    firstName;
    lastName;
    phoneNum;
    city;
    state;
    zip;
    email;

    constructor(...props) {
        this.firstName = props[0];
        this.lastName = props[1];
        this.phoneNum = props[2];
        this.city = props[3];
        this.state = props[4];
        this.zip = props[5];
        this.email = props[6];
    }

    get firstName() { return this.firstName }
    set firstName(firstName) { return this.firstName = firstName }

    get lastName() { return this.lastName }
    set lastName(lastName) { return this.lastName = lastName }

    get phoneNum() { return this.phoneNum }
    set phoneNum(phoneNum) { return this.phoneNum = phoneNum }

    get city() { return this.city }
    set city(city) { return this.city = city }

    get state() { return this.state }
    set state(state) { return this.state = state }

    get zip() { return this.zip }
    set zip(zip) { return this.zip = zip }

    get email() { return this.email }
    set email(email) { return this.email = email }

    toString() {
        return "Name: "+this.firstName+" "+ this.lastName+"\n"+"Mobile NO: "+this.phoneNum+"\n"
                        +"Address: "+ this.city+" "+ this.state+" "+this.zip+"\n"+
                        "Email: "+this.email
    }
}

let firstAddrss = new AddressBook("Hari", "Prasad", 6301712467, "MBNR",
                     "Telangana", 509001, "kolimi.hariprasad@gmail.com")
console.log(firstAddrss.toString())