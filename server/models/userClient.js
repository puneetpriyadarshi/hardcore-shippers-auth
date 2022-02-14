import mongoose from "mongoose";
const userClientSchema = mongoose.Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  natureOfMaterial: { type: String, required: true },
  weightOfMaterial: { type: String, required: true },
  quantityOfMaterial: { type: String, required: true },
  sourceState: { type: String, required: true },
  sourceCity: { type: String, required: true },
  id: { type: String },
});
export default mongoose.model("UserClient", userClientSchema);
