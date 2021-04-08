import { Server, Request, ResponseToolkit } from "@hapi/hapi";

const init = async () => {
  const server: Server = new Server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (_request: Request, _h: ResponseToolkit) => {
      return "Hello World!";
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
