db.myCollection.insertOne({name:"Guy"});
db.myCollection.insertMany([{name:"Jane"},
                            {name:"Dick"}]);
db.myCollection.find();

db.myCollection.deleteMany({});