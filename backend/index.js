const express = require("express");
const app = express()
const colors = require("colors");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
var cors = require('cors')

dotenv.config();

connectDB();


app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`.yellow);
});
