require("dotenv").config();
const Diary = require("../models/diary.models.js");

// Criando Evento
exports.create = async (req, res) => {
  try {
    const { name, description, category, location } = req.body;

    if (!name || !description || !category || !location) {
      return res.status(400).send({ message: "Preencha todos os campos! " });
    }

    const diary = {
      nome: name,
      descricao: description,
      categoria: category,
      localizacao: location,
    };

    const data = await Diary.create(diary);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao criar evento.",
    });
  }
};

// Listando Eventos
// exports.retrive = async (req, res) => {
//   var id
// }
