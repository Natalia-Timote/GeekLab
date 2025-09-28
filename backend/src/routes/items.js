import express from "express";
import ItemsControllers from "../controllers/items.js";

const itemsRouter = express.Router();

const itemsControllers = new ItemsControllers();

itemsRouter.get("/", async (req, res) => {
    const { success, statusCode, body } = await itemsControllers.getItems();

    res.status(statusCode).send({ success, statusCode, body });
})

itemsRouter.post("/", async (req, res) => {
    const { success, statusCode, body } = await itemsControllers.addItem(req.body);

    res.status(statusCode).send({ success, statusCode, body });
})

itemsRouter.delete("/:id", async (req, res) => {
    const { success, statusCode, body } = await itemsControllers.deleteItem(req.params.id);

    res.status(statusCode).send({ success, statusCode, body });
})

itemsRouter.put("/:id", async (req, res) => {
    const { success, statusCode, body } = await itemsControllers.updateItem(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body });
})

itemsRouter.get("/availables", async (req, res) => {
    const { body, success, statusCode } = await itemsControllers.getAvailableItems();

    res.status(statusCode).send({ body, success, statusCode  });
})

export default itemsRouter;
