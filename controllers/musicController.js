const {Music} = require("../model/Music")
const {Album} = require("../model/Album")
const { getAudioDurationInSeconds } = require('get-audio-duration');

const path = require('path');
const { formatTime } = require("../helper/utils");

exports.createMusic = async(req , res)=> {

  if(!req.file){
    return res.status(400).send({message:"A music is required"});
  }

  const album = await Album.findById(req.body.albumId);

  if(!album){
    return res.status(404).json({message: "The artist does not exist."})
  }
  const duration = await getAudioDurationInSeconds(path.join(__dirname,"..",'/uploads',req.file.filename));


  const music = await Music.create({
    name: req.body.name,
    description:req.body.description,
    url:req.file.filename,
    album:req.body.albumId,
    duration:formatTime(duration.toFixed(0))
  })

  


 album.musics.push(music._id);
 await album.save();


 return res.status(201).json({music});
}

exports.getAllMusics = async(req,res)=> {

  const music = await Music.find({}).populate([{
    path:"album"
  }]).exec();

  return res.status(200).json({music});

}

exports.getMusicById = async(req, res)=>{
 res.status(200).json({message:"response from server"})
}

exports.deleteMusic = async(req,res)=>{ 
 res.status(201).json({message:"response from server"})
}

exports.updateMusic = async (req,res) =>{
 res.status(201).json({message:"response from server"})
}