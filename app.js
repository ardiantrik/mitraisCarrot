const express = require('express');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
// const router = express.Router();
const dbName = 'mitraisCarrot';
const uri = 'mongodb://127.0.0.1:27017/'+dbName;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to db'));
const app = express();
const port = 3000;

app.use(express.json());
// const Item = require('./model/item');

const itemsRouter = require('./routes/items');
app.use('/item', itemsRouter);
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// client.connect((error, client) => {
//     if (error) {
//         console.log('koneksi gagal');
//     }
// });

// app.get('/item', async (req, res) => {
//     const item = await Item.find();
//     // res.send('user hokyaa ' + req.params.id);
//     // res.json(item);
// });

// app.post('/item', (req, res) => {
    
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
