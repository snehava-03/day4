const express=require("express");
const app=new express();
//Connect DB
require('./connection'); 
//Model File
const StudentModel =require('./model/StudentData')
app.use(express.json())
//Get API
{/*app.get('/login',(req,res)=>{
    res.send('This is a login page')
    
})*/}

{/*app.get('/',(req,res)=>{
    res.send('This is home page')
})*/}
//Student DB crud
app.get('/students',async(req,res)=>{
    try{
        const data= await StudentModel.find();
        res.send(data);

    }

   catch(error){
    res.send('Data not found');
   }
})
//Post API
app.post('/addstudent',async (req,res)=>{
    try{
        var item=req.body;
        const datasave=new StudentModel(item);
        const savedata=await datasave.save();
            res.send('Post successful')
    }
        

    catch (error){
        console.log('Error')

    }
})
//Update api
app.put('/studentedit/:id',async(req,res)=>{
    try{
        const data=await StudentModel.findByIdAndUpdate(req.params.id,req.body);
        res.send('Update Successfully')

    }catch(error){
        console.log('Error')

    }

})
//Delete api
app.delete('/removestudent/:id',async(req,res)=>{
    try{
    await StudentModel.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully')

}
catch(error){
    console.log('Error');
}

}
)




app.listen(3000,()=>{
    console.log("The server is running on Port 3000")
}

)