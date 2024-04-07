const path = require('path');
const {Album} = require("../model/Album")
const {uploadFile} = require('../services/aws.service')

exports.createAlbum = async(req , res)=> {


  if(!req.file){
    return res.status(400).send({message:"A image is required"});
  }


  console.log(path.join(__dirname , ".." , "uploads" , req.file.filename));

  const album = await Album.create({
    name: req.body.name,
    description:req.body.description,
    image:req.file.filename
  })

  res.status(200).json({album})
}

exports.getAllAlbum = async(req,res)=> {
  
  
  const albums = await Album.find({}).populate([{
    path:"musics"
  }]).exec();

  return res.status(200).json({albums});


}

exports.getAlbumById = async(req, res)=>{
 

  const album = await Album.findById(req.params.id).populate([{
    path:"musics"
  }]).exec();

  if (!album) {
    return res.status(404).json({ message : 'Album not found' });
  }



  return res.status(200).json({album });


}

exports.deleteAlbum = async(req,res)=>{ 
 res.status(201).json({message:"response from server"})
}

exports.updateAlbum = async (req,res) =>{
 res.status(201).json({message:"response from server"})
}