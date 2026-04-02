import mongoose from 'mongoose';


function connectDB() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
}

export default connectDB;