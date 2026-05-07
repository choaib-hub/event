const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const CreateEvent= require('./routes/CreateEvent')
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect('mongodb://localhost:27017/fullStackPr')
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
}).catch((err)=>{  
    console.error('Error connecting to MongoDB:', err);
});
app.use('/api',CreateEvent)