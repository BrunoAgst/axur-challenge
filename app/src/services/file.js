const { readFile } = require('fs/promises')
const Contact = require('../entities/contact')

class File {

    static async parseCSVToJSON(path) {
        const getContent = (await readFile(path)).toString('utf8')
        const lines = getContent.split('\n')
        const firstLine = lines.shift()
        const header = firstLine.split(',')
        const contacts = lines.map(data => {
            const columns = data.split(',')
            let contact = {}
            for (const index in columns) {
                contact[header[index]] = columns[index]   
            }

            return new Contact(contact).parseToObject()
        })
        
        contacts.pop()
        return contacts
    }

    static parseJSONToHubSpot(contacts) {
        let database = []
        for (const contact in contacts) {
            database.push({
                name: `${contacts[contact].firstName}.${contacts[contact].lastName}.${new Date().getTime()}`,
                email: `${contacts[contact].email}`,
                gender: `${contacts[contact].gender}`
            })
        }
        return database
    }
}

module.exports = File