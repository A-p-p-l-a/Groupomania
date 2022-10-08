const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
      posterId: {
        type: String,
        require: true
      },
      message: {
        type: String,
        trim: true,
        maxlength: 300
      },
      picture: {
        type: String,
      },
      likers: {
        type: [String],
        require: true
      },
      comments: {
        type: [
            {
                commenterId: String,
                commenterPseudo: String,
                text: String,
                timestamp: Number
            }
        ],
        require: true
      }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('post', postSchema);