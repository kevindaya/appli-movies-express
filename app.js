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

app.get("/movies/:id/:title", (req, res) => {
  const id = req.params.id;
  const title = req.params.title;

  res.render("movies-details", { movieid: id, movietitle: title });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
