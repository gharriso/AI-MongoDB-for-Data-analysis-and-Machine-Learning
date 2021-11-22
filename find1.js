use sample_mflix

db.movies.find({languages:"Spanish"},
               {title:1,"tomatoes.viewer.rating":1,_id:0}).
         sort({"tomatoes.viewer.rating":-1}).
         limit(10)
;
