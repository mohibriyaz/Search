const config = require ('./index');
const mongoose = require ('mongoose');

module.exports = async (callback= ()=>{}) => {
    console.log(`Connecting mongo... `);
    mongoose.connect(config.database.mongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=> {
        console.log('Mongo connected');
        callback();
    })
    .catch((err)=> {
      console.log('Failed to connect to mongo');
      process.exit(1);
    });
}