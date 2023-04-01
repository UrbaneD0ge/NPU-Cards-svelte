import { Schema, model } from "mongoose";

const NPUSchema = new Schema({
  NPU: String,
  chair: String,
  chairE: String,
  planner: String,
  plannerE: String,
  meeting: String,
  ZoomID: String,
  ZoomPW: String,
  ZoomURL: String,
  bylawsURL: String,
});

// export default model("NPU", NPUSchema);