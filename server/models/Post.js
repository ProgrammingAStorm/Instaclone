const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PostSchema = new Schema(
  {
    imageName: {
      type: String,
      required: true
    },
    imageBuffer: {
      type: Buffer,
      required: true
    },
    imageType: {
      type: String,
      required: true
    },
    imageCaption: {
      type: String,
      required: true,
      trim: true
    },
    likes: [{
      type: String,
      ref: "User"
    }],
    tags: [{
      type: String,
      trim: true
    }],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
)

PostSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

PostSchema.virtual('imageString').get(function () {
  const buff = Buffer.from(this.imageBuffer, "utf-8")
  const base64 = buff.toString("base64")

  return base64;
})

const Post = model("Post", PostSchema);
module.exports = Post;
