const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://2003snehava:sneha2003@cluster0.z41gcaw.mongodb.net/internDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{


    console.log('DB is connected');

}).catch((error)=>{
    console.log('Error in connection')
})
   