// index.js

const { MongoClient } = require("mongodb"); 
async function main()
{
    const uri = "URL"; //connection
    //sting of application code
    const client = new MongoClient(uri);
    try{
        await client.connect();
        await listDatabases(client);
    }catch(e)
    {
        console.log(e);
    }
    finally{
        await client.close(); 
    }
     //connecting cluster
}
main().catch(console.error);
// list databases in clusters
async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}
