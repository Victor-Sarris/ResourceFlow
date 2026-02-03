const User = require("../models/user.models.js");

exports.create = async (req, res) => {
  try {
    const { name, email, password, telefone, cpf } = req.body;

    if (!name || !email || !password || !telefone || !cpf) {
      return res.status(400).send({ message: "Preencha todos os campos!" });
    }

    const user = {
      nome: name,
      email: email,
      password: password,
      telefone: telefone,
      cpf: cpf,
      cargo: "Usuario",
    };

    const data = await User.create(user);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao criar usuário.",
    });
  }
};
