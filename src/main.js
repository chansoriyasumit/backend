import express from "express";
import { dbConnection } from "./config/db.config.js";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import testimonialRouter from "./routes/testimonial.route.js";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());



export const httpsServer = http.createServer(app);



httpsServer.listen(PORT, async () => {
  try {
    const sequelize = await dbConnection(
      process.env.db_name,
      process.env.db_username,
      process.env.db_password,
      process.env.db_host
    );
    await sequelize.authenticate();
    sequelize.dialect.supports.schemas = true;
    app.use(`/${process.env.api_version}/user`, testimonialRouter(sequelize));
    app.use((req, res) => {
      res.status(404).send({ reason: "Endpoint not found" });
    });
  } catch (err) {
    console.error(err);
  }
});
