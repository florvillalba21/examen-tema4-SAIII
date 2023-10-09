const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());

// pagina principal
app.get("/", async(req, res)=>{
    const images = [];
    res.render("index", {images})
})

// retorna las imagenes en base a la raza
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
    res.status(500).json({ error: "Error al obtener las imágenes de la API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
