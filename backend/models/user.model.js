const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const { TokenExpiredError } = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 30,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 1024
        },
        picture : {
            type: String,
            default: "./img/default-user-pic.png"
        },
        bio : {
            type: String,
            max: 300
        },
        likes: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
);

// lancer fonction avant d'enregistrer

userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email')
  };

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;