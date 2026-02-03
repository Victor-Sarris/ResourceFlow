const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/user.models.js");

const connection = require("./database/database.js");
connection
  .sync()
  .then(() => console.log("Banco de dados sincronizado."))
  .catch((err) => console.error("Erro ao sincronizar banco:", err));

// Configurações
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo ao Backend do ResourceFlow." });
});

require("./routes/user.routes.js")(app);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
