const { describe, test, expect } = require('@jest/globals')
const FormatEmailResponse = require('../../src/utils/formatEmailResponse')
const mock = require('../mocks/emailJson-mock')

describe('#FormatEmailResponse', () => {
    test('should FormatEmailResponse return formatted email list', () => {

        const result = FormatEmailResponse(mock)

        const expected = [
            { domain: 'buzzfeed.com', quantity: 2 },
            { domain: 'spotify.com', quantity: 1 },
            { domain: 'kickstarter.com', quantity: 1 },
            { domain: 'dailymail.co.uk', quantity: 1 },
            { domain: 'com.com', quantity: 1 },
            { domain: 'seattletimes.com', quantity: 1 },
            { domain: 'blinklist.com', quantity: 1 },
            { domain: 'yellowpages.com', quantity: 1 },
            { domain: 'soundcloud.com', quantity: 1 },
            { domain: 'google.ca', quantity: 1 }
          ]

        expect(result).toEqual(expected)
    })
})