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

// Rota de Login
exports.login =
  ("/Login",
  async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        return res.status(404).send({ message: "Senha inválida" });
      }

      if (user.password !== password) {
        return res.status(401).send({ message: "Senha inválida." });
      }

      res.send({
        message: "Login realizado com sucesso.",
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          cargo: user.cargo,
        },
      });
    } catch (err) {
      res.status(505).send({
        message: err.message || "Erro ao realizar Login, tente novamente.",
      });
    }
  });
