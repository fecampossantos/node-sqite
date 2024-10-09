import "./database";
import server from "./server";

function init() {
  server.listen(4000, () => {
    console.log("Server running on port", 4000);
  });
}

init();
