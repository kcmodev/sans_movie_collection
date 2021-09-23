const mongoose = require('mongoose');
const databaseConfig = require('./config/config')


const connectDatabase = async () => {
    try {
        await mongoose.connect(databaseConfig.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to database...')
    } catch(e) {
        console.error(e)
    }
}

module.exports = connectDatabase;
