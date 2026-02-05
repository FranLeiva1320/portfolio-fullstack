require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const app = express();
const PORT = 3000;

connectDB();

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

app.post("/contacto", (req, res) => {
    console.log(req.body);
    res.json({ ok: true, message: "datos recibidos correctamente"});
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});