
    const mongoose=require('mongoose');
   
    const connectDB=async()=>{
        try{
          await mongoose.connect('mongodb+srv://prajjwolpyakurel11_db_user:cazRjRiYwsu7RLVd@cluster0.tlvgsos.mongodb.net/?appName=Cluster0')
          console.log("MongoDB Connected!!")
        }catch(err){
            console.log("mongoDB error: ",err)
        }
    }
connectDB()
