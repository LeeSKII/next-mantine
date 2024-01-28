import mongoose from "mongoose";

const { host, port, name, authSource, user, password } = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  authSource: process.env.DB_AUTH_SOURCE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const url = `mongodb://${user}:${password}@${host}:${port}/${name}`;

export async function connect() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(url, {
      authSource,
    });
    const mongo = mongoose.connection;
    mongo.on("error", (err) => {
      console.error(`mongodb find error:${err.message}`);
    });
    mongo.once("disconnected", () => {
      console.info(`mongodb disconnected!`);
    });

    mongo.once("open", () => {
      console.info(`mongodb connected!`);
    });
  } catch (error) {
    console.error(`Mongoose Connect error:${error}`);
  }
}
