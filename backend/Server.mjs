import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoutes from './Routes/AuthRoutes.mjs';  // Import your routes
import connectDb from './ConnectDb/ConnectDb.mjs';  // Import the database connection
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(cors({origin: 'http://localhost:5173',credentials: true}));
app.use(express.json());
app.use(cookieParser())
app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/hello", AuthRoutes);

const port = 5000;
app.listen(port, () => {
  connectDb();
  console.log(`Server is Running on port ${port}`);
});
