import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_HOST)
        console.log('Conection server Mongo online');
    } catch (error) {
        console.error('Server connection error by Server Mongo. ', error);
    }
}

export default connectDB;