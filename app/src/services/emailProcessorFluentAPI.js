class EmailProcessorFluentAPI {
    #content
    constructor(content){
        this.#content = content
    }
    getEmails(){
        let emails = []
        for (const contact of this.#content ) {
            emails.push(contact['identity-profiles'][0].identities[0].value)
        }
        this.#content = emails
        return this
    }

    getDomainEmail(){
        let domains = []
        for(const email of this.#content){
            domains.push(email.split('@')[1])
        }

        this.#content = domains
        return this
    }

    countEmail(){
        const domains = this.#content.reduce(( object , item ) => {  
            if ( !object[item] ) {
               object[item] = 1
            } else {
               object[item]++
            }
            return object; 
          },{})  

        this.#content = domains
        return this
    }

    build() {
        return this.#content
    }
}

module.exports = EmailProcessorFluentAPI