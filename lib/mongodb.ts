import { url } from 'inspector'
import { MongoClient } from 'mongodb'
import { GOOGLE_FONT_PROVIDER } from 'next/dist/shared/lib/constants';
import { execOnce } from 'next/dist/shared/lib/utils';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if(!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if(process.env.NODE_ENV === "development") {
  if(!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}
else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;