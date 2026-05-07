const express = require('express');
const router=express.Router()
const EventController=require('../controller/EventsControler')
router.post('/event',EventController.CreateEvent)
module.exports=router;