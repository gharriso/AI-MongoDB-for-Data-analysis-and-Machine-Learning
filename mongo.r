library(mongolite)

connection="mongodb+srv://guy:MDBAML123@cluster0.yxixq.mongodb.net/sample_mflix"

movies=mongo(collection="movies",url=connection)

myData <- movies$find( 
    query='{"genres":"Western"}',
    fields='{"title":true}',
    limit = 5
)

print(myData)