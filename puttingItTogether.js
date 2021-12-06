db.movies.aggregate([
    {$match:{genres:"Western"}},
    {$project:{cast:1,"imdbRating":"$imdb.rating"}},
    {$unwind:"$cast"},
    {$group:{_id:"$cast","imdbAvg":{$avg:"$imdbRating"}}},
    {$sort:{imdbAvg:-1}},
    {$limit:1}
])