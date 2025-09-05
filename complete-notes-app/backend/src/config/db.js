const mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED!");
    } catch (error) {
        console.log("error connecting to mongoDB", error);
        process.exit(1); // exit with failure (1)
    }
}