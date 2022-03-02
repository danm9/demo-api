import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from "./src/routes/productRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 5500;

const dbUri =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:admin@cluster0.yurnv.mongodb.net/demo-db?retryWrites=true&w=majority";

const corsOrigins = process.env.CORS_ORIGINS || "/./";

mongoose.Promise = global.Promise;
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  cors({
    Origin: corsOrigins,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

productRoutes(app);
userRoutes(app);

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${port}`)
);

app.listen(port, () => console.log(`Server is running on port ${port}`));