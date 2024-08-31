const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: [1, "Tweet trop court"],
    maxlength: [140, "Tweet trop long"],
    required: [true, "Champ requis"],
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
