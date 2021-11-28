use sample_analytics

db.transactions.findOne();
db.customers.findOne();
db.accounts.findOne();

db.transactions.aggregate([
  { $group:{  _id:{ "account_id":"$account_id"  }, 
             "transaction_count-sum":{$sum:"$transaction_count"}  
      } 
  },
],{allowDiskUse: false});

db.getCollection("transactions").aggregate([
  { $group:{     _id:{ "account_id":"$account_id"  }, 
             "transaction_count-sum":{$sum:"$transaction_count"}  
      }
  },
  { $sort:{  "transaction_count-sum":-1 }},
  {$limit:10}
]);

db.getCollection("transactions").aggregate([
  { $unwind:  "$transactions" },
  { $project: { 
          "account_id": 1  ,  
          "transactions.symbol": 1  ,  
          "transactions.total": 1  ,  
          "transactions.transaction_code": 1  ,  
          "_id": 0  
         }
  },
],{allowDiskUse: false});

db.getCollection("transactions").aggregate([
  { $unwind:  "$transactions" },
  { $project: { 
          "account_id": 1  ,  
          "Symbol": "$transactions.symbol"  ,  
          "total": "$transactions.total"  ,  
          "code": "$transactions.transaction_code"  ,  
          "_id": 0  
         }
  },
],{allowDiskUse: false});

db.getCollection("transactions").aggregate([
  { $unwind:  "$transactions" },
  { $project: { 
          "account_id": 1  ,  
          "Symbol": "$transactions.symbol"  ,  
          "total": "$transactions.total"  ,  
          "code": "$transactions.transaction_code"  ,  
          "_id": 0  
         }
  }]);

/* need to convert to integer */

db.getCollection("transactions").aggregate([
  { $unwind:  "$transactions" },
  { $project: { 
          "account_id": 1  ,  
          "Symbol": "$transactions.symbol"  ,  
          "total": "$transactions.total"  ,  
          "code": "$transactions.transaction_code"  ,  
          "_id": 0  
         }
  }]);



db.getCollection('transactions').aggregate([
  { $unwind: '$transactions' },
  {
    $project: {
      account_id: 1,
      Symbol: '$transactions.symbol',
      total: '$transactions.total',
      code: '$transactions.transaction_code',
      _id: 0
    }
  } 
]);

db.getCollection('transactions').aggregate([
  { $unwind: '$transactions' },
  {
    $project: {
      account_id: 1,
      Symbol: '$transactions.symbol',
      total: '$transactions.total',
      code: '$transactions.transaction_code',
      _id: 0
    }
  },
  {
    $addFields: { totalPrice: {$toDecimal:"$total"}}
  }
]);

db.getCollection('transactions').aggregate([
  { $unwind: '$transactions' },
  {
    $project: {
      account_id: 1,
      Symbol: '$transactions.symbol',
      total: '$transactions.total',
      code: '$transactions.transaction_code',
      _id: 0
    }
  },
  {
    $addFields: { totalPrice: {$toDecimal:"$total"}}
  },
  { $group:{     _id:{ "account_id":"$account_id"  }, 
             "count":{$sum:1},
             "total-sum":{$sum:"$totalPrice"}  
      }
  },
  { $sort:{  "total-sum":-1 }}
]);

db.getCollection('transactions').aggregate([
  { $unwind: '$transactions' },
    { $match:{
        "transactions.transaction_code":{ $eq:"buy" }
   }
  },
  {
    $project: {
      account_id: 1,
      symbol: '$transactions.symbol',
      total: '$transactions.total',
      code: '$transactions.transaction_code',
      _id: 0
    }
  },
  {
    $addFields: { totalPrice: {$toDecimal:"$total"}}
  },
  { $group:{     _id:{ "sybol":"$symbol"  }, 
             "count":{$sum:1},
             "total-sum":{$sum:"$totalPrice"}  
      }
  },
  { $sort:{  "total-sum":-1 }}
]);

db.customers.findOne();

db.getCollection("customers").aggregate([
  { $unwind:  "$accounts" },
],{allowDiskUse: false});


db.getCollection("customers").aggregate([
  { $unwind:  "$accounts" },
  { $project: { 
          "name": 1  ,  
          "accounts": 1  
         }
  },
],{allowDiskUse: false});

db.getCollection("customers").aggregate([
  { $unwind:  "$accounts" },
  { $project: { 
          "name": 1  ,  
          "accounts": 1  
         }
  },
  { $lookup:
     { from:         "transactions",
       localField:   "accounts",
       foreignField: "account_id",
       as:           "transactions"
     }
  },
],{allowDiskUse: false});








