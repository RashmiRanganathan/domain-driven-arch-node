import { connect } from "mongoose";

export const MONGO_DB_NAME = "Feb2021Workshop";
export const MONGO_DB_User = "Feb2021Workshop";
export const MONGO_DB_PASS = "ER9U3HeU0wV5917k";
export const MONGO_HOSTS = `dkcuster.o6bij.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

const getMongoUri = () => {
  return `mongodb+srv://${MONGO_DB_NAME}:${MONGO_DB_PASS}@${MONGO_HOSTS}`;
};

export const connectMongo = async () => {
  const dbUri = getMongoUri();
  connect(dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};
