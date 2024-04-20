const express = require("express");
const PORT = 1234;
const path = require("path");
const bodyParser = require("body-parser");

// import { systemArchitecture } from "system-architecture";

let app = express();

app.set("view engine", "pug");
app.set("views", path.resolve("./dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

router.get("/", (req, res, next) => {
  console.log(req.query, req.query.lang);
  // Attend un argument après l'url de type http://localhost/?lang=fr
  if (!req.query.lang) {
    let lang = "fr"
  } else { lang = req.query.lang};

  let system = path.resolve('./');
  const myDatas = {
    title: "Multilingual test site...",
    msg: "This is a pargraph content",
    info: system,
    lang: lang
  };
  res.render("index", { pass: myDatas });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(`Erreur: Ne peux pas écouter sur le port ${PORT}`);
  }
  console.log(`Serveur écoute sur le port ${PORT}`);
});
