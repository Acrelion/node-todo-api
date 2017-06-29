/*
cd 'D:\Games\Additional Big Apps\mongo\bin'
.\mongod.exe --dbpath 'D:\Games\Additional Big Apps\mongo-data'
*/

const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to MongoDB server.');

    /*  db.collection('Todos').find({
            completed: false
        }).toArray().then(
            (docs) => {
                console.log(JSON.stringify(docs, undefined, 2));
                closeDB();
            }, (err) => {
                console.log("Unable to fetch todos.", err);
                closeDB();
            }
        );
    */

    /*db.collection('Todos').find(_id : new ObjectID('59554d7d2ce303d4935e0921')).toArray().then(
        (items) => {console.log(items);},
        (err) => {console.log(err);}
    );
    */

    /*
    db.collection('Todos').count({
        completed: false
    }).then(
        (count) => {
            console.log(`Todos count: ${count}`);
            closeDB();
        }, (err) => {
            console.log("Unable to count Todos", err);
            closeDB();
        }
    );
    */

    db.collection('Users').find({
        name: 'Omicron'
    }).toArray().then(
        (users) => {
            console.log(users);
            closeDB();
        }, (err) => {
            console.log("Unable to fetch Users", err);
            closeDB();
        }
    );

    function closeDB() {
        db.close();
    }
});
