const EmailProcessorFluentAPI = require("./emailProcessorFluentAPI");

class EmailProcessorFacade {
    #emailProcessorFluentAPI
    constructor(list){
        this.#emailProcessorFluentAPI = new EmailProcessorFluentAPI(list)
    }

    getListEmail(){
        return this.#emailProcessorFluentAPI
                    .getEmails()
                    .getDomainEmail()
                    .countEmail()
                    .build()
    }
}

module.exports = EmailProcessorFacade