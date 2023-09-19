import { Router } from "express";

const testeRouter = Router();

testeRouter.get("/", testeFun)

function testeFun(req, res) {
    return res.status(200).send("deu certo")
}

export default testeRouter;