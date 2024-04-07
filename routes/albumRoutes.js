const express = require("express");
const albumController = require('../controllers/albumController');
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage(
  {
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
}
);
const upload = multer({storage:storage})


router.post("/", upload.single('image') ,albumController.createAlbum);
router.get("/" , albumController.getAllAlbum);
router.get("/:id" , albumController.getAlbumById);
router.delete("/:id" , albumController.deleteAlbum);
router.put("/:id" , albumController.updateAlbum);

module.exports = router;