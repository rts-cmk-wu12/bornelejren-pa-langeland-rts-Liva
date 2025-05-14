import ViteExpress from "vite-express";
import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db("bornelejren");

app.use(express.json());

ViteExpress.listen(app, PORT, () => console.log(`Server running on http://localhost:${PORT}`));