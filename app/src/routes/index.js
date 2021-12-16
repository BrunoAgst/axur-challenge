const router = require('express').Router()
const handler = require('../controller')

router.get('/v1/contacts', handler.getContacts)

module.exports = router