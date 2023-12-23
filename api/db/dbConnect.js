const mongoose = require("mongoose");
require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ronbelldev:CmIKeF7cxdzaMthX@cluster0.muhfssc.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function dbConnect() {
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    mongoose
        .connect(
            process.env.DB_URL,
            {
                //   these are options to ensure that the connection is done properly
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        )
        .then(() => {
            console.log("Successfully connected to MongoDB Atlas!");
        })
        .catch((error) => {
            console.log("Unable to connect to MongoDB Atlas!");
            console.error(error);
        });
}

module.exports = dbConnect;

// async function dbConnect() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// module.exports = dbConnect
