import { FastifyInstance } from "fastify";

import { create } from "../controllers/todos/create";
import { findAllByUser } from "../controllers/todos/findAllByUser";
import { findById } from "../controllers/todos/findById";
import { verifyJwt } from "../middlewares/verify-jwt";

export async function todosRoutes(app: FastifyInstance) {
    app.post("/todos",{ onRequest: [verifyJwt] }, create);
    app.get("/todos",{ onRequest: [verifyJwt] }, findAllByUser);
    app.get("/todos/:id",{ onRequest: [verifyJwt] }, findById);
}
