class CommunicationHubspot {

    constructor(hubspot){
        this.hubspot = hubspot
    }
    
    async createContacts(list_contact){
        let rateLimit = 0
        let vidContacts = []    

        for(const contact of list_contact) {
  
            const { vid } = await this.hubspot.contacts.create(contact)
            vidContacts.push(vid)
                
            if(rateLimit === 30) {
                rateLimit = 0
                setTimeout(()=>{}, 1000) 
            }
            rateLimit += 1
        }

        return vidContacts
    }

    async createContactsList() {
        const listName = `bruno_augusto.de_oliveira.${new Date().getTime()}`
        return await this.hubspot.lists.create({ name: listName })
    }

    async addContactsList(list_vids, listID){
        const vids = {
            'vids': list_vids
        }
        return await this.hubspot.lists.addContacts(listID, vids)
    }

    async getContacts(listID){
        let vidOffset = 0
        let listContacts = []
        let condition = true

        while(condition){
            
            const data =  await this.hubspot.lists.getContacts(listID, { vidOffset })
          
            listContacts.push(...data.contacts)
            
            if(vidOffset == data['vid-offset']) {
                condition = false
            }
            
            vidOffset = data['vid-offset']

        }

        return listContacts
    }

    hubspotContactsFormatted(list_contacts){

        let databaseContacts = []

        list_contacts.forEach(contact => {
            databaseContacts.push({
                'properties': [
                    { 'property': 'firstName', 'value': `${contact.name}` },
                    { 'property': 'email', 'value': `${contact.email}` },
                ]
            })
        })

        return databaseContacts

    }
}

module.exports = CommunicationHubspot