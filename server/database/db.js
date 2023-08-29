import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb://user:codeforinterview@ac-exhz8vm-shard-00-00.wqaqcnn.mongodb.net:27017,ac-exhz8vm-shard-00-01.wqaqcnn.mongodb.net:27017,ac-exhz8vm-shard-00-02.wqaqcnn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1saj9a-shard-0&authSource=admin&retryWrites=true&w=majority' ;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;