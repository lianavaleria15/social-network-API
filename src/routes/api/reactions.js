const { Router } = require("express");

const {
  createReactionForThought,
  deleteReactionByThought,
} = require("../../controllers/reactions");

const router = Router({ mergeParams: true });

router.post("/", createReactionForThought);
router.delete("/:reactionId", deleteReactionByThought);

module.exports = router;
