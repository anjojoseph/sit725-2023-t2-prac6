const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://anjo:admin@cluster0.klae78e.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;