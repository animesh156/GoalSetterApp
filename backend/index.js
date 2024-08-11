const express = require("express");
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


const app = express();


     app.use(cors({
       origin: 'https://goal-setter-frontend-eta.vercel.app', // Allow requests from this specific origin
       methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
       allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
     }));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`.yellow);
});
