db.movies.aggregate([
    {$match:{title:"Star Trek",year:2009}},
    {$project:{"title":1,year:1}},
    {$lookup:{
        from: 'comments',
        localField: '_id',
        foreignField: 'movie_id',
        as: 'comments'
      }
    }
])