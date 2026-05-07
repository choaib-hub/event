const express = require('express');
const router=express.Router()
const EventController=require('../controller/EventsControler')
router.post('/event',EventController.CreateEvent)
router.get('/getEvents',EventController.getEvents)
module.exports=router;