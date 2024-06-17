const router = require("express").Router()
const { sendMessage, allMessages } = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddelware");

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router