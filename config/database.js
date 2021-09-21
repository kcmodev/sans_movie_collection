const mongoose = require('mongoose');
const config = require('config');
const database = config.get('mongoURI');

const connect = async () => {
    try {
        await mongoose.connect(database);
        console.log('Database connected')

    } catch(error) {
        console.error(error);
        process.exit(1)
    }
}

module.exports = connect;
