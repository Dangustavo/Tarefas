const connection = require("../database/connection");
module.exports = {
  async index(request, response) {
    const user_id = request.headers.authorization;

    const user = await connection("users")
      .where("id", user_id)
      .select("id")
      .first();

    if (!user) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    const tasks = await connection("task")
      .join("users", "users.id", "=", "task.user_id")
      .where("user_id", user_id)
      .orderBy("date")
      .select(["task.*"]);

    return response.json(tasks);
  },
};
