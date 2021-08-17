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
  const anunt = new Anunt({
    title: req.body.title,
    image: req.body.image,
    category: req.body.category,
    description: req.body.description,
    city: req.body.city,
    price: req.body.price,
    contact: req.body.contact,
  });
  const createdAnunt = await anunt.save();
  res.status(201).send({ createdAnunt });
}

export default handler;
