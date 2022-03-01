
const { MongoClient } = require("mongodb"); 

 //connecting cluster
async function main()
{
         
    const uri = "mongodb+srv://kumaresanl:A2Z029knl**@cluster0.xrtq2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //connection
    //sting of application code
    const client = new MongoClient(uri);
    try{
        await client.connect();
        // await listDatabases(client);
       
        // await createListing(client,{
        //     name : "Kumaresan",
        //     course : "MCA",
        //     place : "pudukkottai"
        // })

        // await createMultipleListing(client,[
        //     {
        //         name: "Kumaran",
        //         course : "Bsc",
        //         place : "Trichy"
        //     },
        //     {
        //         name: "Kumar",
        //         course: "BBA",
        //         place: "Trivandram"
        //     }
        // ]);

        await findOneListingByFieldName(client,"Kumaran");
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
// async function createListing(client, newListing)
// {
//     const result = await client.db("sample").collection("ListingandReviews").insertOne(newListing);
//     console.log(`New Listing created with id : ${result.insertedId}`);
// }

// Create Multiple documents
// async function createMultipleListing(client,newListings)
// {
//     const result = await client.db("sample").collection("ListingandReviews").insertMany(newListings);
//     console.log(`${result.insertedCount} new listings created with the following id (s) :`);
//     console.log(result.insertedIds);

// }

async function findOneListingByFieldName(client,nameOfListing)
{
   const result = await  client.db("sample").collection("ListingandReviews").findOne({name:nameOfListing});
   if(result){
       console.log(`found a listing with a collection with the name '${nameOfListing}'`);
       console.log(result);
   }
   else{
       console.log(`No listing found with the name '${nameOfListing}'`);
   }
}
