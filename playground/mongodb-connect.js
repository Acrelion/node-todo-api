const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to MongoDB server.');

    if (false) {
        db.collection('Todos').insertOne({
            text: 'Something Kittent',
            completed: false
        }, (err, result) => {
            processErrResult(err, result);
        });

        db.collection('Users').insertOne({
            name: 'Kitten',
            age: 25,
            location: 'Sofia'
        }, (err, result) => {
            processErrResult(err, result);
        });
    }


    db.close();
});

function processErrResult(err, result) {
    if (err) {
        return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
}
