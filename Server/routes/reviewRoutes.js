const express = require("express");
const { addComment, getAllComments,deleteComment } = require("../controller/reviewsController.js");

const router = express.Router();

// Route to add a comment
router.post("/add", addComment);
router.get("/", getAllComments);
router.delete("/delete/:reviewId",deleteComment)

module.exports = router;