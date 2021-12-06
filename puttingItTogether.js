db.movies.aggregate([
    {$match:{genres:"Western"}},                        // Select the documents to be included      
    {$project:{cast:1,"imdbRating":"$imdb.rating"}},    // Select the attributes to be included
    {$unwind:"$cast"},                                  // "Flatten" arrays into multiple documents  
    {$group:{_id:"$cast",                               // Group by Actor (cast)
             "imdbAvg":{$avg:"$imdbRating"}}},          // Calculate average IMDB rating
    {$sort:{imdbAvg:-1}},                               // Sort by rating (descending)
    {$limit:1}                                          // Include just one document 
])