<<<<<<< HEAD
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
=======
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
>>>>>>> 15fc8e8b86a398d8e0dd60d306d636a6803926b8
