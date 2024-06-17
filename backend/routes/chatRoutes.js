const router = require("express").Router();
const {
  accessChat,
  fetchChat,
  createGroup,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatController");
const { protect } = require("../middleware/authMiddelware");

router.route("/").get(protect, fetchChat).post(protect, accessChat);
router.route("/group").post(protect, createGroup)
router.route("/rename").put(protect, renameGroup)
router.route("/addToGroup").put(protect, addToGroup);
router.route("/removeFromGroup").put(protect, removeFromGroup);

module.exports = router;
