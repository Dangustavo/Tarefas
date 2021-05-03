const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("task").count();

    const task = await connection("task")
      .join("users", "users.id", "=", "task.user_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select(["task.*", "users.name", "users.email"]);

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(task);
  },

  async create(request, response) {
    const { title, description, place, hour, date } = request.body;
    const user_id = request.headers.authorization;

    const user = await connection("users")
      .where("id", user_id)
      .select("id")
      .first();

    if (!user) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    const [id] = await connection("task").insert({
      title,
      description,
      place,
      hour,
      date,
      user_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const task = await connection("task")
      .where("id", id)
      .select("user_id")
      .first();

    if (task.user_id !== user_id) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    await connection("task").where("id", id).delete();

    return response.status(204).send();
  },

  async put(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;
    const { title, description, place, hour, date } = request.body;

    const task = await connection("task")
      .where("id", id)
      .select("user_id")
      .first();

    if (task.user_id !== user_id) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    await connection("task").where("id", id).update({
      title,
      description,
      place,
      hour,
      date,
    });

    return response.status(204).send();
  },
};
