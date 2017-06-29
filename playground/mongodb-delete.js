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

    //deleteMany
    if (true) {
        let filterStr = 'No';
        db.collection('Users').deleteMany({
            name: filterStr
        }).then((info) => {
            console.log(info.result);
            closeDB();
        });
    }
    //deleteOne
    if (false) {
        let filterStr = 'Sad';
        db.collection('Todos').deleteOne({
            text: filterStr
        }).then((info) => {
            console.log(`Deleted one record with text: ${filterStr}\n`, info['result']);
            closeDB();
        });
    }


    //findOneAndDelete
    if (false) {
        let filterStr = 'South America';
        db.collection('Users').findOneAndDelete({
            location: filterStr
        }).then((result) => {
            console.log(result.value);
            closeDB();
        });
    }

    function closeDB() {
        db.close();
        console.log('Closed DB connection!');
    }
});
