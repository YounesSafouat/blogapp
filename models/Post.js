const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId, 
    default: () => new mongoose.Types.ObjectId() 
  },
  message: {
    type: "string",
  },
  title: {
    type: "string",
  },
});
const Post = mongoose.model("Posts", PostSchema);
module.exports = Post;
