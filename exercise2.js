db.movies.aggregate([
    {$match:{year:2010,"tomatoes.viewer.meter":{$exists:true}}},
    {$project:{directors:1,"tomatoes.viewer.meter":1}},
    {$unwind:"$directors"} ,
    {$group:{_id:"$directors",
       tomatoesAvg:{$avg:"$tomatoes.viewer.meter"}}},
    {$sort:{tomatoesAvg:1}},
    {$limit:1}
])