// Importa las bibliotecas necesarias de Node.js y de terceros.
import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import photographyRouter from "./routes/photography.routes.js"; // Corregido

config();

// Crea una instancia de la aplicación Express.
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(photographyRouter); // Corregido
export default app;
