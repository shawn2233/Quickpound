const Comment = require("../models/Comment");

module.exports = {

    createComment: async (req, res) => {
    try {
      // const comment = await Comment.find({postID:req.params.id});
      await Comment.create({
        comment: req.body.comment,
        likes:0,
        post:req.params.id,
        madeBy: req.user.id
      });
      console.log("Comment has been added!");
      res.redirect(`/post/${req.params.id}`); 
    } catch (err) {
      console.log(err);
    }
  },
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
  deleteComment: async (req, res) => {
    try {
      // Find post by id
      // let comment = await Comment.findById({ _id: req.params.id });
      // Delete image from cloudinary
      // Delete post from db
      await Comment.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
};
