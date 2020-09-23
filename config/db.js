const moongose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await moongose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology : true
        })
        console.log(`Mongo DB connected : ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;