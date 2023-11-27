import mongoose from "mongoose";


const Connectmongodb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/crud_db")
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
}

export default Connectmongodb
