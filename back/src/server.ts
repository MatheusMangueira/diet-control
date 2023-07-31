import express from 'express';
import cors from 'cors';
import { router } from "./routes";
import swaggerUI from "swagger-ui-express";


const app = express();
app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup())

app.use(router)

app.listen(3333)