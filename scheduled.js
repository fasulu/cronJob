const schedule = require("node-schedule");
const { MongoClient } = require("mongodb");
const { ReadFile } = require("./utility/readFile");

// const uri = "mongodb://localhost:27017/";
// const uri = "mongodb+srv://ismail:liamsi26@cluster0.zsyf0kn.mongodb.net"
const uri = "mongodb+srv://fasulu:L2wut2glTa0OjWtl@restapi.43noif2.mongodb.net"
const client = new MongoClient(uri);
var paidList = [];

try {

  const eventName = "serverClosed";
  client.on(eventName, event => {
    console.log(`received ${eventName}: ${JSON.stringify(event, null, 2)}`);
  });

  // Execute a cron job every 1 Minutes = */1 * * * *

  rule = "*/1 * * * *"
  const job = schedule.scheduleJob(rule, function (firedate) {

    console.log('Job started ' + firedate);

    const scheduledResult = getData().catch(console.dir);

    setTimeout(function () {
      ReadFile(paidList);
    }, 6000);        // will wait to get updated to avoid promise error;
    
    console.log("File read ")

  });
} catch (error) {
  console.log("Something went wrong in scheduled job\n", error)
}

async function getData() {
  try {
    await client.connect();
    
    const result = await client.db("user").collection("payments").find({}).toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      db.close();
    });
    // console.log("Connected successfully", result);
    paidList = result;
    console.dir(paidList)
    
  } finally {
    await client.close();
    if (client.close()) {
      console.log("Closed successfully")
    } else {
      await client.close();
    }
  }
}

