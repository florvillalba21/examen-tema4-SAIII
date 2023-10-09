const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs"); // Configura EJS como el motor de plantillas
app.use(express.json());

app.get("/", async(req, res)=>{
    const images = [];
    res.render("index", {images})
})
app.get("/:raza", async (req, res) => {
  const perroRaza = req.params.raza;
  const urlBase = `https://dog.ceo/api/breed/${perroRaza}/images`;

  try {
    const response = await axios.get(urlBase);
    const images = response.data.message;
    console.log(perroRaza)
    // Renderiza el template 'index.ejs' y envía las imágenes como datos
    res.setHeader("Content-Type", "application/json");
    res.json({ images });
  } catch (error) {
    console.error(error);
    // Enviar un mensaje de error al cliente si la solicitud a la API falla
    res.status(500).json({ error: "Error al obtener las imágenes de la API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
