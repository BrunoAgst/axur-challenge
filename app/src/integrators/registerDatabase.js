const path = require('path')
const Hubspot = require('hubspot')
const File = require('../services/file')
const CommunicationHubspot = require('./hubspot')
const apiKey = process.env.API_KEY


module.exports = async () => {
    try {
        const database = path.join(__dirname, '../database/contatos.csv')
        const transformData = await File.parseCSVToJSON(database)
        const data = File.parseJSONToHubSpot(transformData)
           
        const hubspot = new Hubspot({
            apiKey,
            limiter: {
                maxConcurrent: 30,
                minTime: 1000 / 9
            }
        })

        const communicationHubspot = new CommunicationHubspot(hubspot)
        const { name, listId } = await communicationHubspot.createContactsList()
        console.log(`list id ${listId} and name ${name} created`)
        console.log('adding contacts to list...')
        const objectContacts = communicationHubspot.hubspotContactsFormatted(data)
        const listVidContacts = await communicationHubspot.createContacts(objectContacts)
        await communicationHubspot.addContactsList(listVidContacts, listId)
        console.log('contacts added successfully')
        return listId
             

    } catch ({ error }) {
        console.log(error)
    }
}
