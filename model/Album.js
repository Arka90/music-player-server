const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AlbumSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },

  musics:[

    {
      type: mongoose.Types.ObjectId,
      ref:"Music"
    }

  ],

  description:{
    type:String
  }

});

const Album = mongoose.model("Album", AlbumSchema);
module.exports = { Album };
