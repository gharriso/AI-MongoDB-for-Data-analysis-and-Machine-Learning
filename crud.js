db.myCollection.drop();

db.myCollection.insertOne({name:"Guy"});
db.myCollection.insertMany([{name:"Jane"},
                            {name:"Dick"}]);
db.myCollection.find();

db.myCollection.insertOne({_id:"Guy",location:"Australia"});
db.myCollection.find();
db.myCollection.deleteOne({name:"Guy"});
db.myCollection.updateOne({name:"Jane"},{$set:{location:"Greece"}});
db.myCollection.updateMany({},{$set:{age:"Unknown"}});
db.myCollection.find();

 