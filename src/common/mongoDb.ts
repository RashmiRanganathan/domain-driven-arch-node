import { connect } from "mongoose";

export const MONGO_HOSTS = "localhost:27017";
export const MONGO_DB_NAME = "contact_db";

const getMongoUri = () => {
  return `mongodb://${MONGO_HOSTS}/${MONGO_DB_NAME}`;
};

export const connectMongo = async () => {
  const dbUri = getMongoUri();
  connect(dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};
