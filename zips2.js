db.zips.aggregate([
    {$group: { _id: { "state": "$state", "city":"$city"},
        "totalPopulation": {   $sum: "$pop" }}},
    {$project:{}}
])