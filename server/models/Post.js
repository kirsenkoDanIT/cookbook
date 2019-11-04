import { Schema, model } from "mongoose";

const schema = new Schema({
  title: { type: "String", trim: true, required: true },
  description: { type: "String", trim: true, required: true },
  ingredients: { type: [String], required: true },
  method: { type: [String], required: true },
  date: {
    type: Date,
    default: Date.now
  },
  archive: []
});

module.exports = model("Post", schema);
