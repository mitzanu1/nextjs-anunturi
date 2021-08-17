import mongoose from "mongoose";
import Anunt from "../../dbSchema/anuntSchema";

const dbUrl =
  "mongodb+srv://mitzanu:250786aa@cluster1.j5uhq.mongodb.net/anunturi?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

async function handler(req, res) {
  const anunturi = await Anunt.find();
  res.status(200).json(anunturi);
}

export default handler;
