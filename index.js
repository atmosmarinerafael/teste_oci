import express from "express";
import testeRouter from "./teste.router.js";

const app = express();

app.use(express.json());
app.use(testeRouter);

app.listen(5000, () => console.log(`Server running in port 5000!`))