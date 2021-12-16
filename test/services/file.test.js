const { describe, test, expect, jest: _jest, beforeEach } = require('@jest/globals')
const File = require('../../src/services/file')
const path = require('path')

describe('#File', () => {

    beforeEach(() => {
        _jest.clearAllMocks()
    })

    test('should parseCSVToJSON return json', async () => {
        
        const database = path.join(__dirname, '../mocks/contatos-mock.csv')

        const result = await File.parseCSVToJSON(database)

        const expected = [
            {
              firstName: 'Murdock',
              lastName: 'Humerstone',
              email: 'mhumerstonen@buzzfeed.com',
              gender: 'Male'
            },
            {
              firstName: 'Tani',
              lastName: 'Ashlin',
              email: 'tashlint@buzzfeed.com',
              gender: 'Female'
            },
            {
              firstName: 'Yolanthe',
              lastName: 'Keunemann',
              email: 'ykeunemann2@dailymail.co.uk',
              gender: 'Female'
            },
            {
              firstName: 'Dorena',
              lastName: 'Savoury',
              email: 'dsavoury3@spotify.com',
              gender: 'Female'
            }
        ]

        expect(result).toEqual(expected)

    })
  
    test('should parseJSONToHubSpot convert json to hubspot', async () => {

        const content = [
            {
              firstName: 'Murdock',
              lastName: 'Humerstone',
              email: 'mhumerstonen@buzzfeed.com',
              gender: 'Male'
            },
            {
              firstName: 'Tani',
              lastName: 'Ashlin',
              email: 'tashlint@buzzfeed.com',
              gender: 'Female'
            },
            {
              firstName: 'Yolanthe',
              lastName: 'Keunemann',
              email: 'ykeunemann2@dailymail.co.uk',
              gender: 'Female'
            },
            {
              firstName: 'Dorena',
              lastName: 'Savoury',
              email: 'dsavoury3@spotify.com',
              gender: 'Female'
            }
        ]

        const mockedDate = new Date(2021, 12, 15)
        _jest.spyOn(global, 'Date').mockImplementation(() => mockedDate)


        const result = await File.parseJSONToHubSpot(content)
        
        const expected = [
            {
              name: 'Murdock.Humerstone.1642215600000',
              email: 'mhumerstonen@buzzfeed.com',
              gender: 'Male'
            },
            {
              name: 'Tani.Ashlin.1642215600000',
              email: 'tashlint@buzzfeed.com',
              gender: 'Female'
            },
            {
              name: 'Yolanthe.Keunemann.1642215600000',
              email: 'ykeunemann2@dailymail.co.uk',
              gender: 'Female'
            },
            {
              name: 'Dorena.Savoury.1642215600000',
              email: 'dsavoury3@spotify.com',
              gender: 'Female'
            }
        ]
        
        expect(result).toEqual(expected)
    })
})