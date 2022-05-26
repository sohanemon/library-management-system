import { Schema, model, models } from "mongoose";

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: Array,
    required: true,
  },
  bookshelf: {
    type: Array,
    required: true,
  },
  cover: {
    type: String,
  },
});
export default models.book || model("book", bookSchema);
