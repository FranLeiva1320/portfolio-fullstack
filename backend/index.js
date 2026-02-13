require("dotenv").config();
const contacto = require("./models/contacto");
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

app.post("/contacto", async (req, res) => {
  console.log("BODY RECIBIDO:", req.body);
  try {
    const nuevoContacto = new contacto(req.body);
    await nuevoContacto.save();

    const todos = await contacto.find();
    console.log("DOCUMENTOS EN DB:", todos);

    res.json({
      ok: true,
      message: "Mensaje guardado correctamente"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al guardar el mensaje"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});