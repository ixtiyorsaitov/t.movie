// // models/comment.model.ts
// import mongoose, { Schema } from "mongoose";

// const CommentSchema = new Schema(
//   {
//     userId: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     movieId: {
//       type: Schema.Types.ObjectId,
//       ref: "Movie",
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     parentId: {
//       type: Schema.Types.ObjectId,
//       ref: "Comment",
//       default: null, // Reply bo'lmasa null
//     },
//     likes: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//       },
//     ],
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Comment ||
//   mongoose.model("Comment", CommentSchema);
