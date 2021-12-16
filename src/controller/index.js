const CommunicationHubspot = require("../integrators/hubspot")
const EmailProcessorFacade = require("../services/emailProcessorFacade")
const Hubspot = require('hubspot')
const formatEmailResponse = require("../utils/formatEmailResponse")

module.exports = {
    getContacts: async (request, response) => {
        try {
            const apiKey = process.env.API_KEY
            const listID = process.env.LIST_ID
            
            const hubspot = new Hubspot({ apiKey })

            const communicationHubspot = new CommunicationHubspot(hubspot)
            const getUsers = await communicationHubspot.getContacts(listID)
            const instance = new EmailProcessorFacade(getUsers)
            const getEmails = instance.getListEmail()
            const listEmailFormatted  = formatEmailResponse(getEmails)

            response.status(200)
            response.json(listEmailFormatted)

        } catch (err) {
            const { statusCode, error } = err
            response.status(statusCode || 500)
            response.json(error || err)
        }
    }
}