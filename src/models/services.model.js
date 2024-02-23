import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
  {
    serviceId: {
      type: String,
      unique: true,
      required: true,
    },
    serviceName: String,
    description: String,
    photographer: String,
    price: Number,
    duration: String, // Puedes usar otro tipo de dato si prefieres
    location: String,
    status: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Service", serviceSchema);
