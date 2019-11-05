import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import path from "path";
import config from "./config";
import PostRoutes from "./routes/PostRoutes";

const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
app.use(cors());
app.use(PostRoutes);

// app.use(express.static(path.join(__dirname, "../client/build")));
// app.use("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );

const run = async () => {
  try {
    await mongoose.connect(config.DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    app.listen(config.PORT, () => {
      console.log(`Connected on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
