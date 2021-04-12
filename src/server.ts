import { Server } from "@hapi/hapi";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";
import Swagger from "./plugins/swagger";
import { connectMongo } from "./common/mongoDb";
import { routes } from "./routes";

const init = async () => {
  const server: Server = new Server({
    port: 3000,
    host: "localhost",
    routes: {
      validate: {
        options: {
          abortEarly: false,
        },
        failAction: (_request, _h, err) => {
          throw err;
        },
      },
    },
  });

  server.route(routes);

  const plugins: any[] = [Inert, Vision, Swagger];
  await server.register(plugins);

  await connectMongo();
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
