import pymongo

conn_str = "mongodb+srv://guy:MDBAML123@cluster0.yxixq.mongodb.net/sample_mflix"
 
client = pymongo.MongoClient(conn_str)
db=client.sample_mflix

runTimeSum=0
nMovies=0

for movie in db.movies.find():
    nMovies+=1
    if 'runtime' in movie.keys():
        runTimeSum=runTimeSum+movie['runtime']
print("Avg RunTime: ",runTimeSum/nMovies)
