class Contact {
    constructor({ first_name, last_name, email, gender}) {
        this.firstName = first_name
        this.lastName = last_name
        this.email = email
        this.gender = gender
    }

    parseToObject(){ 
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            gender: this.gender
        }
    }
}

module.exports = Contact