import mongoose from "mongoose";

const anuntSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String, required: false },
    category: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true },
    contact: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Anunt = mongoose.models.Anunt || mongoose.model("Anunt", anuntSchema);

export default Anunt;
