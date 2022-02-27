// TODO: MongoDb commands

mongosh //? to connect to database

show dbs  //? to show the databases 

use contactList //? create a dataBase named contactList

db.createCollection("users") //? create a collections named users

show collections //? to show the ceated collection

db.users.insertOne({name:"atatat"}) //? to insert one ellement

db.users.insertMany([{Last_name: "Ben Lahmer", First_name: "Fares", Email: "fares@gmail.com", age:26},
    {Last_name: "Kefi", First_name: "Seif", Email: "kefi@gmail.com", age:15},
    {Last_name: "Fatnassi", First_name: "Sarra", Email: "sarra.f@gmail.com", age:40},
    {Last_name: "Ben Yahia", First_name: "Rym", age:4},
    {Last_name: "Cherif", First_name: "Sami", age:3}]) // to insert many elements at one time



db.users.find({_id: ObjectId("621b9300f9df255769e25f57")}) //to show the user that have the id ...

db.users.find({age:{$gt:18}}) // to show those who have age grater than 18

db.users.find({$and:[{age:{$gt:18},First_name:{$regex:"ar"}}]}) // to find the user that age greater than 18 and his first name contains ar

db.users.update({_id: ObjectId("621b9300f9df255769e25f57")},{$set:{First_name:"anis"}}) // to update the user with the id .. and to chnage his name to anis

db.users.deleteMany({age:{$lt:5}} // to delete those who have age under 5