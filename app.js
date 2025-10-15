const express = require("express");
const app = express();

const PORT = 3000;

//Servir les fichiers statiques comme styles.css dans le dossier public
app.use("/public", express.static("public"));

//Definition des vues
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/movies", (req, res) => {
  res.render("movies");
});

app.get("/movies/add", (req, res) => {
  res.send("Prochainement un formulaire d'ajout");
});

app.get("/movies-details/:id", (req, res) => {
  const id = req.params.id;
  switch (id) {
    case "1":
      res.render("lupin");
      break;
    case "2":
      res.render("tlbdc");
      break;
    case "3":
      res.render("intouchables");
      break;
    default:
      res.send("<b>Oups, pas de films en plus</b>");
  }
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  res.send(`film numéro ${id}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
