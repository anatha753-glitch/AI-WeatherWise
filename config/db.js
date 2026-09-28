const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("MONGO_URI starts with:", process.env.MONGO_URI?.substring(0, 20));

    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/weatherwise');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;