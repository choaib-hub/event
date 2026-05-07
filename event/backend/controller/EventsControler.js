const EventDb=require('../models/Events')

const CreateEvent=async(req,res)=>{
    try{
        const { title , date, location,  image, description}=req.body;
        const AddEvent =new EventDb({title , date, location,  image, description})
        await AddEvent.save()
        res.status(200).json({message:"Events created avec success"})
    }catch(error){
      res.status(400).json({message:error})
      console.log('error',error)
    }

}
const getEvents=async(req,res)=>{
    try{
        const Events = await EventDb.find()
        res.status(200).json(Events)
    }catch(error){
       res.status(400).json(error)
    }

}
module.exports={CreateEvent,getEvents}