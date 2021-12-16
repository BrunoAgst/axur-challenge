const { describe, test, expect } = require('@jest/globals')
const CommunicationHubspot = require('../../src/integrators/hubspot')


describe('#CommunicationHubspot', () => {

    test('should createContacts return vidContacts', async () => {

        const hubspot = {
            contacts: {
                create: () => {
                    return { vid: 32601 }
                }
            }
        }

        const list = ['item1']
        const communicationHubspot = new CommunicationHubspot(hubspot)
        const result = await communicationHubspot.createContacts(list)

        expect(result).toEqual([32601])
    })

    test('should hubspotContacts return list_contact formatted', () => {
        
        const list = [
            {
                name: 'Bruno',
                email: 'bruno@teste.com'
            },
            {
                name: 'Ana',
                email: 'ana@teste.com'
            }

        ]

        const communicationHubspot = new CommunicationHubspot()
        const result = communicationHubspot.hubspotContactsFormatted(list)

        const expected = [
            
                {
                    properties: [
                      { property: 'firstName', value: 'Bruno' },
                      { property: 'email', value: 'bruno@teste.com' }
                    ]
                },
                {
                    properties: [
                      { property: 'firstName', value: 'Ana' },
                      { property: 'email', value: 'ana@teste.com' }
                    ]
                }
            
        ]

        expect(result).toEqual(expected)
    })

    test('should getContacts request to hubspot and return contacts', async () => {

        const hubspot = {
            lists: {
                getContacts: () => {
                    return {
                        'vid-offset': 0,
                        contacts: [
                            {
                                fisrtName: 'Bruno',
                                lastName: 'Oliveira',
                                email: 'bruno@teste.com'
                            }
                        ]
                    }
                }
            }
        }

        const communicationHubspot = new CommunicationHubspot(hubspot)
        const result = await communicationHubspot.getContacts(hubspot)
        
        const expected = [
            {
              fisrtName: 'Bruno',
              lastName: 'Oliveira',
              email: 'bruno@teste.com'
            }
        ]

        expect(result).toEqual(expected)
    })

    test('should createContactsList create list contact and return id and name', async () => {
        const hubspot = {
            lists: {
                create: () => {
                    return {
                        listId: 1,
                        name: 'bruno_augusto.de_oliveira.1639667314355'
                    }
                }
            }
        }

        const communicationHubspot = new CommunicationHubspot(hubspot)
        const result = await communicationHubspot.createContactsList()
        
        const expected = { listId: 1, name: 'bruno_augusto.de_oliveira.1639667314355' }

        expect(result).toEqual(expected)

    })
    
    test('should addContactsList add contact in list', async () => {
        const hubspot = {
            lists: {
                addContacts: () => {
                    return []
                }
            }
        }

        const list = []
        const communicationHubspot = new CommunicationHubspot(hubspot)
        const result = await communicationHubspot.addContactsList(list)
        
        expect(result).toEqual([])
    })
    
})