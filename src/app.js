import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header( 'Access-Control-Allow-Origin', '*')
    app.use(cors())
    next();
}
);

export default app;
