const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MusicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },

  album:{
    type: mongoose.Types.ObjectId,
    ref:"Album"
  },

  description:{
    type :String
  },
  duration:{
type:String
  }

});

const Music = mongoose.model("Music", MusicSchema);
module.exports = { Music };