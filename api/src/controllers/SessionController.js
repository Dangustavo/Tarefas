const crypto = require("crypto");
const connection = require("../database/connection");

const data_criptografy = {
  algoritmo: "aes256",
  segredo: "chaves",
  tipo: "hex",
};

function criptografy(password) {
  const cipher = crypto.createCipher(
    data_criptografy.algoritmo,
    data_criptografy.segredo
  );
  cipher.update(password);
  return cipher.final(data_criptografy.tipo);
}

module.exports = {
  async create(request, response) {
    const { email } = request.body;
    const { password } = request.body;

    const user = await connection("users")
      .where("email", email)
      .andWhere("password", criptografy(password))
      .select("id")
      .first();

    if (!user) {
      return response
        .status(401)
        .json({ error: "Incorrect username or password" });
    }

    return response.json(user);
  },
};
