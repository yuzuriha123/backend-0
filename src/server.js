const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const connecion = require("./config/db");
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config template engine
configViewEngine(app);
//khai báo route
app.use(webRouter);

app.listen(port, () => {
  console.log("listen port 3000");
});
