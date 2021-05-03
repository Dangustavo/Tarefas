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
  async index(request, response) {
    const users = await connection("users").select("*");

    return response.json(users);
  },

  async create(request, response) {
    const { name, email, password } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");

    try {
      const users = await connection("users")
        .where("email", email)
        .select("email")
        .first();

      if (users.email) {
        return response
          .status(400)
          .json({ error: "Operation not permitted. User already registered" });
      }
    } catch (error) {}

    await connection("users").insert({
      id,
      name,
      email,
      password: criptografy(password),
    });

    return response.json({ id });
  },
};
