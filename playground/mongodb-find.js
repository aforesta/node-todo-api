//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // innerhalb find kann man Conditionals einsetzen
  /*
db.collection('Todos').find({
    _id: new ObjectID('589ad096298f8944c8ae8a9f')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
    //console.log(docs);

  }, (err) => {
    console.log('Unable to fetch todos ', err);
  });*/

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);

  }, (err) => {
    console.log('Unable to fetch todos ', err);
  });

  db.collection('Users').find({name: 'Toni Fore'}).count().then((count) => {
    console.log(`Users count: ${count}`);

  }, (err) => {
    console.log('Unable to fetch users ', err);
  });
  db.collection('Users').find({name: 'Toni Fore'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch users ', err);
  });

  db.close();
});
