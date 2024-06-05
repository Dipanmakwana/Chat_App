const dotenv = require("dotenv")
const express = require("express")

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
    console.log(`App is listening on port ${PORT}`);
})