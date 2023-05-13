const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // postID: {
  //   type: String,
  //   ref: "Post",
  // },
//   madeBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
});

module.exports = mongoose.model("Comment", CommentSchema);
