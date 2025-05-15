import express from "express";
import { MongoClient } from "mongodb";

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db("bornelejren");

app.use((req, res, next) => {
  const allowedOrigins = [
    "https://bornelejren-pa-langeland.onrender.com",
    "http://localhost:3001"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get('/api/sponsers', async (_, response) => {
  const data = database.collection('sponsers').find().sort({ year: -1 });

  response.json(await data.toArray());
});

app.post('/api/submissions/add', async (request, _) => {
  const data = request.body;

  database.collection('submissions').insertOne(data);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});