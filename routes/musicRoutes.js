const express = require("express");
const musicController = require('../controllers/musicController');
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage(
  {
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".mp3");
    },
}
);
const upload = multer({storage:storage})

router.post("/" ,upload.single('music') ,musicController.createMusic);
router.get("/" , musicController.getAllMusics);
router.get("/:id" , musicController.getMusicById);
router.delete("/:id" , musicController.deleteMusic);
router.put("/:id" , musicController.updateMusic);

module.exports = router;