const { describe, test, expect } = require('@jest/globals')
const EmailProcessorFacade = require('../../src/services/emailProcessorFacade')
const mock = require('../mocks/vids-mock')

describe('#EmailProcessorFacade', () => {
    test('#getListEmail', () => {
        const instance = new EmailProcessorFacade(mock)
        const result = instance.getListEmail()

        const expected = { 'buzzfeed.com': 2, 'dailymail.co.uk': 1, 'mlb.com': 1 }
        
        expect(result).toEqual(expected)
    })
})