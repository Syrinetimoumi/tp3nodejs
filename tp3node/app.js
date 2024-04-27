const express = require('express');
const mongoose = require('mongoose');
const annonceRoutes = require('./Routes/annonceRoutes'); 

const app = express();
const PORT = 3000;

app.use(express.json());

// Connexion BD
mongoose.connect("mongodb+srv://syrinetimoumi:Sirinetimoumi!1234@atlascluster.co49ea2.mongodb.net/annonce?retryWrites=true&w=majority&appName=AtlasCluster", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
}).catch(err => {
  console.error('Error connecting to database:', err.message);
});


app.use('/annonces', annonceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
