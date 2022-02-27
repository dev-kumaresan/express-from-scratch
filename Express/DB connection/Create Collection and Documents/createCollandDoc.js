// index.js

const { MongoClient } = require("mongodb"); 

 //connecting cluster
async function main()
{
         
    const uri = "URL"; //connection
    //sting of application code
    const client = new MongoClient(uri);
    try{
        await client.connect();
        // await listDatabases(client);
        await createListing(client,{
            name : "Kumaresan",
            course : "MCA",
            place : "pudukkottai"
        })
    }catch(e)
    {
        console.log(e);
    }
    finally{
        await client.close(); 
    }
   
}
main().catch(console.error);

// list databases in clusters

// async function listDatabases(client){
//     
//     const databasesList = await client.db().admin().listDatabases();
//     console.log("Databases");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }

// Create database and collection
async function createListing(client, newListing)
{
    const result = await client.db("sample").collection("ListingandReviews").insertOne(newListing);
    console.log(`New Listing created with id : ${result.insertedId}`);
}
