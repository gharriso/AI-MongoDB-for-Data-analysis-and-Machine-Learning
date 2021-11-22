use sample_mflix

db.movies.findOne();

db.movies.find({genres:"Western"});

db.movies.find({genres:"Western"},
              {title:1,plot:1,year:1,_id:0});

db.movies.find({genres:"Western"},
              {title:1,plot:1,year:1,_id:0}).
   sort({year:-1});

db.movies.find({genres:"Western"},
              {title:1,plot:1,year:1,_id:0}).
   sort({year:-1}).limit(1);

db.movies.find({genres:"Western",cast:"Johnny Depp"},
              {title:1,plot:1,year:1,_id:0}).
   sort({year:-1}).limit(1);

db.movies.distinct("genres");

db.movies.find({genres:"Western"}).count();
