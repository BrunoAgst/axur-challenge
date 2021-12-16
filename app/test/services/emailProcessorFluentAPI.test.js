const { describe, test, expect } = require('@jest/globals')
const EmailProcessorFluentAPI = require('../../src/services/emailProcessorFluentAPI')
const mock = require('../mocks/vids-mock')

describe('#EmailProcessorFluentAPI', () => {
    test('#build', () => {
        const result = new EmailProcessorFluentAPI(mock)
                        .build()
        expect(result).toEqual(mock)
    })

    test('#getEmails', () => {
        const result = new EmailProcessorFluentAPI(mock)
                        .getEmails()
                        .build()

        const expected = [
            'mhumerstonen@buzzfeed.com',
            'tashlint@buzzfeed.com',
            'ykeunemann2@dailymail.co.uk',
            'jmarvinb@mlb.com'
        ]
        
        expect(result).toEqual(expected)
    })

    test('#getDomainEmail', () => {
        const result = new EmailProcessorFluentAPI(mock)
                        .getEmails()
                        .getDomainEmail()
                        .build()
        
        const expected =  [ 'buzzfeed.com', 'buzzfeed.com', 'dailymail.co.uk', 'mlb.com' ]
        expect(result).toEqual(expected)
    })
    test('#countEmail', () => {
        const result = new EmailProcessorFluentAPI(mock)
                        .getEmails()
                        .getDomainEmail()
                        .countEmail()
                        .build()
        
        const expected = { 'buzzfeed.com': 2, 'dailymail.co.uk': 1, 'mlb.com': 1 }

        expect(result).toEqual(expected)
    })

})
