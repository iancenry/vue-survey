require('dotenv').config();
const connectDB = require('./config/db');

const express = require('express');
const app = express();


const { readdirSync } = require('fs');
const path = require('path');

// connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const routesDir = path.resolve(__dirname, './routes');
readdirSync(routesDir).forEach((file) => {
  const fileNameWithoutExt = path.parse(file).name;
  app.use(`/${fileNameWithoutExt}`, require(`./routes/${fileNameWithoutExt}`));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
